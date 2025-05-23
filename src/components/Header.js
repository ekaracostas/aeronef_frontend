"use client";

import React from "react";
import Link from "next/link";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center py-6 px-4">
        <Link href="/" className="text-4xl font-bold tracking-widest text-gray-900">
          AERONEF
        </Link>

        {/* Menu responsive pour mobile */}
        <div className="md:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <Bars3Icon className="size-5 text-gray-700" />
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <Link href="/" className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}>
                      ACCUEIL
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link href="/materiel" className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}>
                      MATÉRIEL
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link href="/espace" className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}>
                      ESPACE
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link href="/references" className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}>
                      RÉFÉRENCES
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link href="/equipe" className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}>
                      ÉQUIPE
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link href="/contact" className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}>
                      CONTACT
                    </Link>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>

        {/* Menu classique pour desktop */}
        <nav className="hidden md:flex gap-8 text-gray-700 text-lg font-medium">
          <Link href="/" className="hover:text-black transition-colors">
            ACCUEIL
          </Link>
          <Link href="/materiel" className="hover:text-black transition-colors">
            MATÉRIEL
          </Link>
          <Link href="/espace" className="hover:text-black transition-colors">
            ESPACE
          </Link>
          <Link href="/references" className="hover:text-black transition-colors">
            RÉFÉRENCES
          </Link>
          <Link href="/equipe" className="hover:text-black transition-colors">
            ÉQUIPE
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
