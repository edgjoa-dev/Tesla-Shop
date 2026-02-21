'use client'

import Link from "next/link"
import {
    IoCloseOutline,
    IoLogInOutline,
    IoLogOutOutline,
    IoPeopleOutline,
    IoPersonOutline,
    IoSearchOutline,
    IoShirtOutline,
    IoTicketOutline
} from "react-icons/io5"

export const SideBar = () => {
    return (
        <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="sidebar-title"
            className="relative z-50"
        >
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-md"
                aria-hidden="true"
            />

            {/* Sidebar Panel */}
            <div className="fixed top-0 right-0 h-svh w-[500] max-w-full bg-white p-6 shadow-2xl transition-transform duration-300">

                {/* Close Button */}
                <button
                    aria-label="Cerrar menú"
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                    <IoCloseOutline size={32} aria-hidden="true" />
                </button>

                {/* Search */}
                <div className="relative w-full mt-12">
                    <label htmlFor="sidebar-search" className="sr-only">
                        Buscar productos
                    </label>

                    <IoSearchOutline
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        aria-hidden="true"
                    />

                    <input
                        aria-label="Buscar productos"
                        aria-describedby="sidebar-search"
                        autoFocus={true}
                        id="sidebar-search"
                        type="text"
                        placeholder="Buscar..."
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>

                <hr className="my-6 border-gray-200" />

                {/* Navigation */}
                <nav aria-label="Menú principal del usuario">
                    <h2 id="sidebar-title" className="text-2xl font-bold mb-4">
                        Mi Cuenta
                    </h2>

                    <ul className="space-y-3">

                        <li>
                            <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <IoPersonOutline size={24} aria-hidden="true" />
                                <span className="ml-3 text-lg">Perfil</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <IoTicketOutline size={24} aria-hidden="true" />
                                <span className="ml-3 text-lg">Órdenes</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <IoLogInOutline size={24} aria-hidden="true" />
                                <span className="ml-3 text-lg">Login</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <IoLogOutOutline size={24} aria-hidden="true" />
                                <span className="ml-3 text-lg">Logout</span>
                            </Link>
                        </li>

                    </ul>
                </nav>

                <hr className="my-8 border-gray-200" />

                {/* Admin Section */}

                <h2 id="sidebar-title" className="text-2xl font-bold mb-4">
                    Dashboard Admin
                </h2>

                <nav aria-label="Administración">
                    <ul className="space-y-3">

                        <li>
                            <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <IoShirtOutline size={24} aria-hidden="true" />
                                <span className="ml-3 text-lg">Productos</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <IoTicketOutline size={24} aria-hidden="true" />
                                <span className="ml-3 text-lg">Órdenes</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <IoPeopleOutline size={24} aria-hidden="true" />
                                <span className="ml-3 text-lg">Usuarios</span>
                            </Link>
                        </li>

                    </ul>
                </nav>

            </div>
        </aside>
    )
}