import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";

function Navbar() {
	const session = {};
	return (
		<nav>
			<div className="flexBetween navbar">
				<div className="flex-1 flexStart gap-10">
					<Link href="/">
						<Image
							src="/logo.svg"
							width={115}
							height={43}
							alt="Flexibble Logo"
						/>
					</Link>
					<ul className="xl:flex hidden text-small gap-7">
						{NavLinks.map((link) => (
							<Link
								href={link.key}
								key={link.key}
							>
								{link.text}
							</Link>
						))}
					</ul>
				</div>

				<div className="flexCenter gap-4">
					{session ? (
						<>
							<Link href="/create-project">Share Work</Link>
						</>
					) : (
						<AuthProviders></AuthProviders>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
