"use client";

import React, { useState } from "react";
import Image from "next/image";

// Photos à afficher dans le carousel
const images = [
	{ src: "/images/Neumann.jpg", alt: "Photo d'un micro Neumann" },
	{ src: "/images/Régie 2.jpg", alt: "Photo de la régie côté canapé" },
	{ src: "/images/Genelec.jpg", alt: "Photo d'une enceinte Genelec" },
	{ src: "/images/Tascam DM48000.jpg", alt: "Photo de la console" },
];

// Carousel de photos
function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prev = () => {
		setCurrentIndex((currentIndex - 1 + images.length) % images.length);
	};

	const next = () => {
		setCurrentIndex((currentIndex + 1) % images.length);
	};

	return (
		<div className="relative w-full max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
			<div className="relative h-72 sm:h-96">
				<Image src={images[currentIndex].src} alt={images[currentIndex].alt} fill className="object-cover" priority />
			</div>
			<button onClick={prev} className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75" aria-label="Image précédente">
				‹
			</button>
			<button onClick={next} className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75" aria-label="Image suivante">
				›
			</button>
		</div>
	);
}

// Liste du matériel
const sections = [
	{
		title: "Backline",
		items: ["Batterie Gretsch 70", "Batterie Sonor", "Piano Yamaha C3", "Rhodes MKII 73 (sur demande)", "Clavia Nordstage 2 73 (sur demande)", "Moog Minitaur (sur demande)"],
	},
	{
		title: "Système d'enregistrement",
		items: ["Console Tascam DM48000", "Convertisseurs Lynx Aurora 16 et Lynx Aurora 8", "Sommateur Thermionic Culture Fat Bustard II Green Edition", "Sommateur Phoenix Audio Nicerizer Junior", "Egaliseur Millennia NSEQ-2", "Protools 12 (32 in/out)", "Mac Pro quadricoeur 3 GHZ", "Clock Apogee Big Ben", "Patch Bentam"],
	},
	{
		title: "Microphones électrostatiques à lampes",
		items: ["Neumann U67 x2"],
	},
	{
		title: "Microphones électrostatiques",
		items: ["Neumann TLM 170 x2", "Neumann TLM 127 x2", "AKG C414 bxl II x1", "Sennheiser MKH 40 x2", "Schoeps CMC6 x2", "Schoeps MK241C x2", "Schoeps M934 x2", "AKG 451 x2", "Calrec CM1050 C x2", "Oktava Mk 012-01 MSP2 x2"],
	},
	{
		title: "Microphones à ruban",
		items: ["AEA R84", "NoHype LRM 1", "NoHype LRM 2b x2", "NoHype LRM 2 x2"],
	},
	{
		title: "Microphones dynamiques",
		items: ["Electrovoice RE20 x1", "AKG D12 VR x1", "D112 x1", "AKG D202 x3", "Shure SM57 x3", "Beyerdynamic M69 x1"],
	},
	{
		title: "DI",
		items: ["Avalon U5 x2"],
	},
	{
		title: "Préamplificateurs",
		items: ["2 TubeTech MP2A", "2 Millennia HV3D", "2 Avalon M5", "Universal Audio 6176"],
	},
	{
		title: "Monitoring",
		items: ["Genelec S30", "Yamaha NS10"],
	},
	{
		title: "Retours",
		items: ["Mixettes Behringer Powerplay pour retours individuels x5"],
	},
	{
		title: "Casques",
		items: ["Sony MD7506 x1", "Beyer Dynamic DT770 x2", "AKG", "Sennheiser"],
	},
];

export default function MaterielPage() {
	return (
		<main className="max-w-4xl mx-auto px-6 py-12">
			<header className="mb-8 text-center">
				<h1 className="text-3xl font-bold mb-8">Matériel</h1>
			</header>

			<Carousel />

			<article className="space-y-10">
				{sections.map((section, index) => (
					<section key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
						<h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
						<ul className="list-disc list-inside space-y-1 text-lg text-gray-700">
							{section.items.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</section>
				))}
			</article>
		</main>
	);
}
