import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaCodepen, FaDev } from "react-icons/fa";

function Header() {
	const [isExpanded, toggleExpansion] = useState(false);

	return (
        <header className='bg-green-100 '>
			<nav className='flex flex-wrap   justify-between max-w-[81rem]  p-4  mx-auto md:p-5'>
				<Link href='/' legacyBehavior>
					<motion.div
						whileHover={{
							scale: 1.1,
							rotate: [0, 10, -10, 0],

							transition: {
								duration: 0.2,
							},
						}}
						className='flex items-center text-white my-3 bg-gray-800 hover:text-white px-4   rounded-lg no-underline'>
						<h1 className='text-xl  text-orange-300 cursor-pointer font-extrabold tracking-tight'>
							KW.
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
							(<Link className='flex justify-between pr-6 hover:underline decoration-orange-500 decoration-wavy text-xl font-bold my-2 py-2 ' key={link.title} href={link.route}>

                                {link.title}

                            </Link>)
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
				className='bg-gray-800 hover:text-orange-500 transition duration-150 ease-in-out'>
				<span className='sr-only'>{label}</span>
				<Icon className='w-7 h-7 fill-current' />
			</a>
		</p>
	);
};
export default Header;
