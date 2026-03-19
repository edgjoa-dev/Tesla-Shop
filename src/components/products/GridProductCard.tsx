'use client'

import { fontTitle } from "@/config/fonts"
import { Product } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Props {
    product: Product
}

export const GridProductCard = ({ product }: Props) => {

    const [currentImage, setCurrentImage] = useState(product.images[0]);

    const hoverImage = product.images[1] || product.images[0];

    return (
        <Link
            href={`/products/${product.slug}`}
            className="group flex flex-col rounded-lg fade-in hover:shadow-2xl shadow-slate-300/50 transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
            itemScope
            itemType="https://schema.org/Product"
        >

            <div
                className="relative w-full aspect-square"
                onMouseEnter={() => setCurrentImage(hoverImage)}
                onMouseLeave={() => setCurrentImage(product.images[0])}
                onFocus={() => setCurrentImage(hoverImage)}
                onBlur={() => setCurrentImage(product.images[0])}
                tabIndex={0}
            >
                <Image
                    src={`/products/${currentImage}`}
                    alt={`${product.title} - Imagen del producto`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover rounded-lg transition-all duration-500"
                />
            </div>

            <div className="p-4 flex flex-col">
                <h3 className="font-medium mt-2 group-hover:text-blue-500">
                    {product.title}
                </h3>

                <span
                    className={`${fontTitle.className} flex items-center justify-center font-medium text-white mt-2 rounded-full bg-black px-2 py-1 w-1/4 text-center`}
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                >
                    <span itemProp="priceCurrency" content="USD" />
                    <span itemProp="price">${product.price}</span>
                </span>
            </div>

        </Link>
    )
}