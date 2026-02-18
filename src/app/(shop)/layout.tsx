import { TopMenu } from "@/components";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="h-svh w-full flex flex-col items-center">
            <TopMenu />
            { children }
        </section>
    );
}