import { useState } from "react"
import { AppRootReducer, Messages, StateParamsType } from "../store/store"
import { Button } from "./common/Button"
import { Input } from "./common/Input"
import { StyledBox } from "./layout/StyledBox"
import { useDispatch, useSelector } from "react-redux"
import { returnToInitialAC } from "../store/reducers/paramsReducer"
import { setIncorrectMessageAC } from "../store/reducers/counterReducer"

type PropsType = {
    disabledSet: boolean
    startValue: number
    maxValue: number
    incorrectMessages: string
    enterMessage: string
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setValues: (start: number, max: number, disabled: boolean) => void

}

export const ParamBox = ({ disabledSet, startValue, maxValue, incorrectMessages, enterMessage,
    setStartValue, setMaxValue, setValues, }: PropsType) => {

    let isDisabled = disabledSet
    const dispatch = useDispatch()


    const [startMistake, setStartMistake] = useState(false)
    const [maxMistake, setMaxMistake] = useState(false)

    const changeStartValueHandler = (value: number) => {
        setStartValue(value)
        value < 0 ? setStartMistake(true) : setStartMistake(false)
        dispatch(returnToInitialAC(enterMessage))
        dispatch(setIncorrectMessageAC(incorrectMessages))
    }

    const changeMaxValueHandler = (value: number) => {
        setMaxValue(value)
        if (value <= 0) {
            setMaxMistake(true)
            dispatch(setIncorrectMessageAC(incorrectMessages))
        } else {
            setMaxMistake(false)
            dispatch(returnToInitialAC(enterMessage))
        }
    }

    const setValuesHandler = () => {
        setValues(startValue, maxValue, isDisabled)
    }

    return (
        <>
            <StyledBox $width='400px' $height="300px">
                <StyledBox $width='360px' $height="150px">
                    <div>
                        <span>max value: </span>
                        <Input value={maxValue} onChange={changeMaxValueHandler} mistake={maxMistake} />
                    </div>
                    <div>
                        <span>start value: </span>
                        <Input value={startValue} onChange={changeStartValueHandler} mistake={startMistake} />
                    </div>
                </StyledBox>
                <StyledBox $width='360px' $height="90px">
                    <Button title='set' disabled={isDisabled} onClick={setValuesHandler} />
                </StyledBox>
            </StyledBox>
        </>
    )
}


