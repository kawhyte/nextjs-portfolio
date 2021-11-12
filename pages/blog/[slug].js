import { createClient } from "contentful";
import Image from "next/image";
import Head from "next/head";
import Button from "../../components/Button";
import CaseStudy from "../../components/CaseStudy";
import ShareButtons from "../../components/ShareButton";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderOptions } from "../../util/rich-text-types";
import Skeleton from "../../components/Skeleton";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "blogPost",
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const { items } = await client.getEntries({
		content_type: "blogPost",
		"fields.slug": params.slug,
	});

	if (!items.length) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: { blog: items[0] },
		revalidate: 1,
	};
};

export default function PortfolioDetails({ blog }) {
	if (!blog) return <Skeleton />;
	const {
		description,
		gallery,
		slug,
		name,
		title,
		related,
		summary,
		thumbnail,
		photoCredit,
		url,
		demoUrl,
		technology,
		approach,
		problem,
		result,
		richText,
		richTextProblem,
		richTextApproach,
		richTextResult,
	} = blog.fields;

	let shareURL = `https://www.kennywhyte.com/blog/${slug}`;
	return (
		<main className='mt-20'>
			<Head>
				<title>{title} | Kenny Portfolio</title>
				<meta></meta>
				<link rel='icon' href='/favicon.ico'></link>
			</Head>
			<div className='mb-8  w-full max-w-screen-lg mx-auto '>
				<div className=' '>
					<h2 className='text-5xl font-semibold md:font-bold text-black leading-tight'>
						{title}
					</h2>
					<a
						href='#'
						className='px-2 py-2 mb-8  text-black text-base inline-flex items-center justify-center'>
						Photo credit: {photoCredit}
					</a>
				</div>
				<div className='   '>
					<Image
						blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
						placeholder='blur'
						src={`https:${thumbnail.fields.file.url}?fm=webp`}
						width={1024}
						height={384}
						className=' w-full h-full  object-cover rounded-lg'
						alt={title}
					/>
				</div>

				<ShareButtons shareURL={shareURL} />
			</div>

			<div className='px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed'>
				<p className='pb-6'>
					{documentToReactComponents(richText, renderOptions)}
				</p>
			</div>
		</main>
	);
}
