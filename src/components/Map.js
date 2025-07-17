import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// Affichage map pour la page Contact
export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      const address = "15 rue Pixérécourt, Paris";
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results[0]) {
          const location = results[0].geometry.location;

          // Création de la carte centrée sur l’adresse
          const map = new window.google.maps.Map(mapRef.current, {
            center: location,
            zoom: 15,
          });

          // Ajout d'un marqueur
          new window.google.maps.Marker({
            position: location,
            map,
            title: address,
          });
        } else {
          console.error("Géocodage échoué :", status);
        }
      });
    });
  }, []);

  return (
	<div ref={mapRef} className="w-full h-[500px] mt-8" />
	);
}
