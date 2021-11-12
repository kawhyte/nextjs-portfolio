import Link from "next/link";
import Image from "next/image";

const Card = ({ blog }) => {
	const { title, slug, summary, thumbnail } = blog.fields;

	return (
		<div className=' p-4 '>
			<div className='flex flex-col mx-auto cursor-pointer overflow-hidden bg-white rounded-lg dark:bg-gray-800'>
				
			
			<Link href={`/blog/${slug}`}>
					<Image
						blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
						placeholder='blur'
						src={`https:${thumbnail.fields.file.url}?fm=webp`}
						width={460}
						height={400}
						className=' object-cover '
						alt={title}
					/>
				</Link>
				<div className='w-full p-4 md:p-4'>
					<Link href={`/blog/${slug}`}>
						<a className='text-blue-900 hover:text-blue-500  inline-flex items-center'>
							<h1 className='text-2xl font-bold text-gray-800 hover:text-blue-500 dark:text-white clamp-3'>
								{title}
							</h1>
						</a>
					</Link>
					<p className='mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400 clamp-2'>
						{summary}
					</p>

					<div className='flex justify-between mt-6 item-center'>
						<Link href={`/blog/${slug}`}>
							<a className='text-blue-900 hover:text-blue-500  inline-flex items-center'>
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
							</a>
						</Link>{" "}
					</div>
				</div>
			</div>

			
		</div>
	);
};


export default Card;

