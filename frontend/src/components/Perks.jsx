import { useEffect, useState } from "react";

import { fetchPerks } from "../services/api";


export default function Perks() {

    const [perks, setPerks] = useState([]);

    useEffect(() => {
        (async () => {
            setPerks(await fetchPerks());
        })();
    }, []);

    return (
        <div >
            <select  id="perk1" className=" w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option  value="0">NC</option>
                {perks.map(perk => (
                    <option  key={perk.id} value={perk.id}>{perk.name}</option>
                ))}
            </select>
        </div>
    );
}