// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">My Next.js App</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/profile">プロフィール</Link></li>
          <li><Link href="/contact">お問い合わせ</Link></li>
        </ul>
      </div>
    </nav>
  );
}
