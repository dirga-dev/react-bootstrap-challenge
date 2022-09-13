import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarChallenge from "./components/Navbar.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

function App() {
	return (
		<div className="App">
			{/* <NavbarChallenge /> */}
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
