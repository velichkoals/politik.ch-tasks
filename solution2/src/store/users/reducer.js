import { GET_USERS } from './actionTypes';

const defaultState = [];

export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_USERS: {
			return [...action.payload];
		}
		default:
			return state;
	}
};
