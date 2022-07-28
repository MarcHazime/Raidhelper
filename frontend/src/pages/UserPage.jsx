import Navbar from "../components/NavBar";
import SelectPerks from "../components/SelectPerk";


export default function UserPage() {


    return (
        <div className="bg-yellow-400 ">
            <Navbar />
            <div className=" mx-auto h-screen grid grid-cols-4">
                <SelectPerks text={"Arme 1"} />
                <SelectPerks text={"Arme 2"} />
                <SelectPerks text={"Tête"} />
                <SelectPerks text={"Torse"} />
                <SelectPerks text={"Jambes"} />
                <SelectPerks text={"Pieds"} />
                <SelectPerks text={"Amulette"} />
                <SelectPerks text={"Anneau"} />
                <SelectPerks text={"Boucle d'oreille"} />
            </div>
        </div>
    );
}