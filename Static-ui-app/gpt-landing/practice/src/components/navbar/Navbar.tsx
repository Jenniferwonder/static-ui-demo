import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../logo.svg";
import "./navbar.css";

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="navbar section__padding">
			<div className="navbar__links">
				<div className="navbar__links-logo">
					<img src={logo} alt="GPT" />
				</div>
				<div className="navbar__links-container">
					<p>
						<a href="#Home">Home</a>
					</p>
					<p>
						<a href="#WhatGPT">What is GPT?</a>
					</p>
					<p>
						<a href="#OpenAI">Open AI</a>
					</p>
					<p>
						<a href="#Case">Case Studies</a>
					</p>
					<p>
						<a href="#Lib">Library</a>
					</p>
				</div>
			</div>
			<div className="navbar__buttons">
				<p>
					<a>Sign in</a>
				</p>
				<button>Sign up</button>
			</div>
			<div className="navbar__menu">
				{toggleMenu ? (
					<RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
				) : (
					<RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
				)}
				{toggleMenu && (
					<div className="navbar__menu_container scale-up-center">
						<div className="navbar__menu_container-links">
							<p>
								<a href="#Home">Home</a>
							</p>
							<p>
								<a href="#WhatGPT">What is GPT?</a>
							</p>
							<p>
								<a href="#OpenAI">Open AI</a>
							</p>
							<p>
								<a href="#Case">Case Studies</a>
							</p>
							<p>
								<a href="#Lib">Library</a>
							</p>
						</div>
						<div className="navbar__menu_container-buttons">
							<p>
								<a>Sign in</a>
							</p>
							<button>Sign up</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
