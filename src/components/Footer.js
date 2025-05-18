import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-pink-500 flex justify-around items-center">
			<div>
				<Link href="https://www.instagram.com/studioaeronef/">LOGO INSTAGRAM</Link>
				<Link href="https://www.facebook.com/people/Studio-A%C3%A9ronef/100024839083196/">LOGO FACEBOOK</Link>
				<Link href="https://soundcloud.com/antoinekaracostas/sets/aeronef/s-nFPAw?si=66036f3ada0b4b6a97cd9a2fbd8a64d3/">LOGO SOUNDCLOUD</Link>
				<Link href="https://www.youtube.com/">LOGO YOUTUBE</Link>
				<Link href="https://linktr.ee/studioaeronef/">LINKTREE</Link>
			</div>
		</footer>
	);
}
