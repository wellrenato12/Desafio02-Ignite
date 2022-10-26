import styled from "styled-components";

export const CoffeeDeliveryContainer = styled.main`
    display: flex;
    justify-content: space-between;
    gap: 5rem;
`

export const CoffeeContent = styled.div`
    h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3.25rem;
    line-height: 3.5rem;
    margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 4rem;
    }

    div {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;

        gap: 1rem;
    }
`

export const CoffeeImage = styled.div`
    img {
            max-width: 28rem;
        }
`