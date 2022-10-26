import styled from "styled-components";

export const BagContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 40%;
`

export const BagItems = styled.div`
    border-radius: 8px 40px 8px 40px;
    background-color: ${props => props.theme["base-card"]};
    padding: 2rem;
`