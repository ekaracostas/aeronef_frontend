"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Map from "../../components/Map";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen flex flex-col pb-20">
      <Header />
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12 space-y-6 text-center">
        <h1 className="text-3xl font-bold mb-8">Contact</h1>
        <p className="text-lg md:text-xl font-medium">
          Journée d&apos;enregistrement ou de mixage à partir de <strong>450€ H.T.</strong>
          <br></br>N&apos;hésitez pas à nous contacter pour un devis plus précis, adapté à vos besoins.
        </p>
        <p className="text-base md:text-lg font-semibold">Patrick Chenais 06 79 66 46 30</p>
        <a href="mailto:studioaeronef@gmail.com" className="underline text-blue-700 text-base md:text-lg">
          studioaeronef@gmail.com
        </a>
        <address className="space-y-2 text-gray-700 mt-10 not-italic">
          <p>Studio Aéronef</p>
          <p>15 rue Pixérécourt</p>
          <p>75020 Paris</p>
          <p>métro : Place des Fêtes, Jourdain ou Gambetta</p>
          <p>bus : 26 ou 96, arrêt Pyrénées/Ménilmontant</p>
        </address>
        <Map />
      </main>
      <Footer />
    </div>
  );
}
