import Link from "next/link";
import Image from "next/image";


const Card = ({ portfolio }) => {
	const { name, slug, summary, thumbnail } = portfolio.fields;

	return <>
    <div className=' max-w-sm bg-gray-50 hover:border-orange-300    overflow-hidden  border-black border-solid border-4 rounded-lg shadow-[14px_14px_0_-4px_#45f298,_14px_14px_0_0_#1f1f1f]  flex h-[420px] w-[420px]  flex-col bg-white/50  md:ml-auto '>
    <div className=' transition duration-150 ease-in-out '>
        <Link href={`/portfolio/${slug}`}>

            <Image
                src={`https:${thumbnail.fields.file.url}?fm=webp`}
                blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
                        placeholder='blur'
                width={444}
                height={342}
                className="w-full h-72"
            />

        </Link>
    </div>
    <div className='p-4 sm:p-5 border-t'>
        <h4 className='sm:text-lg text-gray-800 text-lg font-semibold  leading-tight tracking-tight'>
            {name}
        </h4>
        <p className='text-sm sm:text-base text-gray-700 clamp-2'>{summary}</p>
    </div>
</div>




    </>;
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

