import "./globals.css";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Studio Aeronef",
	description: "Studio d'enregistrement Aeronef",
	charSet: "UTF-8",
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className="font-futura bg-white text-gray-900 min-h-screen flex flex-col pb-20">
				<Header />
				<main className="pt-20 flex-grow max-w-7xl mx-auto px-6">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
