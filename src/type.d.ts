interface QuestionType {
	_id: number;
	question: string;
	options: string[];
}

interface AnswerType {
	QId: number;
	ans: string;
}

interface CorrectAnswerType {
	QId: number;
	ans: number;
}
