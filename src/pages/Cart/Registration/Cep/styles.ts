import styled from "styled-components";

export const FormContainer = styled.div`
    border-radius: 8px;
    background-color: ${props => props.theme["base-card"]};
    padding: 2rem;
    span {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-bottom: .5rem;

        color: ${props => props.theme["yellow-900"]};
        p {
            color: ${props => props.theme["gray-800"]};
            margin: 0;
        }
    }

    p {
        margin: 0 0 2rem 2rem;
        color: ${props => props.theme["gray-700"]};
    }
`

export const Inputs = styled.div`

    div {
        input {
            padding: 1rem;
            margin: .75rem 0 1rem 0;
            border-radius: 8px;
            border: 1px solid ${props => props.theme["gray-200"]};
            background-color: ${props => props.theme["gray-100"]};

            max-width: 100%;
    }
    }

    div:nth-child(1) {
        input {
            width: 35%;
        }
    }

    div:nth-child(2) {
        input {
            width: 100%;
        }
    }

    div:nth-child(3) {
        display: flex;
        gap: 1rem;
        input:nth-child(1) {
            width: 35%;
        }
        input:nth-child(2) {
            width: 65%;
        }
    }

    div:nth-child(4) {
        display: flex;
        gap: 1rem;
        input:nth-child(1) {
            width: 35%;
        }
        input:nth-child(2) {
            width: 50%;
        }
        input:nth-child(3) {
            width: 12%;
        }
    }
    
`