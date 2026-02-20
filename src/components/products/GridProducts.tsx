import { Product } from "@/interfaces";

interface Props {
    products: Product[];
}


export const GridProducts = ({ products }: Props) => {
    return (
        <section className="grid grid-cols-2 sm:grid-cols-3 mb-10 gap-10">
            {
                products.map(({ slug, title }) => (
                    <span key={slug}>{title}</span>
                ))
            }
        </section>
    )
}
