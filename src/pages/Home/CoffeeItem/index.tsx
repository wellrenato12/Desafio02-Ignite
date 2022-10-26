import { BtnCoffeeItem } from "./BtnCoffeeItem";
import { CoffeeMenu } from "./CoffeeMenu";
import { BuyCoffeeContainer, CoffeeItemContainer } from "./styles";

export type CoffeeMenuType = {
    coffeeTypes: Types[];
    imgCoffee: string;
    nameCoffee: string;
    description: string;
    valueCoffee: number;
}

type Types = {
    id: number;
    name: string;
}

export function CoffeeItem({ coffeeTypes, description, nameCoffee, imgCoffee, valueCoffee }: CoffeeMenuType) {
    return (
        <CoffeeItemContainer>
            <CoffeeMenu
                coffeeTypes={coffeeTypes}
                description={description}
                nameCoffee={nameCoffee}
                imgCoffee={imgCoffee}
                valueCoffee={valueCoffee}
            />
            <BuyCoffeeContainer>
                <BtnCoffeeItem 
                    valueCoffee={valueCoffee} 
                    imgCoffee={imgCoffee} 
                    nameCoffee={nameCoffee} 
                />
            </BuyCoffeeContainer>
        </CoffeeItemContainer>
    )
}