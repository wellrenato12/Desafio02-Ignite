import styled from "styled-components";

export const OrderContent = styled.div`
    h1 {
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme["yellow-900"]};
    }

    p:only-of-type {
        font-size: 1.25rem;
        margin-bottom: 3rem;
    }
`

export const CompletedOrderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    height: 270px;
`

export const OrderInformation = styled.div`
    border: 2px solid ${props => props.theme["yellow-900"]};
    border-radius: 8px 40px 8px 40px;
    padding: 0 2rem;
    width: 50%;
    
    div {
        display: flex;
        align-items: center;
        margin: 2.5rem 0;

        span {
            display: flex;

            border-radius: 50%;
            padding: .5rem;
            color: ${props => props.theme.white};
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            margin: 0 1rem;
        }
    }

    div:nth-child(1) {
        span {
            background-color: ${props => props.theme["purple-500"]};
        }
    }

    div:nth-child(2) {
        span {
            background-color: ${props => props.theme["yellow-500"]};
        }
    }

    div:nth-child(3) {
        span {
            background-color: ${props => props.theme["yellow-900"]};
        }
    }
`

export const CompletedOrderImage = styled.div`
    width: 40%;
`