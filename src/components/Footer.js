import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Studio Aéronef. Tous droits réservés.</p>
        <div className="flex gap-6 text-gray-700 text-sm font-medium">
          <Link href="https://linktr.ee/studioaeronef/" className="hover:text-black transition-colors">
            Linktree
          </Link>
        </div>
      </div>
    </footer>
  );
}
