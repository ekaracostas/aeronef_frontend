import { sanity } from "../../../sanityClient";

// Route GET pour récupérer les albums depuis Sanity
export async function GET() {
	try {
		const data = await sanity.fetch(`*[_type == "album"]{
      _id,
      createdOn,
      "coverUrl": cover.asset->url,
      "alt": cover.alt,
      link,
			hoverText
    }`);

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		console.error("Erreur API Sanity:", err);
		return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
	}
}
