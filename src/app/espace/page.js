import React from "react";
import Image from "next/image";

export default function EspacePage() {
	return (
		<div className="py-12 max-w-3xl mx-auto px-6 space-y-10">
			<h1 className="text-3xl font-bold mb-8 text-center">Espace</h1>

			<section className="space-y-4 text-center">
				<p className="text-2xl font-medium">4 cabines isolées de prise de son en lumière du jour (les cabines du bas sont reliées en visioconférence avec celles du haut), une cabine régie</p>
			</section>

			<h2 className="text-2xl font-semibold">Rez-de-chaussée</h2>

			<section className="space-y-6">
				<h3 className="text-xl font-semibold">Régie : 16m²</h3>
				<div className="relative w-full aspect-[4/3] max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden">
					<Image src="/images/Aéronef - régie.jpg" alt="Photo de la régie" fill className="object-cover" />
				</div>
			</section>

			<section className="space-y-6">
				<h3 className="text-xl font-semibold">Cabine A : 16m²</h3>
				<div className="relative w-full aspect-[4/3] max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden">
					<Image src="/images/Aeronef piano.jpg" alt="Photo de la cabine A" fill className="object-cover" />
				</div>
			</section>

			<section className="space-y-6">
				<h3 className="text-xl font-semibold">Cabine B : 9m²</h3>
				<div className="relative w-full aspect-[4/3] max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden">
					<Image src="/images/Aéronef - drums.jpg" alt="Photo de la cabine B" fill className="object-cover" />
				</div>
			</section>

			<h2 className="text-2xl font-semibold">1er étage</h2>

			<section className="space-y-6">
				<h3 className="text-xl font-semibold">Cabine C : 28m²</h3>
				<div className="relative w-full aspect-[4/3] max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden">
					<Image src="/images/Aéronef - haut.jpg" alt="Photo de la cabine C" fill className="object-cover" />
				</div>
			</section>

			<section className="space-y-6">
				<h3 className="text-xl font-semibold">Cabine D : 8m²</h3>
				<div className="relative w-full aspect-[4/3] max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden">
					<Image src="/images/Aéronef - haut 2.jpg" alt="Photo de la cabine D" fill className="object-cover" />
				</div>
			</section>
		</div>
	);
}
