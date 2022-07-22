import { useEffect, useState } from "react";

import Perks from "./Perks"

export default function SelectPerks({ text }) {

    const handleChange = (value) => {
        console.log(value)
    }

    return (
        <div className="mb-4 mt-4 ">
            <label htmlFor="countries" className="block mb-2 text-l font-medium text-gray-900 dark:text-gray-400">Choisi les perks : {text}</label>
            <Perks onChange={handleChange} />
            <Perks onChange={handleChange} />
            <Perks onChange={handleChange} />
        </div>
    );
}