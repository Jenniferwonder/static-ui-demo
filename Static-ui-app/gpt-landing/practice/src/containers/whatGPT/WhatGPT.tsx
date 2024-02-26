import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT.css";

export default function WhatGPT() {
	return (
		<div className="whatgpt section__padding section__margin" id="WhatGPT">
			<div className="whatgpt__top-container">
				<Feature
					title="What is GPT-3"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
				/>
			</div>
			<div className="whatgpt__middle-container">
				<h1 className="feature__heading gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p className="cta-text">Explore The Library</p>
			</div>
			<div className="whatgpt__bottom-container">
				<Feature
					title="Chatbots"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
				/>
				<Feature
					title="Knowledgebase"
					text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
				/>
				<Feature
					title="Education"
					text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
				/>
			</div>
		</div>
	);
}
