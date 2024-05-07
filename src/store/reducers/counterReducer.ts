import { StateParamsType } from "../store"

type ActionType = {
    type: string
    payload: any
}

const initialState = {
    startValue: 0,
    maxValue: 0,
    disabledSet: false
}

export const counterReducer = (state: StateParamsType = initialState, action: ActionType) => {
    switch (action.type) {
        case '': {
            return { ...state }
        }
        default: return state
    }
}