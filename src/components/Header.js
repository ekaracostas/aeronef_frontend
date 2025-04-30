import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
  <header className="bg-pink-500 flex justify-between items-center">
    <h1 className="text-8xl pl-45 py-14">AERONEF</h1>
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