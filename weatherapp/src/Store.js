import {createSagaMiddleware} from 'redux-saga'
import { createStore, applyMiddleware, /* compose */ } from 'redux'
import reducer from './Reducers'
import rootSaga from './Sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
