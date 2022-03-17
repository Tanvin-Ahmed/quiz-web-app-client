import { quizActionType } from "../types";

// * add type for action function
interface TakeAnsFromUser {
	type: quizActionType.USER_ANS_GET;
	payload: AnswerType;
}
interface UserAnsStateReset {
	type: quizActionType.USER_ANS_RESET;
}

export const takeAnsFromUser = (payload: AnswerType): TakeAnsFromUser => {
	return { type: quizActionType.USER_ANS_GET, payload };
};

export const userAnsStateReset = (): UserAnsStateReset => {
	return { type: quizActionType.USER_ANS_RESET };
};

type x = ReturnType<typeof takeAnsFromUser>;
type y = ReturnType<typeof userAnsStateReset>;

export type quizType = x | y;
