import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function EspacePage() {
	return (
		<div className="bg-white text-gray-800 font-sans min-h-screen flex flex-col pb-20">
			<Header />
			<main className="flex-grow max-w-4xl mx-auto px-6 py-12 space-y-10">
				<section className="space-y-4 text-center">
					<h2 className="text-2xl font-semibold">4 cabines isolées de prise de son en lumière du jour (les cabines du bas sont reliées en visioconférence avec celles du haut), une cabine régie</h2>
				</section>

				<section className="space-y-6">
					<h2 className="text-xl font-semibold">Rez-de-chaussée : régie : 16m²</h2>
					<div className="w-full max-w-md mx-auto">
						<Image src="/images/Aéronef - régie.jpg" alt="Photo de la régie" width={800} height={500} className="object-cover rounded-lg shadow-lg" />
					</div>
				</section>

				<section className="space-y-6">
					<h2 className="text-xl font-semibold">Cabine A : 16m²</h2>
					<div className="w-full max-w-md mx-auto">
						<Image src="/images/Aeronef piano.jpg" alt="Photo de la cabine A" width={800} height={500} className="object-cover rounded-lg shadow-lg" />
					</div>
				</section>

				<section className="space-y-6">
					<h2 className="text-xl font-semibold">Cabine B : 9m²</h2>
					<div className="w-full max-w-md mx-auto">
						<Image src="/images/Aéronef - drums.jpg" alt="Photo de la cabine B" width={800} height={500} className="object-cover rounded-lg shadow-lg" />
					</div>
				</section>

				<section className="space-y-6">
					<h2 className="text-xl font-semibold">1er étage : cabine C : 28m²</h2>
					<div className="w-full max-w-md mx-auto">
						<Image src="/images/Aéronef - haut.jpg" alt="Photo de la cabine C" width={800} height={500} className="object-cover rounded-lg shadow-lg" />
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
