"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    async function initMap() {
      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const address = "15 rue Pixérécourt, Paris";
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results && results.length > 0) {
          const location = results[0].geometry.location;

          const map = new Map(mapRef.current, {
            center: location,
            zoom: 15,
			mapId: 'AIzaSyDv4c1l7i5lIOxzZdZHKTVz7u9epiTwTOE',
          });

          new AdvancedMarkerElement({
            position: location,
            map,
            title: address,
          });
        } else {
          console.error("Géocodage échoué :", status, results);
        }
      });
    }

    initMap();
  }, []);

  return <div ref={mapRef} className="w-full h-[500px] mt-8" />;
}
