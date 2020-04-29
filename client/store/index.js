import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './user'
import buildings from './buildings'
import building from './singleBuilding'
import units from './units'
import unit from './singleUnit'
import tenants from './tenants'
import tenant from './singleTenant'

export const reducer = combineReducers({user,buildings,building,units,unit,tenants,tenant})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
