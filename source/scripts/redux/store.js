//
import p__redux_thunk from '~/redux-thunk'
//
import {
	applyMiddleware as p__redux__apply_middleware,
	createStore as p__redux__create_store,
} from '~/redux'
import {
	createLogger as p__redux_logger__create_logger,
} from '~/redux-logger'
//
import m__reducers__reducer from '/redux/reducer'
//
const logger = p__redux_logger__create_logger()
//
export default (state) => {
	return p__redux__create_store(
		m__reducers__reducer,
		state,
		p__redux__apply_middleware(p__redux_thunk, logger),
	)
}
//	import createHistory from 'history/createBrowserHistory'
//	import {applyMiddleware, createStore} from 'redux'
//	import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
//	import {createLogger} from 'redux-logger'
//	import {routerMiddleware} from 'react-router-redux'
//	//
//	import reducer from './reducer'
//	import {promiseMiddleware, localStorageMiddleware} from './middleware'
//	//
//	export const history = createHistory()
//	const myRouterMiddleware = routerMiddleware(history)
//	const getMiddleware = () => {
//		if (process.env.NODE_ENV == 'production') {
//			return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware)
//		} else {
//			return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
//		}
//	}
//	export const store = createStore(reducer, composeWithDevTools(getMiddleware()))
