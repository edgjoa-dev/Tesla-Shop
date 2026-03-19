import { Product } from "@/interfaces";
import { GridProductCard } from "./GridProductCard";

interface Props {
    products: Product[];
}


export const GridProducts = ({ products }: Props) => {
    return (
        <section className="grid grid-cols-2 sm:grid-cols-3 mb-10 gap-10">
            {
                products.map((product) => (
                    <GridProductCard product={product} key={product.slug} />
                ))
            }
        </section>
    )
}
