import Link from "next/link";
import Image from "next/image";

const Card = ({ blog }) => {
	const { title, slug, summary, thumbnail } = blog.fields;

	;

	return (
		<div className="bg-yellow-50 p-4 rounded-xl">
			<Link href={`/blog/${slug}`}>
				<h2 className='sm:text-2xl  cursor-pointer text-xl title-font font-medium text-gray-900 mt-4 mb-4'>
					{title}
				</h2>
			</Link>
			<p className='leading-relaxed mb-8 clamp-3'>{summary}</p>
			<div className='flex items-center flex-wrap mb-4  mt-auto w-full'>
				<Link href={`/blog/${slug}`}>
					<a className='text-blue-900 inline-flex items-center'>
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
				</Link>
			</div>
		</div>
	);
};

// Card.propTypes = {
//   name: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   thumbnail: PropTypes.shape({
//     localFile: PropTypes.object,
//   }),
// }
// width={thumbnail.fields.file.details.image.width}
// height={thumbnail.fields.file.details.image.height}

export default Card;
// <div className='h-full max-w-sm bg-gray-50  border shadow-lg rounded overflow-hidden group '>
// 		<div className='group-hover:opacity-75  transition duration-150 ease-in-out '>
// 			<Link href={`/portfolio/${slug}`}>
// 				<Image
// 					src={`https:${thumbnail.fields.file.url}`}
// 					width={444}
// 					height={342}
// 				/>
// 			</Link>
// 		</div>
// 		<div className='p-4 sm:p-5 border-t'>
// 			<h4 className='sm:text-lg text-gray-800 text-lg font-semibold  leading-tight tracking-tight'>
// 				{name}
// 			</h4>
// 			<p className='text-sm sm:text-base text-gray-700'>{summary}</p>
// 		</div>
// 	</div>

// <div className='h-full max-w-sm bg-gray-50  border shadow-lg rounded overflow-hidden group '>
// 		<div className='group-hover:opacity-75  transition duration-150 ease-in-out '>
// 			<Link href={`/portfolio/${slug}`}>
// 				<Image
// 					src={`https:${thumbnail.fields.file.url}`}
// 					width={444}
// 					height={342}
// 				/>
// 			</Link>
// 		</div>
// 		<div className='p-4 sm:p-5 border-t'>
// 			<h4 className='sm:text-lg text-gray-800 text-lg font-semibold  leading-tight tracking-tight'>
// 				{name}
// 			</h4>
// 			<p className='text-sm sm:text-base text-gray-700'>{summary}</p>
// 		</div>
// 	</div>
