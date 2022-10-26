import styled from "styled-components";

export const ConfirmOrderContainer = styled.div`
    div {
        display: flex;
        justify-content: space-between;

        margin: 1rem 0;
    }

    div:nth-child(3) {
        font-weight: bold;
        font-size: 1.5rem;
    }

    a {
        text-decoration: none;
    }

    button {
        display: flex;
        justify-content: center;

        width: 100%;
        margin: 2rem 0 1rem;
        padding: 1rem;
        border-radius: 8px;
        background-color: ${props => props.theme["yellow-500"]};
        color: ${props => props.theme.white};
        text-transform: uppercase;
        border: none;
        transition: .5s;

        cursor: pointer;

        &:hover {
            background-color: ${props => props.theme["yellow-900"]};
        }

        &:disabled {
            background-color: ${props => props.theme["yellow-900"]};
            opacity: 0.7;
            cursor: not-allowed;
        }
    }
`