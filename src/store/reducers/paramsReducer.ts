import { StateParamsType } from "../store"

const SET_START_VALUES = 'SET-START-VALUES'
export const RETURN_TO_INITIAL = 'RETURN-TO-INITIAL'

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
        case RETURN_TO_INITIAL: {
            return {
                ...state,
                disabledSet: action.payload.disabledSet
            }
        }

        default: return state
    }
}

type ActionType = ChangeStart | ReturnToInitial


type ChangeStart = {
    type: "SET-START-VALUES"
    payload: {
        startValue: number
        maxValue: number
        disabledSet: boolean
    }
}

export type ReturnToInitial = {
    type: 'RETURN-TO-INITIAL'
    payload: {
        disabledSet: boolean
        disabledInc: boolean
        disabledRes: boolean
        value: string
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
export const returnToInitialAC = (enterMessage: string) => {
    return {
        type: RETURN_TO_INITIAL,
        payload: {
            disabledSet: false,
            disabledInc: true,
            disabledRes: true,
            value: enterMessage
        }
    } as const
}

