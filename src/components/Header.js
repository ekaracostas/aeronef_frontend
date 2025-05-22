import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-4">
        <h1 className="text-4xl font-bold tracking-widest text-gray-900">AERONEF</h1>
        <nav className="mt-4 md:mt-0 flex flex-wrap justify-center gap-6 text-gray-700 text-lg font-medium">
          <Link href="/" className="hover:text-black transition-colors">ACCUEIL</Link>
          <Link href="/materiel" className="hover:text-black transition-colors">MATÉRIEL</Link>
          <Link href="/espace" className="hover:text-black transition-colors">ESPACE</Link>
          <Link href="/references" className="hover:text-black transition-colors">RÉFÉRENCES</Link>
          <Link href="/equipe" className="hover:text-black transition-colors">ÉQUIPE</Link>
          <Link href="/contact" className="hover:text-black transition-colors">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}
