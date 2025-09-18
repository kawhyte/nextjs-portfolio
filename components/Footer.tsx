import React from "react";
import { FaTwitter, FaCodepen, FaDev } from "react-icons/fa";

const Footer = () => {
  let year = new Date().getFullYear();
	return (
		<footer className="bg-slate-900/90 backdrop-blur-md border-t border-teal-400/20 mt-auto">
			<div className="container mx-auto px-200 py-600">
				{/* Social Icons */}
				<div className="flex justify-center mb-400">
					<ul className="flex items-center gap-300">
						<FooterLink
							href="https://twitter.com/IAmKennyWhyte"
							icon={FaTwitter}
							label="Twitter"
						/>
						<FooterLink
							href="https://codepen.io/kawhyte"
							icon={FaCodepen}
							label="CodePen"
						/>
						<FooterLink
							href="https://dev.to/kawhyte"
							icon={FaDev}
							label="Dev"
						/>
					</ul>
				</div>

				{/* Copyright */}
				<div className="text-center">
					<p className="text-sm text-gray-400">
						&copy; {year} Created by{" "}
						<span className="text-teal-400 font-medium">Kenny Whyte</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

const FooterLink = ({ href, label, icon: Icon }) => {
	return (
		<li>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/10 border border-teal-400/20 text-gray-400 hover:text-teal-400 hover:bg-teal-500/20 hover:border-teal-400/40 transition-all duration-300 hover:scale-110"
			>
				<span className="sr-only">{label}</span>
				<Icon className="w-5 h-5" />
			</a>
		</li>
	);
};

export default Footer;
