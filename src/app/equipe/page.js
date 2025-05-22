import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function EquipePage() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12 space-y-10 text-center">
        <section>
          <h2 className="text-2xl font-semibold">Antoine Karacostas</h2>
          <p className="text-lg text-gray-600 mt-1">ingénieur du son</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Patrick Chenais</h2>
          <p className="text-lg text-gray-600 mt-1">ingénieur du son</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
