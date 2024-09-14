import Link from "next/link";
import Image from "next/image";

const Card = ({ portfolio }) => {
	const { name, slug, summary, thumbnail } = portfolio.fields;

	return (
		<>
			<div
				className='  max-w-sm sm:max-w-xs bg-gray-50 hover:border-orange-500 transition-transform
						duration-300 		scale-95 
					
 
				
						 hover:scale-100
						 focus:scale-100    overflow-hidden  border-black border-solid border-4 rounded-lg md:shadow-[14px_14px_0_-4px_#fed7aa,_14px_14px_0_0_#1f1f1f]  flex h-[420px] w-[340px] xl:max-w-sm  flex-col bg-white/50    '>
				<div className=' transition duration-150 ease-in-out '>
					<Link href={`/portfolio/${slug}`}>
						<Image
							src={`https:${thumbnail.fields.file.url}?fm=webp`}
							blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
							placeholder='blur'
							height={300}
							width={224}
							className=' h-42  md:block  w-full object-cover object-center   '
						/>
					</Link>
				</div>
				<div className='p-4 sm:p-5 border-t'>
					<h4 className='text-2xl text-gray-800 font-semibold  leading-tight tracking-tight'>
						{name}
					</h4>
					<p className=' text-lg text-gray-700 clamp-2'>{summary}</p>
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
