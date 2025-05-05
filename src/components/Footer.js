import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-pink-500 flex justify-around items-center">
			<div>
				<Link href="https://www.instagram.com/studioaeronef/">LOGO INSTAGRAM</Link>
				<Link href="https://www.facebook.com/people/Studio-A%C3%A9ronef/100024839083196/">LOGO FACEBOOK</Link>
				<Link href ="https://soundcloud.com/">LOGO SOUNDCLOUD</Link>
				<Link href ="https://www.youtube.com/">LOGO YOUTUBE</Link>
			</div>
		</footer>
	);
}
