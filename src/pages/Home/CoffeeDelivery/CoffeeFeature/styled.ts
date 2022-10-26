import styled from 'styled-components';

type IconContainer = {
    customColor: string;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 300px;
    height: 30px;

    margin-bottom: .5rem;
`;

export const TextContainer = styled.div<IconContainer>`
    background-color: ${({ customColor }) => customColor};
    color: ${props => props.theme.white};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 7px 0 0 7px;
`;