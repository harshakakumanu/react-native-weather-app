import types from './types'

export const getWeather = city => ({
    type: types.WEATHER_FETCH_REQUEST,
    payload: city,
})

export const getWeatherSuccess = weatherData => ({
    type: types.WEATHER_FETCH_SUCCESS,
    payload: weatherData
})

export const getWeatherFailure = error => ({
    type: types.WEATHER_FETCH_FAILURE,
    payload: error
})
