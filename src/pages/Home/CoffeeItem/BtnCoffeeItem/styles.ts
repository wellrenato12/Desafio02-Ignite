import styled from "styled-components";

export const CoffeeButton = styled.div`
    display: flex;
    gap: 1rem;
    height: 2.5rem;
    margin: .5rem 0;

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;

        background: ${props => props.theme["gray-200"]};
        border-radius: 8px;

        width: 5rem;

        button {
            display: flex;

            border: none;
            background-color: transparent;
            color: ${props => props.theme["purple-500"]};
            cursor: pointer;

            &:hover {
                color: ${props => props.theme["purple-900"]};
            }
        }
    }

    div:nth-child(2) {
        background-color: ${props => props.theme["purple-500"]};
        width: 2.5rem;

        transition: .5s;

        &:hover {
            background-color: ${props => props.theme["purple-900"]};
        }

        button {
            display: flex;
            color: ${props => props.theme.white};
            padding: .60rem;
        }
    }
`

export const CoffeeValue = styled.div`
    span {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.5rem;
        margin-left: .25rem;
    }
`