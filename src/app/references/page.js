"use client";

import React, { useEffect, useState } from "react";
import { sanity } from "../../../sanityClient";
import Header from "../../components/Header";
import AlbumCard from "../../components/AlbumCard";
import Footer from "../../components/Footer";

export default function ReferencesPage() {
  const [albumsData, setAlbumsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await sanity.fetch(`*[_type == "album"]{
          _id,
          "coverUrl": cover.asset->url,
          alt,
          link,
        }`);
        console.log(data);
        setAlbumsData(data);
      } catch (error) {
        console.error("Erreur fetch Sanity:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {albumsData.map(({ _id, coverUrl, alt, link }) => (
        <AlbumCard key={_id} coverUrl={coverUrl} alt={alt} link={link} />
      ))}
      <Footer />
    </div>
  );
}
