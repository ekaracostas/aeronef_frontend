"use client";

import React, { useEffect, useState } from "react";
import AlbumCard from "../../components/AlbumCard";

export default function ReferencesPage() {
	const [albumsData, setAlbumsData] = useState([]);

	// Récupération des albums depuis Sanity
	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch("/api/albums");
				if (!res.ok) throw new Error("Erreur API");

				const data = await res.json();
				console.log("Données récupérées depuis API :", data);
				setAlbumsData(data);
			} catch (error) {
				console.error("Erreur fetch API :", error);
			}
		}

		fetchData();
	}, []);

	// Classement des albums du plus récent au plus ancien
	const sortedAlbums = [...albumsData].sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn));

	return (
		<main className="bg-white text-gray-900 min-h-screen max-w-4xl mx-auto px-6 py-12 flex flex-col space-y-8">
			<h1 className="text-3xl font-bold mb-8 text-center">Références</h1>

			{sortedAlbums.map(({ _id, createdOn, hoverText, link, coverUrl, alt }) => (
				<AlbumCard key={_id} createdOn={createdOn} hoverText={hoverText} link={link} coverUrl={coverUrl} alt={alt} />
			))}
		</main>
	);
}
