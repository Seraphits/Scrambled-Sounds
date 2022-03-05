import styled, { css } from "styled-components";

const buttonStyles =css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css` 
    background-color: white;
    color: black; 
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;
const googleSignInStyles =css`
    background-color: #4285f4;
    color: white; 
    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

const getButtonStyles = props => {
    if (props.googleSignIn) {
        return googleSignInStyles
    }
    return props.inverted ? invertedButtonStyles: buttonStyles
};

export const CustomButtonContairer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 50px;
    padding: 0 35px 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: inherit;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
`
// custom-button.component

const CustomButton = ({ children...props }) => (
    <CustomButtonContairer {...props}>
        {children}
    </CustomButtonContairer>
);