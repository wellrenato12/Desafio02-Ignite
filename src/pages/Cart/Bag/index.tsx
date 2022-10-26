import { useContext } from "react";
import { CoffeeContext } from "../../../contexts/CoffeeContext";
import { ConfirmOrder } from "./ConfirmOrder";
import { Items } from "./Items";
import { BagContainer, BagItems } from "./styles";
import { Title } from "./Title";

export function Bag() {
    const { coffee } = useContext(CoffeeContext)

    return (
        <BagContainer>
            <Title />
            <BagItems>
                {coffee?.map((item) => {
                    return <Items 
                        key={item.nameCoffee} 
                        valueCoffee={item.valueCoffee} 
                        imgCoffee={item.imgCoffee} 
                        nameCoffee={item.nameCoffee}
                        countCartCoffee={item.countCartCoffee}
                    />
                })}
                <ConfirmOrder />
            </BagItems>
        </BagContainer>
    )
}