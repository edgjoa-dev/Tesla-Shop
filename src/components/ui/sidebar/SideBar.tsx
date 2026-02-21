'use client'

import { IoCloseOutline, IoSearchOutline } from "react-icons/io5"

export const SideBar = () => {
    return (
        <section>
            {/* fondo obscuro y blur*/}
            <div className="h-svh w-svw fixed top-0 left-0 bg-black/60  backdrop-filter backdrop-blur-md z-10">
            </div>

            {/* sidebar */}
            <div className="h-svh w-[500] fixed top-0 right-0 bg-white z-20 p-5 shadow-2xl tranform transition-all duration-250">

                <nav>
                    <IoCloseOutline
                        size={35}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
                        onClick={() => {
                            console.log('cerrar');
                        }}
                    />
                </nav>

                {/* inoput search bar */}
                <div className="relative w-full mt-10 p-2">
                    <IoSearchOutline size={20} className="absolute left-4 top-4" />
                    <input
                        autoFocus={true}
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-gray-50 rounded-lg pl-10 py-1 pr-10 border-b-4 border-gray-200 focus:outline-none focus:border-blue-500" />
                </div>


                {/* menu */}
                <h2 className="text-2xl font-bold p-4">Sidebar</h2>
                <ul className="p-4">
                    <li className="py-2 border-b">Home</li>
                    <li className="py-2 border-b">Products</li>
                    <li className="py-2 border-b">About</li>
                    <li className="py-2 border-b">Contact</li>
                </ul>
            </div>


        </section>
    )
}
