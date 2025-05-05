import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function EspacePage() {
	return (
		<div>
			<Header />
			<h2>Espace</h2>
      <h2>4 cabines isolées de prise de son en lumière du jour (les cabines du bas sont reliées en visioconférence avec celles du haut), une cabine régie</h2>
      <h2>Rez-de-chaussée : régie : 16m²</h2>
      <Image src="/images/Aéronef - régie.jpg" alt="Photo de la régie" width={300} height={200} className="object-cover rounded shadow" />
      <h2>Cabine A : 16m²</h2>
      <Image src="/images/Aeronef piano.jpg" alt="Photo de la cabine A" width={300} height={200} className="object-cover rounded shadow" />
			<h2>Cabine B : 9m²</h2>
      <Image src="/images/Aéronef - drums.jpg" alt="Photo de la cabine B" width={300} height={200} className="object-cover rounded shadow" />
      <h2>1er étage : cabine C : 28m²</h2>
      <Image src="/images/Aéronef - haut.jpg" alt="Photo de la cabine C" width={300} height={200} className="object-cover rounded shadow" />
      <Footer />
		</div>
	);
}
