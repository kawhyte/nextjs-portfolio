import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
	subsets: ["latin"],
	variable: "--font-serif",
	weight: ["400"],
});

export default function Layout({ children }) {
	return (
		<div
			className={twMerge(
				inter.variable,
				calistoga.variable,
				"antialiased font-sans"
			)}>
			<Header />

			<div className=''>{children}</div>

			<Footer />
		</div>
	);
}
