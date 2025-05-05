import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
	return (
		<div>
			<Header />
			<h2>Contact</h2>
			<h2>Journée d'enregistrement ou de mixage à partir de 450e H.T. N'hésitez pas à nous contacter pour un devis plus précis, adapté à vos besoins.</h2>
      <h2>Studio Aéronef</h2>
      <h2>15 rue Pixérécourt</h2>
      <h2>75020 Paris</h2>
      <h2>métro : Place des Fêtes, Jourdain ou Gambetta</h2>
      <h2>bus: 26 ou 96, arrêt Pyrénées/Ménilmontant</h2>
      <h2>Patrick Chenais 06 79 66 46 30</h2>
      <h2>studioaeronef@gmail.com</h2>
      {/* insérer une carte google maps ici */}
			<Footer />
		</div>
	);
}
