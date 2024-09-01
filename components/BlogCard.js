import Link from "next/link";
import Image from "next/image";

const Card = ({ blog }) => {
	const { title, slug, summary, thumbnail } = blog.fields;

	return (
		<div className=' '>
			<div className='flex flex-row mx-auto cursor-pointer overflow-hidden bg-white border shadow-sm rounded-lg '>
				<Link href={`/blog/${slug}`} legacyBehavior>
					<Image
						blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
						placeholder='blur'
						src={`https:${thumbnail.fields.file.url}?fm=webp`}
						width={460}
						height={400}
						className=' object-cover h-44  w-52'
						alt={title}
					/>
				</Link>
				<div className='ml-4 mt-2'>
					<Link
						href={`/blog/${slug}`}
						className='text-blue-900 hover:text-blue-500  inline-flex items-center'>
						<h1 className='text-xl font-bold text-gray-800 hover:text-blue-500  line-clamp-2'>
							{title}
						</h1>
					</Link>
					<p className='mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 clamp-2'>
						{summary}
					</p>

					<div className='flex justify-between mt-4 item-center'>
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
