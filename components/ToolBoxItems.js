import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp, SiJavascript } from "react-icons/si";
import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const ToolBoxItems = ({ languages, className, itemsWrapperClass }) => {
	return (
		<div
			className={twMerge(
				"flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
				className
			)}>
			<div className={twMerge('flex flex-none py-0.5 gap-6 pr-6 ', itemsWrapperClass)}>
				{languages.map((item) => (
					<div
						key={item.title}
						className='inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-gray-500 rounded-lg'>
						<span>
							<div>
								<svg className='size-0 absolute'>
									<defs>
										<linearGradient id='icon-gradient'>
											<stop offset='0%' stopColor='rgb(134 239 172)  ' />
											<stop offset='100%' stopColor='rgb(187 247 208)' />
										</linearGradient>
									</defs>
									
								</svg>
							</div>

							{item.icon}
						</span>
						<span className='font-semibold text-lg'>{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ToolBoxItems;
