import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Header />
			<h2>Situé en plein Paris, à Ménilmontant, le studio d'enregistrement Aéronef possède un espace en lumière du jour parfaitement adapté à la prise de son acoustique.</h2>
			<h2>En vingt ans d'expérience, Aéronef a acquis une pratique et un savoir-faire irremplaçables.</h2>
			<h2>Doté d'un matériel haut de gamme, Aéronef garantit un son d'une grande qualité dans un rapport de prix optimum.</h2>
			<h2>Enfin, Aéronef c'est un environnement convivial, confortable et favorable à la création.</h2>
			<Image src="/images/Cabine A.jpg" alt="Photo de la cabine A" width={300} height={200} className="object-cover rounded shadow" />
			<Footer />
		</div>
	);
}
