import Link from "next/link";
import Image from "next/image";

const Card = ({ blog }) => {
	const { title, slug, summary, thumbnail } = blog.fields;

	return (
		<div className=' '>
			<div className='flex flex-col mx-auto cursor-pointer max-w-xs overflow-hidden bg-white  shadow-sm  border-black border-solid border-4 rounded-lg h-[360px] w-[360px] bg-white/50 hover:border-orange-500 transition-transform duration-300 scale-95 hover:scale-100 focus:scale-100  '>
				<Link href={`/blog/${slug}`} legacyBehavior>
					<Image
						blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
						placeholder='blur'
						src={`https:${thumbnail.fields.file.url}?fm=webp`}
						width={460}
						height={400}
						className=' object-cover h-44  w-80'
						alt={title}
					/>
				</Link>
				<div className='ml-4 mt-2'>
					<Link
						href={`/blog/${slug}`}
						className='text-blue-900 hover:text-blue-500  inline-flex items-center'>
						<h1 className='text-2xl font-bold text-gray-800 hover:text-blue-500  line-clamp-2'>
							{title}
						</h1>
					</Link>
					<p className='mt-3 text-base md:text-base text-gray-600 dark:text-gray-400 clamp-2'>
						{summary}
					</p>

					<div className='flex justify-between mt-1 item-center'>
						<Link
							href={`/blog/${slug}`}
							className='text-blue-900 hover:text-blue-500  inline-flex items-center'>
							Read More
							<svg
								className='w-4 h-4 ml-2'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='M5 12h14'></path>
								<path d='M12 5l7 7-7 7'></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
