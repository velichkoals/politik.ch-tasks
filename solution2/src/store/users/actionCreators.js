import { GET_USERS } from './actionTypes';

export const getUsersAction = (payload) => ({
	type: GET_USERS,
	payload,
});
