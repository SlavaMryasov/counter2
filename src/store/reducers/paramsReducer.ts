import { StateParamsType } from "../store"

const SET_START_VALUES = 'SET-START-VALUES'

const initialState: StateParamsType = {
    startValue: 0,
    maxValue: 1,
    disabledSet: false
}

export const paramsReducer = (state: StateParamsType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_START_VALUES: {
            return {
                ...state,
                startValue: action.payload.startValue,
                maxValue: action.payload.maxValue,
                disabledSet: action.payload.disabledSet
            }
        }
        default: return state
    }
}

type ActionType = ChangeStart


type ChangeStart = {
    type: "SET-START-VALUES"
    payload: {
        startValue: number
        maxValue: number
        disabledSet: boolean
    }
}

export const setStartValuesAC = (start: number, max: number, disabled: boolean) => {
    return {
        type: SET_START_VALUES,
        payload: {
            startValue: start,
            maxValue: max,
            disabledSet: !disabled
        }
    } as const
}


