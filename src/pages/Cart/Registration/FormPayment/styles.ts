import styled from "styled-components"

export const CartFormOfPayment = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2rem;
    margin: 1rem 0;
    border-radius: 8px;
    span {
            display: flex;
            align-items: center;
            gap: .5rem;
            margin-bottom: .5rem;
            border: none;

            color: ${props => props.theme["purple-500"]};
            p {
                color: ${props => props.theme["gray-800"]};
                margin: 0;
            }
        }

        p {
            margin: 0 0 2rem 2rem;
            /* color: ${props => props.theme["gray-700"]}; */
        }

`

export const FormPaymentCard = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        display: flex;
        align-items: center;
        gap: .5rem;

        width: 32%;
        height: 4rem;
        border: none;
        background-color: ${props => props.theme["gray-200"]};

        text-transform: uppercase;
        font-size: .875rem;
        border-radius: 8px;
        padding: 1rem;

        cursor: pointer;
        transition: .5s;

        div {
            display: flex;
            align-items: center;
            
            color: ${props => props.theme["purple-500"]};
        }

        &:disabled {
            color: ${props => props.theme["gray-700"]};
            background-color: ${props => props.theme["gray-200"]};
        }

        &:hover {
            background-color: ${props => props.theme["gray-300"]};
        }

        &:active {
            border: 1px solid ${props => props.theme["purple-900"]};
            background-color: ${props => props.theme["purple-100"]};
        }
    }
`