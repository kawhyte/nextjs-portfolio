import Image from "next/image";
import { Technology } from "../types/contentful";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import { Badge } from "./ui/badge";

const reactIconsMap: { [key: string]: React.ElementType } = {
	react: FaReact,
	javascript: SiJavascript,
	css: SiCss3,
	html: SiHtml5,
};

const TechnologyBadge = ({ technology }: { technology: Technology }) => {
	const { name, lucideIconName, customIcon } = technology.fields;

	const IconComponent = lucideIconName
		? reactIconsMap[lucideIconName.toLowerCase()]
		: undefined;

	return (
		<Badge variant='secondary' className='flex items-center gap-100'>
			{customIcon?.fields?.file?.url ? (
				<Image
					src={`https:${customIcon.fields.file.url}`}
					width={16}
					height={16}
					alt={`${name} icon`}
				/>
			) : IconComponent ? (
				<IconComponent className='h-4 w-4' />
			) : null}
			<span>{name}</span>
		</Badge>
	);
};

export default TechnologyBadge;
