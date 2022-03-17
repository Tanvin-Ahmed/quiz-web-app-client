import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { takeAnsFromUser } from "../app/actions/quizActions";
import FormContainer from "../components/FormContainer";
import { questions } from "../utils/questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../app/hooks/reduxHooks";

const QuestionsScreen = () => {
	const { questionId } = useParams();
	const dispatch = useAppDispatch();
	const [question, setQuestion] = useState<QuestionType>({
		_id: 0,
		Q: "",
		options: [],
	});

	const answer = useAppSelector(state => state.userAns.answer);

	useEffect(() => {
		const findQuestion = questions.find(q => q._id === Number(questionId));
		if (findQuestion) setQuestion(findQuestion);
	}, [questionId]);

	const handleChangeEvent = (
		e: React.FormEvent<HTMLInputElement>,
		QId: number
	) => {
		const data = {
			QId,
			ans: e.currentTarget.value,
		};
		dispatch(takeAnsFromUser(data));
	};

	const handleSubmitAns = (e: React.SyntheticEvent) => {
		e.preventDefault();
	};
	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}
		>
			<FormContainer>
				<Form onSubmit={handleSubmitAns}>
					<Form.Group>
						<Form.Label>
							<strong>{questionId + ". " + question.Q}</strong>
						</Form.Label>
						{question.options.map((option, index) => (
							<Form.Check
								key={index}
								type="radio"
								label={option}
								value={option}
								name="option"
								id={index.toString()}
								checked={
									answer.find(
										a => a.ans === option && a.QId === Number(questionId)
									)
										? true
										: false
								}
								onChange={(e: React.FormEvent<HTMLInputElement>) =>
									handleChangeEvent(e, Number(questionId))
								}
							></Form.Check>
						))}
					</Form.Group>
					{Number(questionId) === questions.length ? (
						<LinkContainer
							aria-disabled={
								answer.find(a => a.QId === Number(questionId)) ? false : true
							}
							to="/quiz/result"
						>
							<Button
								disabled={
									answer.find(a => a.QId === Number(questionId)) ? false : true
								}
								className="mt-3"
								type="submit"
							>
								Submit
							</Button>
						</LinkContainer>
					) : (
						<div className="d-flex justify-content-between align-items-center mt-3">
							<LinkContainer to={`/quiz/${Number(questionId) - 1}`}>
								<Button type="button" disabled={Number(questionId) === 1}>
									<FontAwesomeIcon icon={faArrowLeft} />
									&nbsp; Previous
								</Button>
							</LinkContainer>
							<LinkContainer
								aria-disabled={
									answer.find(a => a.QId === Number(questionId)) ? false : true
								}
								to={`/quiz/${Number(questionId) + 1}`}
							>
								<Button
									disabled={
										answer.find(a => a.QId === Number(questionId))
											? false
											: true
									}
									type="button"
								>
									Next &nbsp;
									<FontAwesomeIcon icon={faArrowRight} />
								</Button>
							</LinkContainer>
						</div>
					)}
				</Form>
			</FormContainer>
		</div>
	);
};

export default QuestionsScreen;
