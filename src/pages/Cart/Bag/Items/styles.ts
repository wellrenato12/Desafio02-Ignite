import styled from "styled-components";

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ItemsContent = styled.div`
    display: flex;
    justify-content: space-between;

    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid ${props => props.theme["gray-200"]};

    img {
        width: 5rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
            text-align: center;
        }

        div {
            display: flex;
            flex-direction: row;
            
            div {
                background-color: ${props => props.theme["gray-200"]};
                padding: .5rem;
                border-radius: 8px;

                transition: .5s;

                &:hover {
                    background-color: ${props => props.theme["gray-300"]};
                }

                button {
                    display: flex;
                    border: none;
                    background-color: transparent;

                    cursor: pointer;
                }
            }

            div {
                button {
                    display: flex;
                    align-items: center;
                    gap: .5rem;

                    color: ${props => props.theme["purple-900"]};

                    p {
                        color: ${props => props.theme["gray-900"]};
                        text-transform: uppercase;
                        font-size: .875rem;
                    }
                }
            }
        }
    }

    span {
        font-weight: bold;
    }
`