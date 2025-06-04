import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AlbumCard({ coverUrl, alt, link }) {
  return (
    <div className="album">
      {coverUrl && <Image src={coverUrl} alt={alt} width={800} height={500} />}
      {link && (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          Écouter sur Spotify
        </Link>
      )}
    </div>
  );
}
