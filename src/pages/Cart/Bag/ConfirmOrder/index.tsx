import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { ConfirmOrderContainer } from "./styles";

export function ConfirmOrder() {
    const { totalValueCoffees, deliveryFee, amountToPlay, coffee } = useContext(CoffeeContext)

    return (
        <ConfirmOrderContainer>
            <div>
                <span>Total de itens</span>
                <span>R$ {totalValueCoffees.toFixed(2)}</span>
            </div>
            <div>
                <span>Entrega</span>
                <span>R$ {deliveryFee.toFixed(2)}</span>
            </div>
            <div>
                <span>Total</span>
                <span>R$ {amountToPlay.toFixed(2)}</span>
            </div>

            <button type="submit" disabled={coffee.length <= 0}>
                Confirmar Pedido
            </button>
        </ConfirmOrderContainer>
        
    )
}