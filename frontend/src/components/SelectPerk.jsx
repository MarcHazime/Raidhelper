import { useEffect, useState } from "react";
import { fetchSlots } from "../services/api";

import Perks from "./Perks"

export default function SelectPerks() {

    const handleChange = (value) => {
        console.log(value)
    }

    const [slot, setSlot] = useState([]);

    useEffect(() => {
        (async () => {
            setSlot(await fetchSlots());
        })();
    }, []);

    return (
        <div className="mb-4 mt-4 "><select  id="perk1" className=" w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="0">Choix de l'emplacement</option>
            {slot.map(slot => (
                <option key={slot.id} value={slot.id}>{slot.name}</option>
            ))}
        </select>
            <Perks onChange={handleChange} />
            <Perks onChange={handleChange} />
            <Perks onChange={handleChange} />
        </div>
    );
}