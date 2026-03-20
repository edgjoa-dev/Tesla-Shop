'use client'

import { fontTitle } from "@/config/fonts";
import { useState } from "react"

export const QuantitySelctor = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        if (counter >= 3) return;
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter <= 0) return;
        setCounter(counter - 1);
    }



    return (
        <section className="my-2">
            <span className="text-lg font-bold"> Seleccionar Cantidad </span>
            <div className="flex my-2">
                <button
                    className="bg-gray-900 text-white py-2 px-3 rounded-sm hover:bg-gray-700"
                    onClick={decrement}
                >
                    -1
                </button>

                <span className={`${ fontTitle.className } antialiased flex items-center justify-center w-[50] bg-gray-200 text-xl`} >
                    { counter }
                </span>

                <button
                    className="bg-gray-900 text-white py-2 px-3 rounded-sm hover:bg-gray-700"
                    onClick={increment}
                >
                    +1
                </button>
            </div>
        </section>
    )
}
