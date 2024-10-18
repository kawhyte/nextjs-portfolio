import React from "react";
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from "react-share";

import {
	FaTwitter,
	FaLinkedin,
	FaFacebook,
	FaEnvelopeOpenText,
	
} from "react-icons/fa";

const iconCSS = "text-gray-600 h-8 w-7 hover:text-blue-600 fill-current";
const buttonCSS = "mr-5 bg-red-200 p-10 ";
function shareButtons({ shareURL }) {
	return (
		<div className='flex flex-col border-b-2 '>
			<p className='uppercase text-gray-500 text-sm'>SHARE THIS POST</p>

			<div className='my-3 pb-3  flex align-middle justify-start'>
				<TwitterShareButton url={shareURL} className={buttonCSS}>
					<FaTwitter className={iconCSS} />
				</TwitterShareButton>
				<LinkedinShareButton url={shareURL} className={buttonCSS}>
					<FaLinkedin className={iconCSS} />
				</LinkedinShareButton>
				<FacebookShareButton url={shareURL} className={buttonCSS}>
					<FaFacebook className={iconCSS} />
				</FacebookShareButton>

				<EmailShareButton url={shareURL} className={buttonCSS}>
					<FaEnvelopeOpenText className={iconCSS} />
				</EmailShareButton>
			</div>
		</div>
	);
}

export default shareButtons;
