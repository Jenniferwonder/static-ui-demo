import React from "react";
import "./feature.css";

export default function Feature({ title, text }) {
	return (
		<div className="feature">
			<div className="feature__title">
				<div className="gradient__bar"></div>
				<h1>{title}</h1>
			</div>
			<div className="feature__text">
				<p>{text}</p>
			</div>
		</div>
	);
}
