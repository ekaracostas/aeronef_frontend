import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MaterielPage() {
  return (
    <div className="bg-[#fbfbf2] text-gray-800 font-sans min-h-screen flex flex-col pb-20">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Backline</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Batterie Gretsch 70</li>
            <li>Batterie Sonor</li>
            <li>Piano Yamaha C3</li>
            <li>Rhodes MKII 73 (sur demande)</li>
            <li>Clavia Nordstage 2 73 (sur demande)</li>
            <li>Moog Minitaur (sur demande)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Système d&apos;enregistrement</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Console Tascam DM48000</li>
            <li>Convertisseurs Lynx Aurora 16 et Lynx Aurora 8</li>
            <li>Sommateur Thermionic Culture Fat Bustard II Green Edition</li>
            <li>Sommateur Phoenix Audio Nicerizer Junior</li>
            <li>Egaliseur Millennia NSEQ-2</li>
            <li>Protools 12 (32 in/out)</li>
            <li>Mac Pro quadricoeur 3 GHZ</li>
            <li>Clock Apogee Big Ben</li>
            <li>Patch Bentam</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Microphones</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Microphones électrostatiques à lampes</h3>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Neumann U67 x2</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Microphones électrostatiques</h3>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Neumann TLM 170 x2</li>
              <li>Neumann TLM 127 x2</li>
              <li>AKG C414 x1</li>
              <li>AKG C414 bxl II x1</li>
              <li>Sennheiser MKH 40 x2</li>
              <li>Schoeps CMC6 x2</li>
              <li>Schoeps MK241C x2</li>
              <li>Schoeps M934 x2</li>
              <li>AKG 451 x2</li>
              <li>Calrec CM1050 C x2</li>
              <li>Oktava Mk 012-01 MSP2 x2</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Microphones à ruban</h3>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>AEA R84</li>
              <li>NoHype LRM 1</li>
              <li>NoHype LRM 2b x2</li>
              <li>NoHype LRM 2 x2</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Microphones dynamiques</h3>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Electrovoice RE20 x1</li>
              <li>AKG D12 VR x1</li>
              <li>D112 x1</li>
              <li>AKG D202 x3</li>
              <li>Shure SM57 x3</li>
              <li>Beyerdynamic M69 x1</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">DI</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Avalon U5 x2</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Préamplificateurs</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>TubeTech MP2A x2</li>
            <li>Millennia HV3D x16</li>
            <li>Avalon M5 x2</li>
            <li>Universal Audio 6176</li>
            <li>TLAudio Ivory x4</li>
            <li>Nagra x4</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Monitoring</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Genelec S30</li>
            <li>Yamaha NS10</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Retours</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Mixettes Behringer Powerplay pour retours individuels x5</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Casques</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Sony MD7506 x1</li>
            <li>Beyer Dynamic DT770 x1</li>
            <li>AKG</li>
            <li>Sennheiser</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
