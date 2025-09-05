import React from "react";
import Image from "next/image";
import Link from "next/link";

// Encart album pour la page Références
export default function AlbumCard({ hoverText, link, coverUrl, alt }) {
	return (
		<div className="relative w-[300px] h-[300px]">
			<Link href={link} target="_blank" rel="noopener noreferrer" className="group block w-full h-full">
				{coverUrl && (
					<Image
						src={coverUrl}
						alt={alt}
						fill
						priority={true}
						className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				)}
				<div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<p className="text-white text-lg text-center px-4">{hoverText}</p>
				</div>
			</Link>
		</div>
	);
}
