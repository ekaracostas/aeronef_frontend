import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 text-center space-y-6">
        <p className="text-lg md:text-xl">
          Situé en plein Paris, à Ménilmontant, le studio d&apos;enregistrement Aéronef possède un espace en lumière du jour parfaitement adapté à la prise de son acoustique.
        </p>
        <p className="text-lg md:text-xl">
          En vingt ans d&apos;expérience, Aéronef a acquis une pratique et un savoir-faire irremplaçables.
        </p>
        <p className="text-lg md:text-xl">
          Doté d&apos;un matériel haut de gamme, Aéronef garantit un son d&apos;une grande qualité dans un rapport de prix optimum.
        </p>
        <p className="text-lg md:text-xl">
          Enfin, Aéronef c&apos;est un environnement convivial, confortable et favorable à la création.
        </p>
        <div className="mt-8">
          <Image
            src="/images/Cabine A.jpg"
            alt="Photo de la cabine A"
            width={800}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
