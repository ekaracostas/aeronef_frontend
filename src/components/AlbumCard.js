import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AlbumCard({ coverUrl, alt, link, hoverText }) {
  return (
    <Link href={link || "#"} target="_blank" rel="noopener noreferrer" className="group block relative w-80 h-52 rounded overflow-hidden">
      {coverUrl && (
        <Image
          src={coverUrl}
          alt={alt || "Album cover"}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-center px-4">{hoverText}</p>
      </div>
    </Link>
  );
}
