import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomeScreen = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center flex-column"
			style={{ height: "100vh" }}
		>
			<h1>Welcome to Quiz Competition!</h1>
			<h3>!!Recharge your brain!!</h3>
			<LinkContainer to={`/quiz/${1}`}>
				<Button className="btn">Start Quiz</Button>
			</LinkContainer>
		</div>
	);
};

export default HomeScreen;
