import Link from "next/link";
import Image from "next/image";


const Card = ({ portfolio }) => {
	const { name, slug, summary, thumbnail } = portfolio.fields;

	return (
		<>
		<div className='h-full max-w-sm bg-gray-50  border shadow-lg rounded overflow-hidden group '>
		<div className='group-hover:opacity-75  transition duration-150 ease-in-out '>
			<Link href={`/portfolio/${slug}`}>
			<a>
				<Image
					src={`https:${thumbnail.fields.file.url}?fm=webp`}
					blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
							placeholder='blur'
					width={444}
					height={342}
				/>
				</a>
			</Link>
		</div>
		<div className='p-4 sm:p-5 border-t'>
			<h4 className='sm:text-lg text-gray-800 text-lg font-semibold  leading-tight tracking-tight'>
				{name}
			</h4>
			<p className='text-sm sm:text-base text-gray-700 clamp-2'>{summary}</p>
		</div>
	</div>
		</>
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

