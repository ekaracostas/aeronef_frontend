"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import AlbumCard from "../../components/AlbumCard";
import Footer from "../../components/Footer";

export default function ReferencesPage() {
  const [albumsData, setAlbumsData] = useState([]);

  // Récupération des données d'albums
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/albums");
        if (!res.ok) throw new Error("Erreur API");

        const data = await res.json();
        console.log("Données récupérées depuis API locale:", data);
        setAlbumsData(data);
      } catch (error) {
        console.error("Erreur fetch API locale:", error);
      }
    }

    fetchData();
  }, []);

  // Tri des albums par date d'enregistrement ou de mixage
  const sortedAlbums = [...albumsData].sort((a, b) => {
    return new Date(b.createdOn) - new Date(a.createdOn);
  });

  // Pour chaque album trié, affichage du composant AlbumCard
  const albums = sortedAlbums.map(({ _id, createdOn, hoverText, link, coverUrl, alt }) => <AlbumCard key={_id} createdOn={createdOn} hoverText={hoverText} link={link} coverUrl={coverUrl} alt={alt} />);

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col pb-20">
			
      <Header />

      <h1 className="max-w-4xl mx-auto px-6 py-12 text-3xl font-bold text-center">Références</h1>

      {albums}

      <Footer />
    </div>
  );
}
