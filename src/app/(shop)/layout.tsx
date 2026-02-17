
export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="shop-layout min-h-screen flex flex-col items-center justify-center">
            <h1>Layout Shop</h1>
            { children }
        </section>
    );
}