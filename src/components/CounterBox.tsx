import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setResultAndDisabled } from "../store/reducers/counterReducer"
import { AppRootReducer, StateCounterType } from "../store/store"
import { Button } from "./common/Button"
import { StyledBox } from "./layout/StyledBox"
import { useState } from "react"

type PropsType = {
    startValue: number
    maxValue: number
}

export const CounterBox = ({ startValue, maxValue }: PropsType) => {
    let { messages, value, disabledInc, disabledRes } =
        useSelector<AppRootReducer, StateCounterType>(state => state.counter)
    const dispatch = useDispatch()


    const mistake = +value === maxValue
    const inc = () => {
        +value === maxValue
            ? dispatch(setResultAndDisabled(+value, true, false))
            : dispatch(setResultAndDisabled(+value + 1, false, false))
        if (+value + 1 === maxValue) { // доп проверка, что бы кнопка inc дизейблилась по достижению max 
            dispatch(setResultAndDisabled(+value + 1, true, false))
        }
    }


    const reset = () => {
        dispatch(setResultAndDisabled(startValue, false, false))
    }


    return (
        <>
            <StyledBox $width='400px' $height="300px" >
                <StyledBox $width='360px' $height="150px">
                    <StyledH3 $mistake={mistake}>{value}</StyledH3>
                </StyledBox>
                <StyledBox $width='360px' $height="90px" >
                    <Button title='inc' onClick={inc} disabled={disabledInc} />
                    <Button title='reset' onClick={reset} disabled={disabledRes} />
                </StyledBox>
            </StyledBox>
        </>
    )
}

type StyledH3Type = {
    $mistake: boolean
}

const StyledH3 = styled.h3<StyledH3Type>`
font-size: 1.5rem;
color: ${props => props.$mistake ? 'red' : '#60d4f5'} 
`
