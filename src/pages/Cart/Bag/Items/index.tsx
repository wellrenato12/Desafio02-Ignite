import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { ItemsContainer, ItemsContent } from "./styles";

interface ItemsProps {
    valueCoffee: number;
    imgCoffee: string;
    nameCoffee: string;
    countCartCoffee: number;
}

export function Items({ valueCoffee, imgCoffee, nameCoffee, countCartCoffee }: ItemsProps) {
    const { 
        deleteCoffeeFromCart, 
        calculateValueCoffee, 
        coffee, 
        increaseCartCoffee, 
        decreaseCartCoffee, 
        updateCartTotalValue,
    } = useContext(CoffeeContext)
    const [countCoffee, setCountCoffee] = useState(countCartCoffee)
    const [valueCoffeeCart, setValueCoffeeCart] = useState(valueCoffee)

    function handleIncreaseCart() {
        if (countCoffee >= 1 && countCoffee < 99) {
            setCountCoffee((state) => {
                return state + 1
            })
            setValueCoffeeCart((state) => {
                return state + (valueCoffee / countCartCoffee);
            })
            increaseCartCoffee(valueCoffee, countCartCoffee)
        }
    }
    
    function handleDecreaseCart() {
        if (countCoffee > 1) {
            setCountCoffee((state) => {
                return state - 1
            })
            setValueCoffeeCart((state) => {
                return state - (valueCoffee / countCartCoffee);
            })
            decreaseCartCoffee(valueCoffee, countCartCoffee)
        }
    }

    function handleDeleteCoffeeFromCart() {
        deleteCoffeeFromCart(nameCoffee)
        updateCartTotalValue(valueCoffeeCart)
    }

    useEffect(() => {
        const sumValuesCoffee = coffee.reduce((acc, { valueCoffee }) => {
            return acc + valueCoffee
        }, 0)
        calculateValueCoffee(sumValuesCoffee)
    }, [])

    return (
        <ItemsContainer>
            <ItemsContent>
                <img src={imgCoffee} alt="" />
                <div>
                    <p>{nameCoffee}</p>
                    <div>
                        <div>
                            <button type="button" onClick={handleDecreaseCart}>
                                <Minus />
                            </button>
                            {countCoffee}
                            <button type="button" onClick={handleIncreaseCart}>
                                <Plus />
                            </button>
                        </div>
                        <div>
                            <button type="button" onClick={handleDeleteCoffeeFromCart}>
                                <Trash />
                                <p>Remover</p>
                            </button>
                        </div>
                    </div>
                </div>
                <span>
                    R$ {valueCoffeeCart.toFixed(2)}
                </span>
            </ItemsContent>
        </ItemsContainer>
    )
}