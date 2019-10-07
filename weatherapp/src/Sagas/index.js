import { takeLatest, put, call, all } from 'redux-saga/effects'


import { getWeatherSuccess, getWeatherFailure } from '../Actions'
import types from '../Actions/types'

const fetchWeather = cityName => {
    //APP id can be added to .env file
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=c44656d2816afe1dd4d2bf3004f27b17`;
    return fetch(url).then(res => res.json()).then(json => json)
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.WEATHER_FETCH_REQUEST, getWeatherWatcher)
  ])
}

function* getWeatherWatcher({ payload }) {
    try {
        const response = yield call(fetchWeather, payload)
        if (response.cod !== 200) {
            throw new Error(`Server returned ${response.cod}`)
        }
        yield put(getWeatherSuccess(response))
    } catch (error) {
        yield put(getWeatherFailure(error))
    }
}

