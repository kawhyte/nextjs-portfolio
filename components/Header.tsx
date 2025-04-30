import React, { useState, Fragment } from "react"; // Import Fragment
import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons"; // Import IconType for typing icons
import { FaTwitter, FaLinkedin, FaCodepen, FaDev } from "react-icons/fa";
// import { BiArrowBack } from "react-icons/bi"; // Unused
import { AiFillProject, AiFillHome } from "react-icons/ai";
// import { GrHomeOption } from "react-icons/gr"; // Unused
import { SiMicrodotblog } from "react-icons/si";
import { FaComputerMouse } from "react-icons/fa6";

// Define the structure of a navigation link
interface NavLink {
	route: string;
	title: string;
	type: "internal" | "external";
	icon: IconType; // Use IconType for React Icons
}

// Define props for the FooterLink component
interface FooterLinkProps {
	href: string;
	label: string;
	icon: IconType;
}

// Type the Header component
const Header: React.FC = () => {
	// State type is inferred, but explicit boolean is fine
	const [isExpanded, toggleExpansion] = useState<boolean>(false);

	// Define the links array with the NavLink type
	const navLinks: NavLink[] = [
		// { route: `/`, title: `Home`, type: `internal`, icon: AiFillHome },
		{ route: `/projects`, title: `Projects`, type: `internal`, icon: AiFillProject },
		{ route: `/blogs`, title: `Blog`, type: `internal`, icon: SiMicrodotblog },
		// { route: `/uses`, title: `Uses`, type: `internal`, icon: FaComputerMouse },
		// { route: `https://dev.to/kawhyte`, title: `Dev.to`, type: `external`, icon: FaDev },
		// { route: `https://codepen.io/kawhyte`, title: `CodePen`, type: `external`, icon: FaCodepen },
		// { route: `https://twitter.com/IAmKennyWhyte`, title: `Twitter`, type: `external`, icon: FaTwitter },
		// { route: `https://www.linkedin.com/in/kawhyte/`, title: `LinkedIn`, type: `external`, icon: FaLinkedin },
	];

	return (
		<header className=' flex  justify-center items-center z-50 absolute container mx-auto inset-1  h-2 '>
			<nav className='flex   justify-between items-center fixed top-5 border-2 border-gray-100/90 container mx-auto rounded-full max-w-[23rem] lg:max-w-lg bg-white/40 backdrop-blur'>
				<Link href='/' legacyBehavior>
					{/* Using <a> tag inside legacyBehavior Link for motion.div */}
					<a>
						<motion.div
							whileHover={{
								scale: 1.1,
								rotate: [0, 10, -10, 0],
								transition: { duration: 0.2 },
							}}
							{...{
								className:
									'flex items-center text-white my-3 bg-gray-900/80 hover:bg-orange-500 hover:text-white px-4 rounded-lg no-underline cursor-pointer',
							}}>
							<h1 className='text-xl text-green-100 font-extrabold tracking-tight'>
								KW.
							</h1>
						</motion.div>
					</a>
				</Link>

				{/* Mobile menu button (commented out) */}
				{/* <button ... /> */}

				<div className={` flex items-center w-auto lg:py-2`}>
					{navLinks.map((link) =>
						link.type === "internal" ? (
							// FIX: Add key prop to the Fragment
							<Fragment key={link.route}> {/* Use link.route or link.title if unique */}
								<Link
									className=' group px-4 flex gap-1 p-0.5 hover:text-orange-500  ease-in-out  hover:underline hover:decoration-orange-500 transition duration-300  decoration-wavy    py-1.5 rounded-full text-gray-900/90  text-sm font-semibold'
									href={link.route}>
									<link.icon className='w-6 h-6  fill-current lg:flex mr-1 group-hover:text-orange-500 ' /> {/* Added group-hover */}
									<p className='lg:text-lg'> {link.title}</p>
								</Link>
							</Fragment>
						) : (
							<FooterLink
								key={link.route} // Key is correct here
								href={link.route}
								icon={link.icon}
								label={link.title} // FIX: Use link.title for the label
							/>
						)
					)}
				</div>
			</nav>
		</header>
	);
};

// Type the FooterLink component
const FooterLink: React.FC<FooterLinkProps> = ({ href, label, icon: Icon }) => {
	return (
		<p className='inline-block md:pl-8 pr-4 md:pr-0 py-6'>
			<a
				href={href}
				target='_blank'
				rel='noreferrer noopener'
				className='text-gray-900/90 hover:text-orange-500 transition duration-150 ease-in-out'> {/* Adjusted colors */}
				<span className='sr-only'>{label}</span>
				<Icon className='w-7 h-7 fill-current' />
			</a>
		</p>
	);
};

export default Header;
