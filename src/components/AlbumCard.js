import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AlbumCard({ hoverText, link, coverUrl, alt }) {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-row justify-center w-full max-w-lg mt-1 py-6 ">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block"
        >
          {coverUrl && (
            <Image
              src={coverUrl}
              alt={alt}
              width={400}
              height={400}
							priority={true}
              className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg text-center px-4">{hoverText}</p>
          </div>
        </Link>
      </section>
    </main>
  );
}
