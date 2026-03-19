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
        <section className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 h-svh">
            {/* Slideshow */}
            <div className=" col-span-1 md:col-span-2 bg-gray-900 h-[700]">
                <span> Image Slideshow </span>
            </div>

            {/* Detalles */}
            <div className=" col-span-2 md:col-span-1 ">
                <h1 className={`${fontTitle.className} antialiased font-bold text-2xl mb-2`}> {product.title} </h1>
                <p className="text-lg mb-5 font-black"> $ {product.price} </p>
                <span className="font-bold text-md">
                    Desripción
                </span>
                <p className="font-medium text-sm">{product.description}</p>

                {/* //TODO:Selector numero piezas */}

                <div className="flex flex-col gap-2 w-fit">
                    <button className="btn-primary mt-4 rounded-md"> Agregar al Carito </button>
                    <button className="bg-gray-950 text-white py-2 px-3 rounded-sm"> Agregar a Favoritos </button>
                </div>
            </div>
        </section>
    );
}