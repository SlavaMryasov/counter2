import { combineReducers, legacy_createStore } from "redux"
import { paramsReducer } from "./reducers/paramsReducer"
import { counterReducer } from "./reducers/counterReducer"

export type StateParamsType = {
    startValue: number
    maxValue: number
    disabledSet: boolean
}

export type Messages = {
    enterMessage: string
    incorrectMessages: string
}

export type StateCounterType = {
    messages: Messages
    value: string
    disabledInc: boolean
    disabledRes: boolean
}


const rootReducer = combineReducers({
    params: paramsReducer,
    counter: counterReducer
})

export type AppRootReducer = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store
