import { useEffect, useState } from "react";

import { fetchPerks } from "../services/api";


export default function Perks({ onChange }) {

    const [perks, setPerks] = useState([]);

    useEffect(() => {
        (async () => {
            setPerks(await fetchPerks());
        })();
    }, []);

    return (
        <div>
            <select onChange={(e) => onChange(e.target.value)} id="perk1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="0">NC</option>
                {perks.map(perk => (
                    <option key={perk.id} value={perk.id}>{perk.name}</option>
                ))}
            </select>
        </div>
    );
}