import "./App.css";
import { CTA, Brand, Navbar } from "./components";
import { Blog, Header, Features, Footer, WhatGPT } from "./containers";
import Possibility from "./containers/possibility/Possibility";

function App() {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;
