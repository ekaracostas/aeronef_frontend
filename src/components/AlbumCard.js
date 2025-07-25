import React from "react";
import Image from "next/image";
import Link from "next/link";

// Encart albums pour la page Références
export default function AlbumCard({ hoverText, link, coverUrl, alt }) {
	return (
		<main className="flex justify-center px-4 py-4">
			<section className="flex justify-center max-w-xs">
				<Link href={link} target="_blank" rel="noopener noreferrer" className="group relative inline-block">
					{coverUrl && <Image src={coverUrl} alt={alt} width={300} height={300} priority={true} className="w-[300px] h-[300px] rounded-lg object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-105" />}
					<div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<p className="text-white text-lg text-center px-4">{hoverText}</p>
					</div>
				</Link>
			</section>
		</main>
	);
}
