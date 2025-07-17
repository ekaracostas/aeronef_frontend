import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function EquipePage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col pb-20">
      <Header />
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12 space-y-10 text-center">
        <h1 className="text-3xl font-bold mb-8">Equipe du studio</h1>
        <section>
          <h2 className="text-xl font-semibold">Antoine Karacostas</h2>
          <p className="text-lg text-gray-700">ingénieur du son</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Patrick Chenais</h2>
          <p className="text-lg text-gray-700">ingénieur du son</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
