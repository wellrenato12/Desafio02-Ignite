import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { ItemsCartContainer } from "./styles";

export function ItemsCart() {
    const { itemsCart } = useContext(CoffeeContext)

    const hasCoffeeInCart = itemsCart > 0

    return (
        <>
            {hasCoffeeInCart && (
                <ItemsCartContainer>
                    {itemsCart}
                </ItemsCartContainer>
            )}
        </>
    )
}