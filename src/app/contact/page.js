'use client'

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
    return (
    <div className="bg-white text-gray-800 font-sans min-h-screen flex flex-col pb-20">
      <Header />
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12 space-y-6 text-center">
        <h2 className="text-lg md:text-xl font-medium">
          Journée d&apos;enregistrement ou de mixage à partir de <strong>450€ H.T.</strong><br></br>N&apos;hésitez pas à nous contacter pour un devis plus précis, adapté à vos besoins.
        </h2>

        <div className="space-y-2 text-gray-700">
          <p>Studio Aéronef<br></br>15 rue Pixérécourt<br></br>75020 Paris</p>
          <p>métro : Place des Fêtes, Jourdain ou Gambetta</p>
          <p>bus : 26 ou 96, arrêt Pyrénées/Ménilmontant</p>
          <p className="font-semibold">Patrick Chenais 06 79 66 46 30</p>
          <a className="underline text-blue-700" onClick={(e) => {window.location.href='mailto:studioaeronef@gmail.com';}}>studioaeronef@gmail.com</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
