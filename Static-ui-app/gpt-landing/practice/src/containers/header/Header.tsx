import React from "react";
import headerImg from "../../assets/ai.png";
import users from "../../assets/people.png";
import "./header.css";

export default function Header() {
	return (
		<div className="header section__padding" id="Home">
			<div className="header__info">
				<h1 className="header__info_heading gradient__text">
					Let’s Build Something amazing with GPT-3 OpenAI
				</h1>
				<p className="header__info_desc">
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>

				<form action="submit" method="post" className="header__info_form">
					<input
						type="email"
						name="email"
						id="email"
						aria-label="email"
						placeholder="Your Email Address"
						className=""
					/>
					<button type="button" className="">
						Get Started
					</button>
				</form>
				<div className="header__info_users">
					<img src={users} alt="users" />
					<p className="header__info_users-desc">
						1,600 people requested access a visit in last 24 hours
					</p>
				</div>
			</div>
			<div className="header__img">
				<img src={headerImg} alt="headerImg" />
			</div>
		</div>
	);
}
