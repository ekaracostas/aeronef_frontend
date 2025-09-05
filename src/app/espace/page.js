"use client";

import React from "react";
import Image from "next/image";

// Contenu des sections
const rezDeChaussee = [
	{
		title: "Régie",
		size: "16m²",
		image: "/images/Aéronef - régie.jpg",
		alt: "Photo de la régie",
	},
	{
		title: "Cabine A",
		size: "16m²",
		image: "/images/Aeronef piano.jpg",
		alt: "Photo de la cabine A",
	},
	{
		title: "Cabine B",
		size: "9m²",
		image: "/images/Aéronef - drums.jpg",
		alt: "Photo de la cabine B",
	},
];

const premierEtage = [
	{
		title: "Cabine C",
		size: "28m²",
		image: "/images/Aéronef - haut.jpg",
		alt: "Photo de la cabine C",
	},
	{
		title: "Cabine D",
		size: "8m²",
		image: "/images/Aéronef - haut 2.jpg",
		alt: "Photo de la cabine D",
	},
];

// Affichage des sections avec infos et photos
function EspaceSection({ title, size, image, alt }) {
	return (
		<section className="space-y-4">
			<h3 className="text-xl font-semibold">
				{title} : {size}
			</h3>
			<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow">
				<Image src={image} alt={alt} fill className="object-cover" />
			</div>
		</section>
	);
}

export default function EspacePage() {
	return (
		<main className="py-12 max-w-3xl mx-auto px-6 space-y-10">
			<header className="text-center">
				<h1 className="text-3xl font-bold mb-8">Espace</h1>
				<p className="text-lg md:text-xl font-medium">
					4 cabines isolées de prise de son en lumière du jour (les cabines du bas sont reliées en visioconférence avec celles du haut), une cabine régie.
				</p>
			</header>

			<section className="space-y-8">
				<h2 className="text-2xl font-semibold">Rez-de-chaussée</h2>
				{rezDeChaussee.map((cabine) => (
					<EspaceSection key={cabine.title} {...cabine} />
				))}
			</section>

			<section className="space-y-8">
				<h2 className="text-2xl font-semibold">1er étage</h2>
				{premierEtage.map((cabine) => (
					<EspaceSection key={cabine.title} {...cabine} />
				))}
			</section>
		</main>
	);
}
