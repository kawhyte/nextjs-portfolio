import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaCodepen, FaDev } from "react-icons/fa";

function Header() {
	const [isExpanded, toggleExpansion] = useState(false);

	return (
		<header className='bg-green-100 '>
			<nav className='flex flex-wrap   justify-between max-w-7xl    p-4  mx-auto md:p-8'>
				<Link href='/'>
					<motion.div
						whileHover={{
							scale: 1.2,
							rotate: [0, 10, -10, 0],

							transition: {
								duration: 0.2,
							},
						}}
						className='flex items-center text-white bg-gray-800 hover:text-green-100 px-5  pt-1 pb-2 rounded-lg no-underline'>
						<h1 className='text-xl cursor-pointer font-extrabold pt-2 tracking-tight'>
							Kenny Whyte
						</h1>
					</motion.div>
				</Link>

				<button
					className='items-center block px-3 py-2 text-black border border-white rounded md:hidden'
					onClick={() => toggleExpansion(!isExpanded)}>
					<svg
						className='w-3 h-3 fill-current'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>

				<div
					className={`${
						isExpanded ? `block` : `hidden`
					}  md:flex md:items-center w-full md:w-auto`}>
					{[
						{
							route: `/projects`,
							title: `Projects`,
							type: `internal`,
						},
						{
							route: `/blogs`,
							title: `Blog`,
							type: `internal`,
							icon: FaCodepen,
						},
						{
							route: `https://dev.to/kawhyte`,
							title: `Dev.to`,
							type: `external`,
							icon: FaDev,
						},
						{
							route: `https://codepen.io/kawhyte`,
							title: `CodePen`,
							type: `external`,
							icon: FaCodepen,
						},
						{
							route: `https://twitter.com/IAmKennyWhyte`,
							title: `CodePen`,
							type: `external`,
							icon: FaTwitter,
						},

						{
							route: `https://www.linkedin.com/in/kawhyte/`,
							title: `LinkedIn`,
							type: `external`,
							icon: FaLinkedin,
						},
					].map((link) =>
						link.type === "internal" ? (
							<Link className='' key={link.title} href={link.route}>
								<a
									key={link.route}
									className='font-Montserrat font-extrabold text-lg block mt-4  text-gray-800 no-underline md:inline-block md:mt-0 md:ml-6 hover:text-blue-600 md:px-2'>
									{link.title}
								</a>
							</Link>
						) : (
							<FooterLink
								key={link.route}
								href={link.route}
								icon={link.icon}
								label='Twitter'
							/>
						)
					)}
				</div>
			</nav>
		</header>
	);
}
const FooterLink = ({ href, label, icon: Icon }) => {
	return (
		<p className='inline-block md:pl-8 pr-4 md:pr-0 py-6'>
			<a
				href={href}
				target='_blank'
				rel='noreferrer noopener'
				className='bg-gray-800 hover:text-blue-600 transition duration-150 ease-in-out'>
				<span className='sr-only'>{label}</span>
				<Icon className='w-7 h-7 fill-current' />
			</a>
		</p>
	);
};
export default Header;
