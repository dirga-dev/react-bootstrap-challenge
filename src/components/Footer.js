import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
	return (
		<footer className="text-muted py-5 border-top">
			<div className="container">
				<p className="mb-1">This is My First React App in Bootstrap</p>
				<p className="mb-0">
					New to React? <a href="https://reactjs.org/">Visit the Homepage</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
