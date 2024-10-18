import Link from "next/link";
import Image from "next/image";
import { BiArrowFromLeft, BiCheckCircle } from "react-icons/bi";
import { ImArrowUpRight2 } from "react-icons/im";
import Button from "../ui/Button";

const Card = ({ portfolio }) => {
	const { name, slug, summary, thumbnail, portfolioHighlights, technology } =
		portfolio.fields;

	// console.log("**portfolio.fields8 ", technology[0]);
	//  console.log("**K ", portfolio?.fields?.portfolioHighlights[0])

	return (
		<div className=''>
			<div className='lg:grid lg:grid-cols-2 lg:gap-16 '>
				<div className='lg:pb-16'>
					<div className=' flex  justify-between w-full mt-2'>
						{technology?.slice(0, 4).map((item) => (
							<div key={item.sys.id} className='flex flex-col items-center'>
								<div className='bg-gradient-to-r rounded-xl flex-nowrap gap-2 border px-2 py-1 from-green-500 to-orange-500 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
									{item.fields.title}
								</div>
							</div>
						))}
					</div>

					<h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>
						{name}
					</h3>
					<p className='text-gray-700/60 text-sm md:text-base'>{summary}</p>
					<hr className='border-t-2 border-gray-900/5 mt-4 md:mt-5' />
					<ul className=' text-gray-700/60 flex flex-col gap-4 mt-4 md:mt-5'>
						{portfolioHighlights.slice(0, 3).map((item) => (
							<li className='flex gap-2 text-sm md:text-base border-gray-900/5'>
								<BiCheckCircle className='w-5 h-6 md:w-6 md:h-7 ' />
								<span>{item}</span>
							</li>
						))}
					</ul>

					<Button
						className={""}
						icon={<ImArrowUpRight2 />}
						text={"View Project Details"}
						link={`/portfolio/${slug}`}
					/>
					{/*<Link href={`/portfolio/${slug}`}>
						<button className='bg-black text-gray-200 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
							<span>View Project Details </span>
							<ImArrowUpRight2 className='w-4 h-4' />
						</button>
					</Link>*/}
				</div>

				<div>
					<Image
						src={`https:${thumbnail.fields.file.url}?fm=webp`}
						blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
						placeholder='blur'
						height={1000}
						width={1000}
						quality={100}
						className='md:w-full rounded-t-2xl border-2  mt-8 -mb-7 md:-mb-0 lg:mt-0 lg:absolute lg:w-[45rem] overflow-hidden '
						alt=''
					/>
				</div>
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

// <div
// 				className='  max-w-sm sm:max-w-xs bg-gray-50 hover:border-orange-500 transition-transform
// 						duration-300 		scale-95

// 						 hover:scale-100
// 						 focus:scale-100    overflow-hidden  border-black border-solid border-4 rounded-lg md:shadow-[14px_14px_0_-4px_#fed7aa,_14px_14px_0_0_#1f1f1f]  flex h-[420px] w-[340px] xl:max-w-sm  flex-col bg-white/50    '>
// 				<div className=' transition duration-150 ease-in-out '>
// 					<Link href={`/portfolio/${slug}`}>
// 						<Image
// 							src={`https:${thumbnail.fields.file.url}?fm=webp`}
// 							blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
// 							placeholder='blur'
// 							height={300}
// 							width={224}
// 							className='h-48  md:block  w-full object-cover object-center   '
// 						/>
// 					</Link>
// 				</div>
// 				<div className='p-4 sm:p-5 '>
// 					<h4 className='text-xl text-gray-800 font-semibold  leading-tight tracking-tight'>
// 						{name}
// 					</h4>
// 					<p className='mt-2 text-base text-gray-700 clamp-2'>{summary}</p>
// 				</div>

// 			</div>

// <div
// 				className='absolute inset-0 -z-10 opacity-5'
// 				style={{
// 					backgroundImage: `url(${"/assets/images/grain.jpg"})`,
// 				}}></div>

// <div className='bg-gradient-to-r gap-2 from-green-500 to-orange-500 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
// 						<span>Company name</span>
// 						<span>&bull;</span>
// 						<span>Year 2000</span>
// 					</div>
