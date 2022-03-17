import React, { useEffect, useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userAnsStateReset } from "../app/actions/quizActions";
import { useAppDispatch, useAppSelector } from "../app/hooks/reduxHooks";
import { correctAns, questions } from "../utils/questions";

const ResultScreen = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [Qns, setQns] = useState<QuestionType[]>([]);
	const [correct, setCorrect] = useState<AnswerType[]>([]);
	const [incorrect, setIncorrect] = useState<AnswerType[]>([]);
	const answers = useAppSelector(state => state.userAns.answer);

	useEffect(() => {
		const correct_ans = answers.filter(
			a => a.ans === correctAns[a.QId - 1].ans
		);
		setCorrect(correct_ans);

		const incorrect_ans = answers.filter(
			a => a.ans !== correctAns[a.QId - 1].ans
		);
		setIncorrect(incorrect_ans);
	}, [answers]);

	useEffect(() => {
		const allQns = questions;
		setQns(allQns);
	}, []);

	const handleReset = () => {
		localStorage.removeItem("persist:answer");
		dispatch(userAnsStateReset());
		navigate(`/quiz/${1}`);
	};

	return (
		<Row className="p-3 d-flex justify-content-center align-items-center">
			<Col sm={12} md={8}>
				<h1 className="text-center">RESULT</h1>
				<br />
				<br />
				<div className="text-center">
					{correct.length === 0 ? (
						<>
							<h1>😔</h1>
							<h2>Best luck for next</h2>
						</>
					) : correct.length <= 3 ? (
						<>
							<h1>😐</h1>
							<h2>Good Job!</h2>
						</>
					) : correct.length <= 5 ? (
						<>
							<h1>🤗</h1>
							<h2>Well Done!!</h2>
						</>
					) : correct.length === 6 ? (
						<>
							<h1>😍</h1>
							<h2>Excellent!!!</h2>
						</>
					) : null}
					<h3>
						{correct.length}/{answers.length}
					</h3>
				</div>
				<br />
				<ListGroup variant="flush" className="p-2">
					<h2>Correct Answers</h2>
					{correct.map(ans => (
						<ListGroup.Item key={ans.QId}>
							{ans.QId.toString() + ". "}
							<strong>{Qns.find(q => q._id === ans.QId)?.Q}</strong>
							<p className="m-0 p-0 text-success">Answer: {ans.ans}</p>
						</ListGroup.Item>
					))}
					<br />
					<br />
					<h2>Incorrect Answers with solve</h2>
					{incorrect.map((ans, index) => (
						<ListGroup.Item key={index}>
							{ans.QId.toString() + ". "}
							<strong>{Qns.find(q => q._id === ans.QId)?.Q}</strong>
							<p className=" text-danger">Your answer: {ans.ans}</p>
							<p className="text-success">
								Correct answer: {correctAns.find(ca => ca.QId === ans.QId)?.ans}
							</p>
						</ListGroup.Item>
					))}
				</ListGroup>
				<div className="text-center">
					<Button type="button" className="my-3" onClick={handleReset}>
						Test yourself again!
					</Button>
				</div>
			</Col>
		</Row>
	);
};

export default ResultScreen;
