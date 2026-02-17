
export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <h1>Layout Auth</h1>
            { children }
        </section>
    );
}