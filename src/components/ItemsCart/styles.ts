import styled from "styled-components";

export const ItemsCartContainer = styled.span`
    background-color: ${props => props.theme["yellow-900"]};
    color: ${props => props.theme.white};

    border-radius: 50%;
    padding: .25rem .5rem;
    font-size: .75rem;

    position: relative;
    left: 630px;
    bottom: 20px;
`