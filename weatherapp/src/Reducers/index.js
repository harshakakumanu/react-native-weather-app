import types from '../Actions/types'

const INITIAL_STATE = {
	weatherData: null,
	weatherDataLoading: false,
	history: [],
	weatherFetchError: '',
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.WEATHER_FETCH_REQUEST:
			return { ...state, weatherData: null, weatherDataLoading: true, weatherFetchError: '' }
		case types.WEATHER_FETCH_SUCCESS:

			// Determining if incomingCityName is a duplicate and should be pushed to history
			const incomingCityName = action.payload.name
			const history = state.history.indexOf(incomingCityName) < 0 ? [...state.history, incomingCityName] : [...state.history]

			return { ...state, weatherData: action.payload, weatherDataLoading: false, history, weatherFetchError: '' }
		case types.WEATHER_FETCH_FAILURE:
			return { ...state, weatherData: null, weatherDataLoading: false, weatherFetchError: action.payload.toString() }
		default:
			return state
	}
}
