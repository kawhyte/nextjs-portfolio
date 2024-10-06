import Link from "next/link";
import Image from "next/image";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { ImArrowUpRight2 } from "react-icons/im";

const BlogCard = ({ blog }) => {
	const { title, slug, summary, thumbnail } = blog.fields;

	return (
		<div className=' flex flex-col max-w-6xl lg:mx-auto mt-10  '>
			<Card className='flex flex-col lg:h-[280px] lg:flex-row bg-green-50'>
				<Image
					blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
					placeholder='blur'
					src={`https:${thumbnail.fields.file.url}?fm=webp`}
					width={460}
					height={400}
					className=' object-cover h-44 lg:h-full lg:w-[350px]  w-full'
					alt={title}
				/>

				<div className=""> 
				<div className='p-6'>
					<h2 className=' font-serif text-2xl md:text-3xl  clamp-2'> {title}</h2>
					<p className=' clamp-3 text-base md:text-lg lg:text-base max-w-xs md:max-w-2xl text-gray-500/90 mt-2'>
						{summary}
					</p>
				</div>

				<div className='flex flex-col md:flex-row item-start mb-6 ml-6 gap-4'>
					<Link href={`/blog/${slug}`}>
						<button className='inline-flex items-center gap-2 border border-white text-white bg-gray-900 px-6 h-12 rounded-xl'>
							<span>Read More</span>
							<ImArrowUpRight2 className='w-4 h-4' />
						</button>
					</Link>
				</div>
				</div>
			</Card>
		</div>
	);
};

export default BlogCard;

// <div className='flex flex-col mx-auto cursor-pointer max-w-xs overflow-hidden bg-white  shadow-sm  border-black border-solid border-4 rounded-lg h-[360px] w-[360px] bg-white/50 hover:border-orange-500 transition-transform duration-300 scale-95 hover:scale-100 focus:scale-100  '>
// 				<Link href={`/blog/${slug}`} legacyBehavior>
// 					<Image
// 						blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
// 						placeholder='blur'
// 						src={`https:${thumbnail.fields.file.url}?fm=webp`}
// 						width={460}
// 						height={400}
// 						className=' object-cover h-44  w-80'
// 						alt={title}
// 					/>
// 				</Link>
// 				<div className=' p-3'>
// 					<Link
// 						href={`/blog/${slug}`}
// 						className='text-blue-900 hover:text-blue-500  inline-flex items-center'>
// 						<h1 className='text-lg font-bold text-gray-800 hover:text-blue-500  line-clamp-2'>
// 							{title}
// 						</h1>
// 					</Link>
// 					<p className='mt-3 text-base md:text-sm text-gray-600 dark:text-gray-400 clamp-2'>
// 						{summary}
// 					</p>

// 					<div className='flex justify-between mt-1 item-center'>
// 						<Link
// 							href={`/blog/${slug}`}
// 							className='text-blue-900 hover:text-blue-500  inline-flex items-center'>
// 							Read More
// 							<svg
// 								className='w-4 h-4 ml-2'
// 								viewBox='0 0 24 24'
// 								stroke='currentColor'
// 								strokeWidth='2'
// 								fill='none'
// 								strokeLinecap='round'
// 								strokeLinejoin='round'>
// 								<path d='M5 12h14'></path>
// 								<path d='M12 5l7 7-7 7'></path>
// 							</svg>
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
