// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Demo",
  description: "A simple Next.js demo with App Router and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <Navbar />
        <main className="container p-6 mx-auto">{children}</main>
      </body>
    </html>
  );
}
