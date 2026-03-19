import { notFound } from "next/navigation";

import { initialData } from "@/seed/seed";
import { GridProducts, Title } from "@/components";

const seedProducts =  initialData.products;

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function CategoryPage({ params }: Props) {
    const { id } = await params;

    const products = seedProducts.filter((product) => product.gender === id);

    const labels: Record<string, string> = {
        men: "para Hombres",
        women: "para Mujeres",
        kid: "para Niños",
        unisex: "para Todos",
    };

    if ( !labels[id] ) {
        notFound();
    }

    return (
        <section >
            <Title
                title={`Articulos ${labels[id]}`}
                subtitle="Todos los productos disponibles"
                className="mb-2"
            />

            <GridProducts products={products}/>
        </section>
    );
}