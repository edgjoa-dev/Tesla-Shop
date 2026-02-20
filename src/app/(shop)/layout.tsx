import { TopMenu } from "@/components";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="w-full">
            <TopMenu />
            { children }
        </section>
    );
}