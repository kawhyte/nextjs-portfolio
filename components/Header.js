import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaCodepen, FaDev } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { AiFillProject, AiFillHome } from "react-icons/ai";
import { GrHomeOption } from "react-icons/gr";
import { SiMicrodotblog } from "react-icons/si";
import { FaComputerMouse } from "react-icons/fa6";

function Header() {
	const [isExpanded, toggleExpansion] = useState(false);

	return (
		<header className=' flex  justify-center items-center z-50 absolute container mx-auto inset-1 lg:inset-28 h-2 '>
			<nav className='flex   justify-center items-center fixed top-5 border-2 border-gray-100/90 container mx-auto rounded-full max-w-[23rem] lg:max-w-lg bg-white/40 backdrop-blur'>
				{/*<Link href='/' legacyBehavior>
					<motion.div
						whileHover={{
							scale: 1.1,
							rotate: [0, 10, -10, 0],

							transition: {
								duration: 0.2,
							},
						}}
						className='flex items-center text-white my-3 bg-gray-900 hover:bg-orange-500 hover:text-white px-4   rounded-lg no-underline'>
						<h1 className='text-xl  text-green-100 cursor-pointer font-extrabold tracking-tight'>
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
				</button>*/}

				<div
					className={`${
						isExpanded ? `block` : `block`
					}  flex items-center  w-auto lg:py-2`}>
					{[
						{
							route: `/`,
							title: `Home`,
							type: `internal`,
							icon: AiFillHome,
						},
						{
							route: `/projects`,
							title: `Projects`,
							type: `internal`,
							icon: AiFillProject,
						},
						{
							route: `/blogs`,
							title: `Blog`,
							type: `internal`,
							icon: SiMicrodotblog,
						},
						// {
						// 	route: `/blogs`,
						// 	title: `Uses`,
						// 	type: `internal`,
						// 	icon: FaComputerMouse,
						// },
						// {
						// 	route: `https://dev.to/kawhyte`,
						// 	title: `Dev.to`,
						// 	type: `external`,
						// 	icon: FaDev,
						// },
						// {
						// 	route: `https://dev.to/kawhyte`,
						// 	title: `Dev.to`,
						// 	type: `external`,
						// 	icon: FaDev,
						// },
						// {
						// 	route: `https://codepen.io/kawhyte`,
						// 	title: `CodePen`,
						// 	type: `external`,
						// 	icon: FaCodepen,
						// },
						// {
						// 	route: `https://twitter.com/IAmKennyWhyte`,
						// 	title: `CodePen`,
						// 	type: `external`,
						// 	icon: FaTwitter,
						// },

						// {
						// 	route: `https://www.linkedin.com/in/kawhyte/`,
						// 	title: `LinkedIn`,
						// 	type: `external`,
						// 	icon: FaLinkedin,
						// },
					].map((link) =>
						link.type === "internal" ? (
							<>
								<Link
									className=' group px-4 flex gap-1 p-0.5 hover:text-orange-500  ease-in-out  hover:underline hover:decoration-orange-500 transition duration-300  decoration-wavy    py-1.5 rounded-full text-gray-900 text-sm font-semibold'
									key={link.title}
									href={link.route}>
									<link.icon className='w-6 h-6  fill-current lg:flex mr-1 hover:text-orange-500 ' />
									<p className='lg:text-lg'> {link.title}</p>
								</Link>
							</>
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
