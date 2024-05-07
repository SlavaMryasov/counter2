import { combineReducers, legacy_createStore } from "redux"
import { paramsReducer } from "./reducers/paramsReducer"
import { counterReducer } from "./reducers/counterReducer"

export type StateParamsType = {
    startValue: number
    maxValue: number
    disabledSet: boolean
}

const rootReducer = combineReducers({
    params: paramsReducer,
    counter: counterReducer
})

export type AppRootReducer = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)

