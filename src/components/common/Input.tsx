import styled from "styled-components"
type PropsType = {
    value: number
    mistake: boolean
    onChange: (value: number) => void
}

export const Input = ({ value, mistake, onChange }: PropsType) => {
    return (
        <StyledInput type="number" value={value} $mistake={mistake} onChange={(e) => onChange(+e.currentTarget.value)} />
    )
}

type StyledInputType = {
    $mistake: boolean
}

const StyledInput = styled.input<StyledInputType>`
    width: 120px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid ${props => props.$mistake ? 'red' : "#60d4f5"};
    outline: none;
`