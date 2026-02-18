import { fontTitle } from "@/config/fonts"
import Link from "next/link"
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5"

const menuOptions = [
    {
        id: 1,
        path: "/category/men",
        name: "Hombres"
    },
    {
        id: 2,
        path: "/category/women",
        name: "Mujeres"
    },
    {
        id: 3,
        path: "/category/kids",
        name: "Niños"
    }
]

export const TopMenu = () => {
    return (
        <nav className="flex justify-between items-center w-full p-4 mb-4 shadow-2xl shadow-slate-300/50 bg-white rounded-md">
            {/* logo */}
            <div className="flex flex-1 items-center justify-start gap-2">
                <Link href="/">
                    <span className={`${fontTitle.className}`}>Tesla</span>
                    <span> | Shop</span>
                </Link>
            </div>
            {/* menu */}
            <div className="flex flex-1 justify-center items-center">
                {
                    menuOptions.map(({ id, path, name }) => (
                        <div className="hidden sm:block rounded-md hover:cursor-pointer mr-4" key={id}>
                            <Link href={path} className="hover:bg-black hover:text-white transition-all rounded-lg px-4 py-2">{name}</Link>
                        </div>
                    ))
                }
            </div>
            {/* cart search menu */}
            <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
                <Link href="/search">
                    <IoSearchOutline className="hover:cursor-pointer hover:bg-gray-100 rounded-md h-5 w-5" />
                </Link>

                <Link href="/cart">
                    <div className="relative">
                        <span className="absolute -top-2 -right-2 rounded-full bg-blue-500 text-white px-1 text-xs font-bold">3</span>
                        <IoCartOutline className="hover:cursor-pointer hover:bg-gray-100 rounded-md h-5 w-5" />
                    </div>
                </Link>

                <button className=" rounded-md px-4 py-2 shadow-2xl shadow-slate-300/50 hover:cursor-pointer hover:bg-black hover:text-white transition-all ">
                    <IoMenuOutline className="hover:cursor-pointer hover:white" />
                </button>
            </div>
        </nav>
    )
}
