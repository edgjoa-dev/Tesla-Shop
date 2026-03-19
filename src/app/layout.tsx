import type { Metadata } from "next";
import "./globals.css";
import { fontTitle } from "@/config/fonts";




export const metadata: Metadata = {
  title: "Tesla Shop",
  description: "A Tesla Shop market online for all your Tesla needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontTitle.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
