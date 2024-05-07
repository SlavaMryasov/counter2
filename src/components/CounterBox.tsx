import { Button } from "./common/Button"
import { StyledBox } from "./layout/StyledBox"

export const CounterBox = () => {
    return (
        <>
            <StyledBox $width='400px' $height="300px" >
                <StyledBox $width='360px' $height="150px">
                    <h3>dd</h3>
                </StyledBox>
                <StyledBox $width='360px' $height="90px" >
                    <Button title='inc' onClick={() => { }} disabled />
                    <Button title='reset' onClick={() => { }} disabled />
                </StyledBox>
            </StyledBox>
        </>
    )
}



