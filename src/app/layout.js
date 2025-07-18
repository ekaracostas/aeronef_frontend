import "./globals.css";

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
      <body className="font-futura">
        <main>{children}</main>
      </body>
    </html>
  );
}
