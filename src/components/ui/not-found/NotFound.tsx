import { fontTitle } from "@/config/fonts";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { TbBrandPagekit } from "react-icons/tb";

export const NotFound = () => {
    return (
        <section className="h-full w-full flex flex-col justify-center items-center gap-4 transition-all duration-300 ease-in-out fadeIn">
            <h1 className="text-6xl text-gray-700"> <span className={`text-gray-600 ${fontTitle.className} font-bold antialiased`}> 404 </span> | Page Not Found</h1>
            <span className="font-regular antialiased text-gray-700 text-xl" >Whooops! Lo sentimos, la ruta que buscas no existe</span>
            <TbBrandPagekit className='w-20 h-20 text-gray-700' />
            <Link href="/" className='group relative flex justify-center items-center gap-2 text-xl text-gray-700 font-bold hover:text-blue-500 transition-all duration-300 ease-in-out'>
                <IoArrowBack className='absolute -left-6 top-1.5 group-hover:-translate-x-2 transition-all duration-300 ease-in-out' />
                Regresar
            </Link>
        </section>
    )
}
