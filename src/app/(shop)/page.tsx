import { GridProducts, Title } from "@/components";
import { initialData } from "@/seed/seed";

export default function ShopPage() {

    const products = initialData.products;

    return (
        <section>
            <Title
                title="Shop"
                subtitle="Los Mejores Productos para todos."
                className="mb-10 px-5"
            />
            <GridProducts
                products={products}
            />
        </section>
    );
}