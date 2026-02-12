import { fontTitle } from "@/config/fonts";

export default function HomePage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`${fontTitle.className} fade-in text-3xl font-bold`}>Home Page</h1>
    </section>
  );
}