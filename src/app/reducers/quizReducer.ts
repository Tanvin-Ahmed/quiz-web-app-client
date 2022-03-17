import { quizType } from "../actions/quizActions";
import { quizActionType } from "../types";

export const userAnsReducer = (state: AnswerType[] = [], action: quizType) => {
	switch (action.type) {
		case quizActionType.USER_ANS_GET:
			return [...state, action.payload];

		case quizActionType.USER_ANS_RESET:
			return [];

		default:
			return state;
	}
};
