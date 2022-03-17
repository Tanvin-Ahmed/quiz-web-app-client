import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/HomeScreen";
import QuestionsScreen from "./screen/QuestionsScreen";
import ResultScreen from "./screen/ResultScreen";
import PageNotFound from "./screen/PageNotFound";

function App() {
	return (
		<>
			<BrowserRouter>
				<Container>
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="/quiz/:questionId" element={<QuestionsScreen />} />
						<Route path="/quiz/result" element={<ResultScreen />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</>
	);
}

export default App;
