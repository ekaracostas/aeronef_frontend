import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="fixed bottom-0 w-full bg-white border-t border-gray-300 py-6">
			<div className="max-w-7xl mx-auto px-4 flex flex-row justify-between items-center gap-4">
				<p className="text-sm text-gray-700">&copy; {new Date().getFullYear()} Studio Aéronef</p>
				<div className="flex gap-6 text-gray-700 text-sm font-medium">
					<Link href="https://linktr.ee/studioaeronef/" target="_blank" rel="noopener noreferrer">
						<div className="flex items-center gap-2">
							<Image src="/linktree-logo-icon.png" alt="Logo Linktree" width={50} height={50} className="h-5 w-auto" />
							<span className="text-base">Tous nos liens</span>
						</div>
					</Link>
				</div>
			</div>
		</footer>
	);
}
