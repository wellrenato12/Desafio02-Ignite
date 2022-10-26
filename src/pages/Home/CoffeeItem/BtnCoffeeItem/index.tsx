import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { CoffeeButton, CoffeeValue } from "./styles";

interface BtnCoffeeItemProps {
    valueCoffee: number;
    imgCoffee: string;
    nameCoffee: string;
}

export function BtnCoffeeItem({ valueCoffee, imgCoffee, nameCoffee }: BtnCoffeeItemProps) {
    const { addCoffeeInCart } = useContext(CoffeeContext)
    const [totalValueCoffee, setTotalValueCoffee] = useState(valueCoffee)
    const [countCartCoffee, setCountCartCoffee] = useState(1)

    function handleIncreaseCart() {
        if (countCartCoffee >= 1 && countCartCoffee < 99) {
            setCountCartCoffee((state) => {
                return state + 1
            })
            setTotalValueCoffee((state) => {
                return state + valueCoffee;
            })
        }
    }

    function handleDecreaseCart() {
        if (countCartCoffee > 1) {
            setCountCartCoffee((state) => {
                return state - 1
            })
            setTotalValueCoffee((state) => {
                return state - valueCoffee;
            })
        }
    }

    function createCoffeeCart() {
        return {
            valueCoffee: totalValueCoffee,
            imgCoffee,
            nameCoffee,
            countCartCoffee,
        }
    }

    function handleAddItemCart() {
        addCoffeeInCart(createCoffeeCart())
    }

    return (
        <>
            <CoffeeValue>
                R$
                <span>{valueCoffee.toFixed(2)}</span>
            </CoffeeValue>
            <CoffeeButton>
                <div>
                    <button onClick={handleDecreaseCart}>
                        <Minus />
                    </button>
                    {countCartCoffee}
                    <button onClick={handleIncreaseCart}>
                        <Plus />
                    </button>
                </div>
                <div>
                    <button onClick={handleAddItemCart}>
                        <ShoppingCart size={20} weight="fill" />
                    </button>
                </div>
            </CoffeeButton>
        </>
    )
}