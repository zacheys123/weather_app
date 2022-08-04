export const mainreducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_WEATHER':
			return {
				...state,
				weatherQuery: action.payload,
				loading: false,
				ismodal: true,
				modalcontent: 'City found',
			};
		case 'ERROR':
			return {
				...state,
				weatherQuery: {},
				loading: true,
				ismodal: true,
				modalcontent: 'Error accessing the data ',
			};
		case 'NO_DATA':
			return {
				...state,
				weatherQuery: {},
				loading: false,
				ismodal: true,
				modalcontent: 'Empty input detected',
			};
		case 'EMPTY':
			return {
				...state,
				weatherQuery: {},
				loading: false,
				ismodal: true,
				modalcontent: 'Empty input detected',
			};

		case 'DATA':
			return {
				...state,
				weatherQuery: {},
				loading: false,
				ismodal: true,
				modalcontent: 'VOGHHH',
			};
		default:
			return state;
	}
};
