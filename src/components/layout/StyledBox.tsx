import styled from "styled-components"

type StyledBoxType = {
    $width: string
    $height: string
}

export const StyledBox = styled.div<StyledBoxType>`
margin: 17px 19px;
justify-content: center;
width: ${(props) => props.$width};
height: ${(props) => props.$height};
border: 2px solid #60d4f5;
border-radius: 5px;

`