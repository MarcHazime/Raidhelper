const db = require("../services/db");
const argon2 = require("argon2")


async function main() {

  const slots = [
    "Arme 1",
    "Arme 2",
    "Tête",
    "Torse",
    "Jambes",
    "Pieds",
    "Amulette",
    "Anneau",
    "Boucle d'oreille",
    "Bouclier",
    "Mains"
  ];

  const slotData = {};

  for (const slot of slots) {
    slotData[slot] = (await db.Slots.create({ data: { name: slot } }))
  }

  const equipmentTypeData = {};

  const equipmentTypes = [
    {
      name: "Anneau",
      slots: {
        connect: [{ id: slotData["Anneau"].id }]
      }
    },
    {
      name: "Arc",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Hache",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Hachette",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Bâton de feu",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Bâton de vie",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Gantelet de glace",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Gantelet du néant",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Tromblon",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Epée",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Mousquet",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Rapière",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Marteau",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Lance",
      slots: {
        connect: [{ id: slotData["Arme 1"].id }, { id: slotData["Arme 2"].id }]
      }
    },
    {
      name: "Bouclier",
      slots: {
        connect: [{ id: slotData["Bouclier"].id }]
      }
    },
    {
      name: "Mains",
      slots: {
        connect: [{ id: slotData["Mains"].id }]
      }
    },
    {
      name: "Pieds",
      slots: {
        connect: [{ id: slotData["Pieds"].id }]
      }
    },
    {
      name: "Tête",
      slots: {
        connect: [{ id: slotData["Tête"].id }]
      }
    },
    {
      name: "Torse",
      slots: {
        connect: [{ id: slotData["Torse"].id }]
      }
    },
    {
      name: "Jambes",
      slots: {
        connect: [{ id: slotData["Jambes"].id }]
      }
    },
    {
      name: "Boucle d'oreille",
      slots: {
        connect: [{ id: slotData["Boucle d'oreille"].id }]
      }
    },
    {
      name: "Amulette",
      slots: {
        connect: [{ id: slotData["Amulette"].id }]
      }
    }
    

  ];

  for (const type of equipmentTypes) {
    equipmentTypeData[type.name] = (await db.EquipmentType.create({
      data: type
    }))
  }


  const equipments = [];



  const perks = [
    {
      id: 1,
      name: "Siphon incinérateur",
      location: "Bâton de feu & Armures",
      stats: "Rétablit 0.0 points de mana pour chaque coup porté par Incinération (0.0 fois maximum)."
    },
    {
      id: 2,
      name: "Adaptation au feu",
      location: "Armures &Bouclier",
      stats: "Après avoir été touché(e) par des dégâts de feu, vous gagnez 4.0% à l'absorption de feu pendant 5.0s. Chaque pièce d'armure avec cet atout augmente la puissance de l'effet."
    },
    {
      id: 3,
      name: "Esquive omnidirectionnelle",
      location: "Rapière & Armures",
      stats: "L'amélioration Adagio est appliquée lors d'une esquive effectuée dans n'importe quelle direction."
    },
    {
      id: 4,
      name: "Pilier de feu régénérateur",
      location: "Bâton de feu & Armures",
      stats: "Réduit de -3.0 % le temps de recharge de Pilier de feu chaque fois que cette capacité touche un ennemi (0.0 fois maximum)."
    },
    {
      id: 5,
      name: "Gel mortel",
      location: "Gantelets de glace & Armures",
      stats: "Lorsque l'amélioration Douches glaciales est active, les engelures provoquées par Tempête de grêle infligent -8.0 % des dégâts de l'arme par seconde aux ennemis affectés."
    },
    {
      id: 6,
      name: "Liberté",
      location: "Armures",
      stats: "Les effets de ralentissement, d'étourdissement et d'enracinement se terminent -3.0 % plus vite."
    },
    {
      id: 7,
      name: "Protection régénératrice",
      location: "Armures , Bouclier & Bijoux",
      stats: "Réduit les temps de recharge actifs de -0.5 % après avoir été touché(e) 4 fois. Ne déclenche pas de dégâts persistants ou d'effets sur la durée."
    },
    {
      id: 8,
      name: "Redynamisation",
      location: "Armures",
      stats: "Les effets d'affaiblissement, de maladie, d'épuisement et de lacération se terminent -3.0 % plus vite."
    },
    {
      id: 9,
      name: "Pièges accélérateurs",
      location: "Mousquet & Armures",
      stats: "Augmente la vitesse de déplacement de 5.0 % pendant 5.0 secondes après avoir posé un piège. (non cumulable)."
    },
    {
      id: 10,
      name: "Tir d'esquive énergisant",
      location: "Arc & Armures",
      stats: "Après avoir frappé une cible avec Tir d'esquive, vous gagnez 2.0 points de vitalité."
    },
    {
      id: 11,
      name: "Étreinte lumineuse accélératrice",
      location: "Bâton de vie & Armures",
      stats: "Les alliés touchés par Étreinte lumineuse lorsqu'ils ne sont pas en pleine santé bénéficient d'un gain de célérité, ce qui augmente leur vitesse de déplacement de 5.0 % pendant 3.0 s."
    },
    {
      id: 12,
      name: "Aversion élémentaire",
      location: "Armures",
      stats: "Vous subissez 2.0 % de dégâts en moins des attaques élémentaires à distance."
    },
    {
      id: 13,
      name: "Moisson handicapante",
      location: "Grande Hache & Armures",
      stats: "Si la cible touchée par Fauche a une santé inférieure à 50 %, elle est ralentie, sa vitesse de déplacement réduite de -10.0 % pendant 4.0 s."
    },
    {
      id: 14,
      name: "Maelström affaiblissant",
      location: "Grande Hache & Armures",
      stats: "Les cibles touchées par l'effet Pas de répit de Maelström sont affaiblies, ce qui réduit leurs dégâts de -3.0 % toutes les 8.0 s."
    },
    {
      id: 15,
      name: "Pylône détonant",
      location: "Gantelets de Glace & Armures",
      stats: "Pylône de glace inflige une rafale de dégâts aux adversaires présents dans un rayon de ? m lorsqu'il tire son projectile."
    },
    {
      id: 16,
      name: "Charge de mortier supplémentaire",
      location: "Tromblon & Armures",
      stats: "Rechargement d'une cartouche supplémentaire quand Charge de mortier tue un ennemi. (Limité à un rechargement par tir. Ne recharge plus après 3 cartouches.)"
    },
    {
      id: 17,
      name: "Grenade à fragmentation pestiférée",
      location: "Tromblon & Armures",
      stats: "Les frappes de la grenade à fragmentation infligent Maladie, ce qui réduit les soins que reçoit la cible de -5.0 % pendant 8.0 s."
    },
    {
      id: 18,
      name: "Marteau de fissure aspirant",
      location: "Marteau de guerre & Armures",
      stats: "Vous soignez à hauteur de 10.0 % des dégâts infligés par Marteau de fissure."
    },
    {
      id: 19,
      name: "Fortification élusive",
      location: "Armures",
      stats: "Échapper à un coup en esquivant vous octroie fortification, ce qui augmente de 2.0 % l'absorption des dégâts pendant 6.0s. Chaque pièce d'armure avec cet atout augmente la puissance de l'effet."
    },
    {
      id: 20,
      name: "Flèches explosives renforçantes",
      location: "Arc & Armures",
      stats: "Les flèches explosives qui touchent leur cible vous octroient renforcement et augmentent de 4.0 % vos dégâts pendant 10.0 secondes ou jusqu'à la prochaine attaque."
    },
    {
      id: 21,
      name: "Pyrotechnie efficace",
      location: "Bâton de feu & Armures",
      stats: "La vitesse de régénération du mana augmente de 20.0 % pendant 8.0 s après avoir utilisé Pyrotechnie."
    },
    {
      id: 22,
      name: "Estoc inversé contagieux",
      location: "Épée & Armures",
      stats: "Estoc inversé transfère un de vos affaiblissements actifs à la cible touchée."
    },
    {
      id: 23,
      name: "Tourbillon fortificateur",
      location: "Grande Hache & Armures",
      stats: "Après avoir frappé une cible avec Tourbillon, vous obtenez fortification et augmentez votre absorption des dégâts de 3.0 % pendant 2.0 s. (cumulable 5 fois)."
    },
    {
      id: 24,
      name: "Lancer infecté réparateur",
      location: "Hachette & Armures",
      stats: "Les morts infligées par Lancer infecté rendent 5.0 % des PV du joueur."
    },
    {
      id: 25,
      name: "Rafraîchissement",
      location: "Armures , Bouclier & Bijoux",
      stats: "Réduit les temps de recharge max de -1.0 %."
    },
    {
      id: 26,
      name: "Bombes collantes réparatrices",
      location: "Mousquet & Armures",
      stats: "Les morts infligées par une explosion de bombe collante vous confèrent 5.0 % de votre santé max."
    },
    {
      id: 27,
      name: "Flèche régénératrice",
      location: "Rapière & Armures",
      stats: "Les dégâts critiques infligés avec une attaque sournoise de Flèche réduisent de -5.0 % le temps de recharge de cette capacité."
    },
    {
      id: 28,
      name: "Perforation fortificatrice",
      location: "Lance & Armures",
      stats: "Vous gagnez 1 cumul de fortification par perforation appliquée, ce qui augmente l'absorption des dégâts de 2.0 % pendant 6.0 s."
    },
    {
      id: 29,
      name: "Protection réparatrice",
      location: "Bâton de vie & Armures",
      stats: "Augmente la puissance des soins de 5.0 % pendant 3.0 s si Orbe de protection soigne un allié avec moins de 50.0 % de santé."
    },
    {
      id: 30,
      name: "Tir transperçant régénérateur",
      location: "Arc & Armures",
      stats: "Les morts infligées par Tir transperçant réduisent de -3.0 % le temps de recharge de cette capacité."
    },
    {
      id: 31,
      name: "Explosion d'éclats vampirique",
      location: "Tromblon & Armures",
      stats: "Soigne à hauteur de 5.0 % des dégâts infligés par Explosion d'éclats d'Azoth."
    },
    {
      id: 32,
      name: "Coup de vent handicapant",
      location: "Tromblon & Armures",
      stats: "La vitesse de déplacement des cibles touchées par Coup de vent est réduite de -5.0 % pendant 5.0s."
    },
    {
      id: 33,
      name: "Onde de choc scindante",
      location: "Marteau de guerre & Armures",
      stats: "Marteau sismique inflige lacération, réduisant l'absorption des dégâts de la cible de -5.0 % pendant 10.0 secondes."
    },
    {
      id: 34,
      name: "Marteau balayeur répulsif",
      location: "Marteau de guerre & Armures",
      stats: "Marteau balayeur fait désormais reculer les cibles de 50.0 % supplémentaires."
    },
    {
      id: 35,
      name: "Coup de filet épuisant",
      location: "Tromblon & Armures",
      stats: "Coup de filet applique Épuisement, ce qui réduit de -10.0 % la régénération de la vitalité de la cible pendant 8.0 s."
    },
    {
      id: 36,
      name: "Tir-grappin aventurier",
      location: "Tromblon & Armures",
      stats: "Lorsque Tir-grappin atteint une cible à au moins 10.0 m de distance, vous obtenez 5.0 % de renforcement pendant 3.0 s ou jusqu'au prochain coup au but."
    },
    {
      id: 37,
      name: "Soins d'esquive",
      location: "Armures",
      stats: "JcJ seulement : Esquiver une attaque restaure 100.0 points de santé + 1.0 % de vos PV max (chaque pièce d'armure avec cet atout ajoute un cumul. Se déclenche une fois toutes les 5s)."
    },
    {
      id: 38,
      name: "Brûlure de poudre handicapante",
      location: "Mousquet & Armures",
      stats: "Les cibles touchées par Brûlure de poudre sont ralenties de -5.0 % pendant 5.0 s."
    },
    {
      id: 39,
      name: "Protection de siège",
      location: "Armures",
      stats: "JcJ seulement : subissez 6.0 % de dégâts en moins des armes de siège."
    },
    {
      id: 40,
      name: "Pique affaiblissante",
      location: "Lance & Armures",
      stats: "Embrocher la cible applique 1 cumul d'affaiblissement, ce qui réduit les dégâts de la cible de -3.0 % pendant 8.0 s."
    },
    {
      id: 41,
      name: "Rayon de lumière énergisant",
      location: "Bâton de vie & Armures",
      stats: "Les alliés soignés par Rayon de lumière gagnent 3.0 points de vitalité."
    },
    {
      id: 42,
      name: "Ruée de bouclier fortifiée",
      location: "Bouclier & Armures",
      stats: "Après avoir frappé une cible avec Ruée de bouclier, vous obtenez fortification, augmentant votre absorption des dégâts de 5.0 % pendant 4.0 s."
    },
    {
      id: 43,
      name: "Drain ralentissant",
      location: "Gantelets du Néant & Armures",
      stats: "Si l'attaque est réussie, Lien funeste inflige ralentissement, réduisant la vitesse de déplacement de la cible de -20.0 % pendant 3.0s."
    },
    {
      id: 44,
      name: "Ruée féroce énergétique",
      location: "Hachette & Armures",
      stats: "Confère 1.0 points de vitalité pour chaque coup porté avec Ruée féroce."
    },
    {
      id: 45,
      name: "Position du tireur régénératrice",
      location: "Mousquet & Armures",
      stats: "Frapper une cible en Position du tireur vous octroie renforcement et augmente vos dégâts de 4.0 % pendant 3.0s."
    },
    {
      id: 46,
      name: "Tir empoisonné affaiblissant",
      location: "Arc & Armures",
      stats: "La flèche de Tir empoisonné applique Affaiblissement, ce qui réduit les dégâts de la cible de -3.0 % pendant 6.0 s."
    },
    {
      id: 47,
      name: "Rupture renforçante",
      location: "Gantelets du Néant & Armures",
      stats: "Après un coup mortel infligé à une cible affectée par Rupture de l'essence, vous obtenez Renforcement, ce qui augmente vos dégâts de 10.0 % pendant 10.0s."
    },
    {
      id: 48,
      name: "Aversion physique",
      location: "Armures",
      stats: "Vous subissez 2.0 % de dégâts en moins des attaques physiques à distance."
    },
    {
      id: 49,
      name: "Pluie de flèches fortifiante",
      location: "Arc & Armures",
      stats: "Après avoir frappé une cible avec Pluie de flèches, vous obtenez fortification et augmentez votre absorption des dégâts de 5.0 % pendant 6.0 s."
    },
    {
      id: 50,
      name: "Dégâts de néant",
      location: "Anneau",
      stats: "Vous infligez 3.0 % de dégâts de néant supplémentaires."
    },
    {
      id: 51,
      name: "Posture provocatrice accélérée",
      location: "Bouclier & Armures",
      stats: "Le déclenchement de Posture provocatrice augmente la vitesse de déplacement de 5.0 % pendant 6.0 s."
    },
    {
      id: 52,
      name: "Dégâts de glace",
      location: "Anneau",
      stats: "Vous infligez 3.0 % de dégâts de glace supplémentaires."
    },
    {
      id: 53,
      name: "Exécution réparatrice",
      location: "Grande Hache & Armures",
      stats: "Pour chaque mort infligée par Exécution, vous récupérez 5.0 % de votre santé."
    },
    {
      id: 54,
      name: "Saut de marteau régénérateur",
      location: "Marteau de guerre & Armures",
      stats: "Les morts infligées par Saut de marteau réduisent de -5.0 % le temps de recharge de cette capacité."
    },
    {
      id: 55,
      name: "Distanciation tranchante",
      location: "Hachette & Armures",
      stats: "Les tirs à la tête de Distanciation sociale infligent 0.0 % de dégâts supplémentaires."
    },
    {
      id: 56,
      name: "Rage intense",
      location: "Hachette & Armures",
      stats: "Augmente de 1.0 % les chances de coup critique lorsque le mode Rage est actif et que votre santé est inférieure à 50.0 %."
    },
    {
      id: 57,
      name: "Fanal revitalisant",
      location: "Bâton de vie & Armures",
      stats: "Après avoir utilisé Fanal, la puissance des soins que vous vous prodiguez est augmentée de 5.0 % pendant 12.0 s."
    },
    {
      id: 58,
      name: "Volée de bouclier répulsive",
      location: "Bouclier & Armures",
      stats: "L'effet de choc de Volée de bouclier se voit accorder un bonus de 0.0 %."
    },
    {
      id: 59,
      name: "Cyclone aspirant",
      location: "Lance & Armures",
      stats: "Chaque coup porté par Cyclone vous soigne à hauteur de 10.0 % des dégâts de l'arme."
    },
    {
      id: 60,
      name: "Brise-armure fortifiant",
      location: "Marteau de guerre & armures",
      stats: "Lorsque Brise-armure brise un blocage, la prochaine attaque effectuée dans les 5.0 s inflige 3.0 % de dégâts supplémentaires."
    },
    {
      id: 61,
      name: "Coup de pied franc",
      location: "Lance & Armures",
      stats: "Coup de pied sauté augmente les chances de coup critique de 2.0 % pendant 5.0 s."
    },
    {
      id: 62,
      name: "Vigueur",
      location: "Armures",
      stats: "Les effets de brûlure, de saignement et de poison se terminent -3.0 % plus vite."
    },
    {
      id: 63,
      name: "Frénésie aspirante",
      location: "Rapière & Armures",
      stats: "Convertit 10.0 % de vos dégâts en points de santé chaque fois que Frénésie fait mouche."
    },
    {
      id: 64,
      name: "Coups critiques tranchants",
      location: "Corps à corps",
      stats: "Les attaques lourdes chargées au maximum infligent 5.0 % de dégâts critiques supplémentaires."
    },
    {
      id: 65,
      name: "Résilience",
      location: "Armures",
      stats: "Les coups critiques vous infligent 0.0 % de dégâts en moins."
    },
    {
      id: 66,
      name: "Vents constants",
      location: "Gantelets de Glace & Armures",
      stats: "Confère un gain de 10 % de mana après une explosion complète de Vent mordant."
    },
    {
      id: 67,
      name: "Rafraîchissement glacé",
      location: "Gantelets de Glace & Armures",
      stats: "Un coup mortel avec la pique puissante de glace réduit tous les temps de recharge des sorts de glace de -10.0 %."
    },
    {
      id: 68,
      name: "Boule de feu fortifiante",
      location: "Bâton de feu & Armures",
      stats: "L'impact de Boule de feu inflige 5.0 % de dégâts supplémentaires."
    },
    {
      id: 69,
      name: "Célérité",
      location: "Amulette",
      stats: "La célérité que vous appliquez dure 5.0 % plus longtemps."
    },
    {
      id: 70,
      name: "Brillant",
      location: "Anneau",
      stats: "Vous avez +10.0 % de mana max."
    },
    {
      id: 72,
      name: "Paralysie",
      location: "Anneau",
      stats: "Le ralentissement que vous appliquez dure 10.0 % plus longtemps."
    },
    {
      id: 73,
      name: "Prison curative",
      location: "Gantelets de Glace & Armures",
      stats: "Confère un gain de 10 % de santé lorsque Prison de glace est annulée avec une jauge de mana pleine."
    },
    {
      id: 74,
      name: "Cruauté",
      location: "Armes & Boucliers",
      stats: "+3.0 % de dégâts critiques."
    },
    {
      id: 75,
      name: "Empoisonnement",
      location: "Anneau",
      stats: "Le poison que vous appliquez dure 5.0 % plus longtemps."
    },
    {
      id: 76,
      name: "Marteau de destruction pénétrant",
      location: "Marteau de guerre & Armures",
      stats: "Marteau de destruction pénètre 5.0 % de l'armure de la cible."
    },
    {
      id: 77,
      name: "Javelot scindant",
      location: "Lance & Armures",
      stats: "Javelot inflige lacération, réduisant l'absorption des dégâts de la cible de -5.0 % pendant 10.0 secondes."
    },
    {
      id: 78,
      name: "Chapelet de néant",
      location: "Armes",
      stats: "Lorsqu'une attaque de base touche, déclenche un Chapelet de néant ricochant entre les cibles proches qui inflige -15.0 % des dégâts de l'arme (0.0s de temps de recharge)."
    },
    {
      id: 79,
      name: "Fougue",
      location: "Armes & Boucliers",
      stats: "+3.0 % de chances de coup critique."
    },
    {
      id: 80,
      name: "Vol de vie mortel",
      location: "Armes & Boucliers",
      stats: "Quand vous tuez quelque chose, vous gagnez 3.0 % de santé (0.0s de temps de recharge)."
    },
    {
      id: 81,
      name: "Frappes pestiférées",
      location: "Corps à corps",
      stats: "Les attaques lourdes contre les cibles infligent maladie pendant 8.0s et réduisent l'efficacité de leurs soins de -10.0 %."
    },
    {
      id: 82,
      name: "Puissance mortelle",
      location: "Armes & Boucliers",
      stats: "Quand vous tuez quelque chose, vous gagnez 15.0 % de renforcement pendant 5.0s (0.0s de temps de recharge)."
    },
    {
      id: 83,
      name: "Conscience aiguë",
      location: "Anneau",
      stats: "+3.0 % de chances de coup critique."
    },
    {
      id: 84,
      name: "Dégel permanent",
      location: "Gantelets de Glace & Armures",
      stats: "Les effets du gel restent sur les ennemis pendant 2 secondes après leur sortie de Tempête de glace."
    },
    {
      id: 85,
      name: "Coups critiques pestiférés",
      location: "Armes",
      stats: "Les coups critiques contre les cibles dont la santé est inférieure à 50.0 % infligent maladie pendant 6.0s et réduisent l'efficacité de leurs soins de -10.0 %."
    },
    {
      id: 86,
      name: "Flammes élusives",
      location: "Armes",
      stats: "Si vous échappez à un coup en esquivant, votre prochain coup dans les 6.0s infligera -5.0 % de dégâts de l'arme de base supplémentaires sous forme de dégâts de feu."
    },
    {
      id: 87,
      name: "Contre de déjouement",
      location: "Corps à corps",
      stats: "Inflige 5.0 % de dégâts supplémentaires contre les cibles avec le courage actif."
    },
    {
      id: 88,
      name: "Tondo vicieux",
      location: "Rapière & Armures",
      stats: "Augmente de 2.0 % les chances de coup critique contre les cibles affectées par le saignement de Tondo."
    },
    {
      id: 89,
      name: "Rétribution critique",
      location: "Casques",
      stats: "Subir un coup critique vous confère 0.0 % de chances de coup critique supplémentaires pendant 7.0s (0.0s de temps de recharge)"
    },
    {
      id: 90,
      name: "Purification élusive handicapante",
      location: "Amulette",
      stats: "Échapper à un coup en esquivant avec un poids d'équipement moyen vous fait perdre 1 handicap (lacération, affaiblissement, épuisement, maladie) (se déclenche une fois toutes les 5.0 secondes)."
    },
    {
      id: 91,
      name: "Sacré",
      location: "Anneau",
      stats: "+3.0 % de soins prodigués."
    },
    {
      id: 92,
      name: "Ponction",
      location: "Anneau",
      stats: "Vous convertissez 1.0 % de vos dégâts en points de santé. Ne déclenche pas de dégâts persistants ou d'effets sur la durée."
    },
    {
      id: 93,
      name: "Double dose",
      location: "Boucle d'oreille",
      stats: "Quand vous buvez une potion, vous avez 5.0 % de chances qu'elle ne soit pas consommée."
    },
    {
      id: 94,
      name: "Lacération fracturante",
      location: "Corps à corps",
      stats: "JcJ seulement : en brisant la garde d'un joueur, inflige lacération, ce qui réduit de -12.0 % l'absorption des dégâts pendant 4.0s."
    },
    {
      id: 95,
      name: "Frappes tranchantes",
      location: "Corps à corps",
      stats: "Les attaques lourdes chargées au maximum infligent 3.0 % de dégâts supplémentaires."
    },
    {
      id: 96,
      name: "Tir à la tête pénétrant",
      location: "Armes à distance",
      stats: "JcJ seulement : les tirs à la tête ignorent 0.0 % de l'armure d'un joueur."
    },
    {
      id: 97,
      name: "Exploitation d'épuisement",
      location: "Armes",
      stats: "JcJ seulement : les coups contre les joueurs épuisés infligent Ralentissement, ce qui réduit de -15.0 % leur vitesse de déplacement pendant 4.0 secondes."
    },
    {
      id: 98,
      name: "Cercle divin régénérateur",
      location: "Bâton de vie & Armures",
      stats: "Utiliser Cercle divin sur une cible dont la santé est inférieure à 50 % réduit le temps de recharge de -11.83 %."
    },
    {
      id: 99,
      name: "Rupture renforcée",
      location: "Boucliers",
      stats: "Vos attaques bloquées vous confèrent un cumul de renforcement, augmentant vos dégâts de 2.0 % pendant 5.0s (5.0 cumuls max)."
    },
    {
      id: 100,
      name: "Balayage de saignement",
      location: "Lance & Armures",
      stats: "Le dernier coup porté par Balayage applique désormais un saignement qui inflige -2.0 % des dégâts de l'arme pendant 4.0 s."
    },
    {
      id: 101,
      name: "Renégat",
      location: "Corps à corps",
      stats: "+0.0 % de dégâts des attaques sournoises."
    },
    {
      id: 102,
      name: "Harmonisation abyssale",
      location: "Armess",
      stats: "Les attaques infligent -18.0 % de dégâts supplémentaires sous forme de dégâts de néant. Ne déclenche pas de dégâts persistants ou d'effets sur la durée (0.0s de temps de recharge)."
    },
    {
      id: 103,
      name: "Pluie de météores fortifiante",
      location: "Bâton de feu & Armures",
      stats: "Chaque coup porté par Pluie de météores inflige 0.0 % de dégâts supplémentaires aux cibles en pleine santé."
    },
    {
      id: 104,
      name: "Évasion régénératrice",
      location: "Armures , Bouclier & Bijoux",
      stats: "Réduit les temps de recharge actifs de -0.5 % après avoir accompli une esquive."
    },
    {
      id: 105,
      name: "Adaptation au néant",
      location: "Armures & Boucliers",
      stats: "Après avoir été touché(e) par des dégâts de néant, vous gagnez 4.0% à l'absorption de néant pendant 5.0s. Chaque pièce d'armure avec cet atout augmente la puissance de l'effet."
    },
    {
      id: 106,
      name: "Affaiblissement",
      location: "Anneau",
      stats: "L'affaiblissement que vous appliquez dure 10.0 % plus longtemps."
    },
    {
      id: 107,
      name: "Saut d'estoc fortifiant",
      location: "Épée & Armures",
      stats: "Inflige 3.0 % de dégâts supplémentaires aux cibles ralenties par Châtiment indigne, l'amélioration de Saut d'estoc."
    },
    {
      id: 108,
      name: "Régénération",
      location: "Boucle d'oreille",
      stats: "Vous gagnez 0.25 % de santé toutes les secondes."
    },
    {
      id: 109,
      name: "Tir rapide transperçant",
      location: "Arc & Armures",
      stats: "Augmente de 5.0 % la pénétration d'armure infligée par la dernière flèche de Tir rapide."
    },
    {
      id: 110,
      name: "Puits de gravité insatiable",
      location: "Grande Hache & Armures",
      stats: "Convertit 15.0 % de vos dégâts infligés avec Puits de gravité en points de santé et lance une autre explosion de 4.0m de rayon en cas de succès, infligeant 125.0 % des dégâts de l'arme."
    },
    {
      id: 111,
      name: "Lame vorace",
      location: "Gantelets du néant & Armures",
      stats: "Lorsque votre santé est inférieure à 50.0 %, les attaques réussies avec Lame de néant vous soignent à hauteur de 10.0 % des dégâts infligés."
    },
    {
      id: 112,
      name: "Effusion de sang",
      location: "Anneau",
      stats: "Le saignement que vous appliquez dure 5.0 % plus longtemps."
    },
    {
      id: 113,
      name: "Siphon mortel",
      location: "Armes",
      stats: "Quand vous tuez quelque chose, vous gagnez 3.0 % de mana (0.0s de temps de recharge)."
    },
    {
      id: 114,
      name: "Renforcement d'esquive",
      location: "Amulette",
      stats: "JcJ seulement : obtenez renforcement en esquivant une attaque, ce qui augmente de 4.0 % vos dégâts pendant 10.0s. La durée se réinitialise quand un nouveau cumul est appliqué (cumulable 4.0 fois)."
    },
    {
      id: 115,
      name: "Attaque sournoise pénétrante",
      location: "Armes",
      stats: "JcJ seulement : les attaques sournoises ignorent 0.0 % de l'armure d'un joueur."
    },
    {
      id: 116,
      name: "Fortification robuste",
      location: "Bouclier",
      stats: "JcJ seulement : parer des attaques d'un joueur ajoute un cumul de 4.0 % de fortification pendant 5.0s sur soi pour chaque coup paré (cumulable 5.0 fois)."
    },
    {
      id: 118,
      name: "Boisson saine",
      location: "Boucle d'oreille",
      stats: "Quand vous buvez une potion de mana, vous gagnez 3.0 % de votre santé max."
    },
    {
      id: 119,
      name: "Châtiment de hâte",
      location: "Armes",
      stats: "JcJ seulement : inflige 8.0 % de dégâts supplémentaires aux joueurs ayant Célérité."
    },
    {
      id: 120,
      name: "Enchanté",
      location: "Armes",
      stats: "Les attaques légères et lourdes infligent 5.0 % de dégâts supplémentaires."
    },
    {
      id: 121,
      name: "Précision",
      location: "Armes à distance",
      stats: "Vous avez +25.0 % de précision supplémentaire."
    },
    {
      id: 122,
      name: "Frappes de déjouement",
      location: "Corps à corps",
      stats: "Inflige 3.0 % de dégâts supplémentaires lorsque votre courage est actif."
    },
    {
      id: 123,
      name: "Énergie élusive",
      location: "Jambière",
      stats: "Échapper à un coup en esquivant avec un poids d'équipement léger vous octroie 10.0 points de vitalité (6.0s de temps de recharge)."
    },
    {
      id: 124,
      name: "Dégâts de feu",
      location: "Anneau",
      stats: "Vous infligez 3.0 % de dégâts de feu supplémentaires."
    },
    {
      id: 125,
      name: "Purification",
      location: "Amulette",
      stats: "Si vous subissez des dégâts alors que votre santé est inférieure à 50 %, vous perdez tous les affaiblissements qui vous affectent (90.0s de temps de recharge). Ne déclenche pas de dégâts persistants ou d'effets sur la durée."
    },
    {
      id: 126,
      name: "Dégâts de taille",
      location: "Anneau",
      stats: "Vous infligez 3.0 % de dégâts de taille supplémentaires."
    },
    {
      id: 127,
      name: "Cri de putréfaction",
      location: "Gantelets du néant & Armures",
      stats: "Si l'attaque est réussie, Cri pétrifiant inflige Maladie, réduisant les soins que reçoit la cible de -10.0 % pendant 10.0s."
    },
    {
      id: 128,
      name: "Infection",
      location: "Anneau",
      stats: "La maladie que vous appliquez dure 10.0 % plus longtemps."
    },
    {
      id: 129,
      name: "Concentration",
      location: "Boucle d'oreille",
      stats: "+25.0 % de régénération du mana."
    },
    {
      id: 130,
      name: "Renforcement",
      location: "Amulette",
      stats: "Le renforcement que vous appliquez dure 5.0 % plus longtemps."
    },
    {
      id: 131,
      name: "Salement amoché",
      location: "Armes",
      stats: "Les coups critiques provoquent un saignement qui inflige 7 % des dégâts de l'arme pendant 6.0s (0.0s de temps de recharge)."
    },
    {
      id: 132,
      name: "Vitesse de pointe",
      location: "Armes",
      stats: "Les coups critiques vous confèrent 20.0 % de célérité pendant 10.0s. (0.0s de temps de recharge)."
    },
    {
      id: 133,
      name: "Chapelet de foudre",
      location: "Armes",
      stats: "Lorsqu'une attaque de base touche, déclenche un Chapelet de foudre ricochant entre les cibles proches qui inflige -15.0 % des dégâts de l'arme (0.0s de temps de recharge)."
    },
    {
      id: 134,
      name: "Chapelet de feu",
      location: "Armes",
      stats: "Lorsqu'une attaque de base touche, déclenche un Chapelet de feu ricochant entre les cibles proches qui inflige -15.0 % des dégâts de l'arme (0.0s de temps de recharge)."
    },
    {
      id: 135,
      name: "Vol de vie",
      location: "Armes",
      stats: "Vous convertissez 1.0 % de vos dégâts en points de santé. Ne déclenche pas de dégâts persistants ou d'effets sur la durée."
    },
    {
      id: 136,
      name: "Chapelet de glace",
      location: "Armes",
      stats: "Lorsqu'une attaque de base touche, déclenche un Chapelet de glace ricochant entre les cibles proches qui inflige -11.0 % des dégâts de l'arme (0.0s de temps de recharge)."
    },
    {
      id: 137,
      name: "Chapelet occulte",
      location: "Armes",
      stats: "Lorsqu'une attaque de base touche, déclenche un Chapelet occulte ricochant entre les cibles proches qui inflige -11.0 % des dégâts de l'arme (0.0s de temps de recharge)."
    },
    {
      id: 139,
      name: "Foudre élusive",
      location: "Armes",
      stats: "Si vous échappez à un coup en esquivant, votre prochain coup dans les 6.0s infligera -5.0 % de dégâts de l'arme de base supplémentaires sous forme de dégâts de foudre."
    },
    {
      id: 140,
      name: "Torrent régénérateur",
      location: "Hachette & Armures",
      stats: "Chaque coup porté avec Torrent enragé réduit de -1.0 % les temps de recharge de votre hachette."
    },
    {
      id: 141,
      name: "Puissance d'interruption énergétique",
      location: "Mousquet & Armures",
      stats: "Les morts infligées par Puissance d'interruption confèrent 10.0 points de vitalité."
    },
    {
      id: 142,
      name: "Récupération tranchante",
      location: "Corps à corps",
      stats: "Les attaques lourdes chargées au maximum confèrent des soins à hauteur de 10.0 % des dégâts infligés."
    },
    {
      id: 143,
      name: "Embellissement énergétique",
      location: "Rapière & Armures",
      stats: "Les coups réussis avec Embellissement confèrent 5.0 points de vitalité."
    },
    {
      id: 144,
      name: "Arts obscurs élusifs",
      location: "Armes",
      stats: "Si vous échappez à un coup en esquivant, votre prochain coup dans les 6.0s infligera -5.0 % de dégâts de l'arme de base supplémentaires sous forme de dégâts de magie occulte."
    },
    {
      id: 145,
      name: "Harmonisation gélive",
      location: "Armes",
      stats: "Les attaques infligent -18.0 % de dégâts supplémentaires sous forme de dégâts de glace. Ne déclenche pas de dégâts persistants ou d'effets sur la durée (0.0s de temps de recharge)."
    },
    {
      id: 146,
      name: "Harmonisation arboricole",
      location: "Armes",
      stats: "Les attaques infligent -18.0 % de dégâts supplémentaires sous forme de dégâts de nature (0.0s de temps de recharge)."
    },
    {
      id: 147,
      name: "Dégâts de frappe",
      location: "Anneau",
      stats: "Vous infligez 3.0 % de dégâts de frappe supplémentaires."
    },
    {
      id: 148,
      name: "Charge régénératrice",
      location: "Grande Hache & Armures",
      stats: "Utiliser Charge sur une cible en pleine santé réduit le temps de recharge de -5.0 %."
    },
    {
      id: 149,
      name: "Récupération de vitalité",
      location: "Amulette",
      stats: "Si vous subissez des dégâts alors que votre santé est inférieure à 50 %, vous gagnez 50.0 points de vitalité (30.0s de temps de recharge). Ne déclenche pas de dégâts persistants ou d'effets sur la durée."
    },
    {
      id: 150,
      name: "Providence",
      location: "Amulette",
      stats: "Tous les effets de soins reçus vous rendent 5.0 % de santé supplémentaire."
    },
    {
      id: 151,
      name: "Dégâts d'estoc",
      location: "Anneau",
      stats: "Vous infligez 3.0 % de dégâts d'estoc supplémentaires."
    },
    {
      id: 152,
      name: "Boisson purifiante",
      location: "Boucle d'oreille",
      stats: "Quand vous buvez une potion de régénération, vous perdez 1.0 affaiblissements."
    },
    {
      id: 153,
      name: "Tonnerre de poudre régénérateur",
      location: "Mousquet & Armures",
      stats: "Les morts infligées par Tonnerre de poudre réduisent de -8.5 % le temps de recharge de cette capacité."
    },
    {
      id: 154,
      name: "Récupération de fortification",
      location: "Amulette",
      stats: "Si vous subissez des dégâts alors que votre santé est inférieure à 50 %, vous gagnez 10.0 % de fortification pendant 5.0s (90.0s de temps de recharge). Ne déclenche pas de dégâts persistants ou d'effets sur la durée."
    },
    {
      id: 155,
      name: "Position stable",
      location: "Boucliers",
      stats: "Vous vous déplacez 20.0 % plus vite en parant."
    },
    {
      id: 156,
      name: "Bénédiction",
      location: "Bâtons de vie & Gantelets du néant",
      stats: "+5.0 % de bonus aux soins."
    },
    {
      id: 157,
      name: "Abnégation d'annulation",
      location: "Gantelets du néant & Armures",
      stats: "À l'activation, Abnégation supprime les améliorations à durée limitée des ennemis situés dans sa zone d'effet."
    },
    {
      id: 158,
      name: "Coups critiques purifiants",
      location: "Corps à corps",
      stats: "JcJ seulement : les coups critiques contre les joueurs suppriment 0.0 amélioration(s) de la cible (0.0s de temps de recharge)."
    },
    {
      id: 159,
      name: "Riposte scindante",
      location: "Rapière & Armures",
      stats: "Riposte inflige lacération, réduisant l'absorption des dégâts de la cible de -5.0 % pendant 10.0 secondes."
    },
    {
      id: 160,
      name: "Lame virevoltée fortifiante",
      location: "Épée & Armures",
      stats: "Les dégâts de base sont augmentés de 20.0 % pendant l'exécution d'une attaque avec Lame virevoltée si 3 ennemis ou plus se trouvent dans la zone d'effet."
    },
    {
      id: 162,
      name: "Fortification",
      location: "Amulette",
      stats: "La fortification que vous appliquez dure 5.0 % plus longtemps."
    },
    {
      id: 163,
      name: "Lancer déchirant énergétique",
      location: "Hachette & Armures",
      stats: "Les morts infligées par Lancer déchirant vous octroient 5.0 points de vitalité."
    },
    {
      id: 164,
      name: "Terre sainte fortifiante",
      location: "Bâton de vie & Armures",
      stats: "Les alliés soignés par Terre sainte obtiennent Fortification et augmentent leur absorption des dégâts de 3.0 % pendant 5.0 s."
    },
    {
      id: 165,
      name: "Brûlure",
      location: "Anneau",
      stats: "La brûlure que vous appliquez dure 10.0 % plus longtemps."
    },
    {
      id: 166,
      name: "Agilité",
      location: "Boucle d'oreille",
      stats: "+5.0 % de régénération de vitalité."
    },
    {
      id: 167,
      name: "Mouvement régénérateur",
      location: "Armes",
      stats: "Les attaques légères et lourdes réduisent de -1.0 % les temps de recharge actifs de vos armes."
    },
    {
      id: 168,
      name: "Santé",
      location: "Amulette",
      stats: "Vous avez 3.0 % de santé max supplémentaire."
    },
    {
      id: 169,
      name: "Vorpaline",
      location: "Armes à distance",
      stats: "Augmente de +5.0 % les dégâts à la tête."
    },
    {
      id: 172,
      name: "Orbe diminuant",
      location: "Gantelets du néant & Armures",
      stats: "Lorsque vous faites mouche, Orbe de putréfaction réduit la durée des améliorations de la cible de -20.0 %."
    },
    {
      id: 173,
      name: "Harmonisation ignée",
      location: "Armes",
      stats: "Les attaques infligent -18.0 % de dégâts supplémentaires sous forme de dégâts de feu. Ne déclenche pas de dégâts persistants ou d'effets sur la durée (0.0s de temps de recharge)."
    },
    {
      id: 174,
      name: "Lance-flammes accélérateur",
      location: "Bâton de feu & Armures",
      stats: "Appliquer 3.0 cumuls de brûlure sur une cible avec Lance-flammes confère Célérité, augmentant la vitesse de déplacement de 20.0 % pendant 2.0 s."
    },
    {
      id: 175,
      name: "Grandement fortifié",
      location: "Armes",
      stats: "Les coups critiques vous confèrent 10.0 % de fortification pendant 3.0s. (0.0s de temps de recharge)."
    },
    {
      id: 176,
      name: "Lacération tranchante",
      location: "Corps à corps",
      stats: "Les attaques lourdes chargées au maximum infligent lacération pendant 7.0s, réduisant l'absorption des dégâts de la cible de -4.0 % (12.0s de temps de recharge)."
    },
    {
      id: 177,
      name: "Pleinement renforcé",
      location: "Armes",
      stats: "Les coups critiques vous confèrent 15.0 % de renforcement pendant 5.0s. (0.0s de temps de recharge)."
    },
    {
      id: 178,
      name: "Boisson rafraîchissante",
      location: "Boucle d'oreille",
      stats: "Le temps de recharge des potions est -10.0 % plus rapide."
    },
    {
      id: 179,
      name: "Purification élusive de dégâts sur la durée",
      location: "Amulette",
      stats: "Échapper à un coup en esquivant avec un poids d'équipement léger vous fait perdre 1 effet de dégâts sur la durée (saignement, brûlure, poison) (se déclenche une fois toutes les 5.0 secondes)."
    }
  ]

  for (const perk of perks) {
   await db.Perk.create({
     data: {
       name: perk.name,
       location: perk.location,
    },
    });
 }


  const users = [
    {
      id: 1,
      pseudo: "marc",
      password: await argon2.hash("marco")
    }
  ]

  for (const user of users) {
    await db.User.create({
      data: {
        pseudo: user.pseudo,
        password: user.password,
      },
    });
  }

};

main();
