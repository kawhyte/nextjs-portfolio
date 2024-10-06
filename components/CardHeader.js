import { twMerge } from "tailwind-merge";
import StarIcon from "/public/assets/icons/star.svg";

const CardHeader = ({ title, description,className }) => {
	return (
		<div className={twMerge( "flex flex-col p-6",className )  }>
			<div>
				<div className='inline-flex items-center gap-2'>
					<StarIcon className='size-9 text-green-300 ' />

					<h3 className='font-serif text-3xl '>{title}</h3>
				</div>
				<p className='text-sm lg:text-base max-w-xs text-gray-500/90 mt-2'>{description}</p>
			</div>
		</div>
	);
};

export default CardHeader;
