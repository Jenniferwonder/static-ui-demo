import React from "react";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import "./brand.css";

export default function Brand() {
	return (
		<div className="brands section__padding section__margin">
			<div>
				<img src={google} alt="brand-google" />
			</div>
			<div>
				<img src={slack} alt="brand-slack" />
			</div>
			<div>
				<img src={atlassian} alt="brand-atlassian" />
			</div>
			<div>
				<img src={dropbox} alt="brand-dropbox" />
			</div>
			<div>
				<img src={shopify} alt="brand-shopify" />
			</div>
		</div>
	);
}
