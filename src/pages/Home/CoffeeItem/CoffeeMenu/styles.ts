import styled from "styled-components"

export const CoffeeMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
        gap: .25rem;

        p {
            background-color: ${props => props.theme["yellow-100"]};
            color: ${props => props.theme["yellow-900"]};
            font-size: .7rem;
            font-weight: bold;
            text-transform: uppercase;
            padding: .25rem .5rem;
            border-radius: 8px;
            margin: 0;
        }
    }

    span {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.25rem;
        margin: .5rem 0;
    }

    p {
        color: ${props => props.theme["gray-400"]};
        font-size: .875rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`

export const CoffeeImage = styled.img`
    width: 7.5rem;
    margin: calc(0px - 2rem - 6px) auto;
    margin-bottom: 1rem;
`