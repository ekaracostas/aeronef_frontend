import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AlbumCard({ coverUrl, alt, link, hoverText }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <section className="w-full max-w-xl">
        <Link
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block"
        >
          {coverUrl && (
            <Image
              src={coverUrl}
              alt={alt || "Album cover"}
              width={800}
              height={600}
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg text-center px-4">{hoverText}</p>
          </div>
        </Link>
      </section>
    </main>
  );
}
