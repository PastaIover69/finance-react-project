import styled from "styled-components";

const css = {
    FormContainer: styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 600px;
        height: auto;
        min-height: 60px;
        border-radius: 8px;
        box-shadow: 0px 0px 3px grey;
        margin: 40px auto 40px;
        padding: 20px;
    `,
    Input: styled.input `
        display: block;
        position: relative;
        width: 100%;
        height: 40px;
        outline: none;
        border: none;
        padding: 20px;
        background-color: rgb(229, 229, 229);
        border-radius: 4px;
        margin-bottom: 10px;
        :last-child {
            margin-bottom: 0;
        }
    `,
    Button: styled.button `
        display: block;
        position: relative;
        max-width: 220px;
        width: 100%;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
        background-color: ${props => props.backgroundColor};
        outline: none;
        padding: 20px;
        border: none;
        transition: all .3s ease;
       
        &:hover {
            transform: translateY(-2px);
        }
    `
}

export default css