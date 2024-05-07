import { useState } from "react"
import { StateParamsType } from "../store/store"
import { Button } from "./common/Button"
import { Input } from "./common/Input"
import { StyledBox } from "./layout/StyledBox"

type PropsType = {
    stateParamsValues: StateParamsType
    startValue: number
    maxValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setValues: (start: number, max: number, disabled: boolean) => void

}

export const ParamBox = ({ stateParamsValues, startValue, maxValue, setStartValue, setMaxValue, setValues, }: PropsType) => {

    const isDisabled = stateParamsValues.disabledSet

    const [startMistake, setStartMistake] = useState(false)
    const [maxMistake, setMaxMistake] = useState(false)

    const changeStartValueHandler = (value: number) => {
        setStartValue(value)
        value < 0 ? setStartMistake(true) : setStartMistake(false)
    }

    const changeMaxValueHandler = (value: number) => {
        setMaxValue(value)
        value <= 0 ? setMaxMistake(true) : setMaxMistake(false)
    }

    const setValuesHandler = () => {
        setValues(startValue, maxValue, isDisabled)
    }

    return (
        <>
            <button onClick={() => console.log(isDisabled)}>isDisabled</button>
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


