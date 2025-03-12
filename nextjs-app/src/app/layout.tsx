// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; // ✅ "@/components/Navbar" のように修正
import "@/styles/globals.css"; // ✅ "@/styles/globals.css" で確実にインポート

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
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
