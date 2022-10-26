import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
    input {
        visibility: hidden;
        appearance: none;
    }

    input:checked + label div {
        /* background-color: ${props => props.theme["purple-100"]};
        border-color: ${props => props.theme["purple-500"]};

        &:hover {
            background-color: ${props => props.theme["purple-100"]};
        } */
        ${({ theme }) => css`
            background: ${props => props.theme["purple-100"]};
            border-color: ${props => props.theme["purple-500"]};

            &:hover {
                background-color: ${props => props.theme["purple-100"]};
            }
        `}
    }
`

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    width: 180px;
    padding: 0 1rem;
    font-size: .75rem;
    text-transform: uppercase;
    border-radius: 8px;
    height: 3rem;
    border: 1px solid ${props => props.theme["gray-200"]};
    background-color: ${props => props.theme["gray-200"]};
    transition: .5s;

    &:hover {
        background-color: ${props => props.theme["gray-300"]};
    }

    user-select: none;

    svg {
        color: ${props => props.theme["purple-500"]};
    }
`