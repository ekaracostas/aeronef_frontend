"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Détection du mode mobile en fonction de la taille de l’écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Affichage du header en fonction du scroll
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobile]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-300 shadow-sm transition-transform duration-300
        ${isMobile ? (showHeader ? "translate-y-0" : "-translate-y-full") : "translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center py-6 px-4">
        <Link href="/" className="text-4xl font-bold tracking-widest text-black">
          AERONEF
        </Link>

        {/* Menu mobile */}
        <div className="lg:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <Bars3Icon className="size-5 text-gray-700" />
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="py-1">
                {[
                  { href: "/", label: "ACCUEIL" },
                  { href: "/materiel", label: "MATÉRIEL" },
                  { href: "/espace", label: "ESPACE" },
                  { href: "/references", label: "RÉFÉRENCES" },
                  { href: "/equipe", label: "ÉQUIPE" },
                  { href: "/contact", label: "CONTACT" },
                ].map(({ href, label }) => (
                  <MenuItem key={href}>
                    {({ active }) => (
                      <Link
                        href={href}
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {label}
                      </Link>
                    )}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
        </div>

        {/* Menu desktop */}
        <div className="hidden lg:flex gap-8 text-gray-700 text-lg font-medium">
          <Link href="/" className="hover:text-black transition-colors">ACCUEIL</Link>
          <Link href="/materiel" className="hover:text-black transition-colors">MATÉRIEL</Link>
          <Link href="/espace" className="hover:text-black transition-colors">ESPACE</Link>
          <Link href="/references" className="hover:text-black transition-colors">RÉFÉRENCES</Link>
          <Link href="/equipe" className="hover:text-black transition-colors">ÉQUIPE</Link>
          <Link href="/contact" className="hover:text-black transition-colors">CONTACT</Link>
        </div>
      </div>
    </header>
  );
}
