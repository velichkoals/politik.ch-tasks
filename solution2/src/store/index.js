import { applyMiddleware, combineReducers, createStore } from 'redux';
import { usersReducer } from './users/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
	users: usersReducer,
});
export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
