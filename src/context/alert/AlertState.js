import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
const client_id = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const AlertState = (props) => {
	const initialState = null;

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	//Set alert
	const setAlert = (msg, type) => {
		dispatch({ type: SET_ALERT, payload: { msg, type } });
		setTimeout(() => {
			dispatch({ tpye: REMOVE_ALERT });
		}, 5000);
	};

	return (
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert
			}}>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
