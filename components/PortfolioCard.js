import Link from "next/link";
import Image from "next/image";

const Card = ({ portfolio }) => {
	const { name, slug, summary, thumbnail } = portfolio.fields;

	return (
		<>
			<div class='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
			<Link href={`/portfolio/${slug}`}>
				<Image
					src={`https:${thumbnail.fields.file.url}`}
					width={640}
					height={480}
				/>
</Link>
				<div class='p-6 bg-white'>
					<h2 class='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
						CATEGORY
					</h2>
					<h1 class='title-font text-lg font-medium text-gray-900 mb-3'>
						{name}
					</h1>
					<p class='leading-relaxed mb-3'>{summary}</p>
					<div class='flex items-center flex-wrap '></div>
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
