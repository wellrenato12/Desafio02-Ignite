import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
    background-color: ${props => props.theme["gray-100"]};
    width: 16rem;
    padding: 1rem;
    margin-top: 3rem;
    border-radius: 8px 32px 8px 32px;
`

export const BuyCoffeeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`