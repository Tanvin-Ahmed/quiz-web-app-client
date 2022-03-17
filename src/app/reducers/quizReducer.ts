import { quizType } from "../actions/quizActions";
import { quizActionType } from "../types";

const initialState: InitStateForUserAns = {
	answer: [],
};

export const userAnsReducer = (state = initialState, action: quizType) => {
	switch (action.type) {
		case quizActionType.USER_ANS_GET:
			const ans = action.payload;
			const exist = state.answer.find(a => a.QId === ans.QId);
			if (exist) {
				return { answer: state.answer.map(a => (a.QId === ans.QId ? ans : a)) };
			}
			return { answer: [...state.answer, action.payload] };

		case quizActionType.USER_ANS_RESET:
			return initialState;

		default:
			return state;
	}
};
