import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const PageNotFound = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center flex-column"
			style={{ height: "100vh" }}
		>
			<h1>PAGE NOT FOUND</h1>
			<h2>
				<FontAwesomeIcon icon={faGlobe} /> 404
			</h2>
		</div>
	);
};

export default PageNotFound;
