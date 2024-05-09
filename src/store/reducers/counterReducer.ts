import { StateCounterType } from "../store"
import { RETURN_TO_INITIAL, ReturnToInitial } from "./paramsReducer"

const SET_RESULT_AND_DISABLED = 'SET-RESULT-AND-DISABLED'
const INCORRECT_MESSAGE = 'INCORRECT-MESSAGE'

const initialState: StateCounterType = {
    messages: {
        enterMessage: "enter values and press 'set'",
        incorrectMessages: 'Incorrect value!'
    },
    value: "enter values and press 'set'",
    disabledInc: true,
    disabledRes: true
}

export const counterReducer = (state: StateCounterType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_RESULT_AND_DISABLED: {
            return {
                ...state,
                disabledInc: action.payload.disabledInc,
                value: String(action.payload.value),
                disabledRes: action.payload.disabledRes
            }
        }
        case RETURN_TO_INITIAL: {
            return {
                ...state,
                disabledInc: action.payload.disabledInc,
                disabledRes: action.payload.disabledRes,
                value: action.payload.value
            }
        }
        case INCORRECT_MESSAGE: {
            return {
                ...state,
                value: action.payload.message
            }
        }
        default: return state
    }
}

type ActionType = SetResultAndDisabled | SetReset | ReturnToInitial | SetIncorrectMessage

type SetResultAndDisabled = {
    type: 'SET-RESULT-AND-DISABLED'
    payload: {
        value: number
        disabledInc: boolean
        disabledRes: boolean
    }
}
type SetReset = {
    type: 'SET-RESET'
    payload: {
        disabled: boolean
    }
}

type SetIncorrectMessage = {
    type: 'INCORRECT-MESSAGE'
    payload: {
        message: string
    }
}


export const setResultAndDisabled = (value: number, disabledInc: boolean, disabledRes: boolean) => {
    return {
        type: SET_RESULT_AND_DISABLED,
        payload: {
            value,
            disabledInc,
            disabledRes,
        }
    } as const
}

export const setResetAC = (disabled: boolean) => {
    return {
        type: 'SET-RESET',
        payload: {
            disabled
        }
    }
}

export const setIncorrectMessageAC = (message: string) => {
    return {
        type: INCORRECT_MESSAGE,
        payload: {
            message
        }
    }
} 
