import { fontTitle } from "@/config/fonts"
import { Product } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"

interface Props {
    product: Product
}

export const GridProductCard = ({ product }: Props) => {
    return (
        <section className="flex flex-col rounded-lg fade-in hover:shadow-2xl shadow-slate-300/50 transition-shadow duration-250 cursor-pointer">
            <Image
                src={`/products/${product.images[0]}`}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
            />

            <div className="p-4 flex flex-col">
                <Link
                    href={`/product1s/${product.slug}`}
                    className="text-lg font-medium mt-2 hover:text-blue-500"
                >
                    {product.title}
                </Link>

                <span className={`${fontTitle.className} flex items-center justify-center text-lg font-medium text-white mt-4 rounded-full bg-black px-2 py-2 w-1/4 text-center`} >
                    ${product.price}
                </span>
            </div>
        </section>
    )
}
