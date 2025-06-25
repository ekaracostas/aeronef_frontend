"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import AlbumCard from "../../components/AlbumCard";
import Footer from "../../components/Footer";

export default function ReferencesPage() {
  const [albumsData, setAlbumsData] = useState([]);

  //Récupération des données d'albums
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

  return (
    <div>
      <Header />
      {albumsData.map(({ _id, coverUrl, alt, link, hoverText }) => (
        <AlbumCard key={_id} coverUrl={coverUrl} alt={alt} link={link} hoverText={hoverText}/>
      ))}
      <Footer />
    </div>
  );
}
