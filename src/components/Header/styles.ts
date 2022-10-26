import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: 2rem 0;

        div {
            display: flex;
            gap: 0.5rem;

            button {
                display: flex;
                align-items: center;

                border: none;
                border-radius: 8px;
                padding: 0.5rem 0.55rem;
            }

            a {
                text-decoration: none;
            }

            button:first-child {
                background-color: ${props => props.theme["purple-100"]};
                color: ${props => props.theme["purple-900"]};
                gap: 0.5rem;
                font-weight: bold;
            }

            button:last-child {
                background-color: ${props => props.theme["yellow-100"]};
                color: ${props => props.theme["yellow-900"]};

                cursor: pointer;
            }
        }
    }
`