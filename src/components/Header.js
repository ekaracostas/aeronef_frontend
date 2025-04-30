import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
  <header className="bg-pink-500">
    <h1 className="text-3xl font-bold">AERONEF</h1>
    <div >
      <Link href="/">ACCUEIL</Link>
      <Link href="/materiel">MATÉRIEL</Link>
      <Link href="/espace">ESPACE</Link>
      <Link href="/references">RÉFÉRENCES</Link>
      <Link href="/equipe">ÉQUIPE</Link>
      <Link href="/contact">CONTACT</Link>
    </div>
  </header>
  );
}