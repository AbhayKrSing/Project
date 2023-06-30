import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'              //Helps to use asynchronous JS functions
import Rootreducer from './state/Reducers'

const store = createStore(Rootreducer, {}, applyMiddleware(thunk))
export default store