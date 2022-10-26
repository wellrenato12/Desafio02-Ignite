import { CoffeeDelivery } from "./CoffeeDelivery";
import { CoffeeList } from "./CoffeeList";
import { CoffeListContainer } from "./styles";

export function Home() {
    return (
        <CoffeListContainer>
            <CoffeeDelivery />
            <CoffeeList />
        </CoffeListContainer>
    )
}