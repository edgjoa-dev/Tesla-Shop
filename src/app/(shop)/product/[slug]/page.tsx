import { QuantitySelctor, SelectedSize, SlideShow } from "@/components";
import { fontTitle } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    };
}


export default async function ProductPage({ params }: Props) {

    const { slug } = await params;

    const product = initialData.products.find(product => product.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <section className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Slideshow */}
            <div className="col-span-1 md:col-span-2 px-5">
                <SlideShow images={product.images} title={product.title} />
            </div>

            {/* Detalles */}
            <div className="col-span-1 md:col-span-2 px-5">
                <h1 className={` ${fontTitle.className} antialiased font-bold text-xl`}> {product.title} </h1>
                <p className="text-lg mb-5">${product.price}</p>

                <h3 className="font-bold text-sm">Descripción</h3>
                <p className="font-light">
                    {product.description}
                </p>

                {/* Selectores */}
                <SelectedSize selectedSize={product.sizes[0]} availableSizes={product.sizes} />

                <QuantitySelctor />

                <div className="flex flex-col justify-end items-center gap-2 py-8 w-2/4">
                    <button className="btn-primary mt-4 rounded-md w-full"> Agregar al Carito </button>
                    <button className="bg-gray-950 text-white py-2 px-3 rounded-sm w-full"> Agregar a Favoritos </button>
                </div>
            </div>
        </section>
    );
}