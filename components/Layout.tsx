import Footer from "./Footer";
import Header from "./Header";
import { Source_Sans_3, Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";

const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    variable: "--font-sans"
});
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-header",
    weight: ["400", "500", "600", "700"],
});

export default function Layout({ children }) {
    return (
        <div
            className={twMerge(
                sourceSans.variable,
                spaceGrotesk.variable,
                "antialiased font-sans"
            )}>
            
            <Header />

            {/* --- ADD PADDING HERE --- */}
            <div className='pt- '>
				
				
				{children}</div>

            <Footer />
        </div>
    );
}