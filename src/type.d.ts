interface QuestionType {
	_id: number;
	Q: string;
	options: string[];
}

interface AnswerType {
	QId: number;
	ans: string;
}

interface InitStateForUserAns {
	answer: AnswerType[];
}
