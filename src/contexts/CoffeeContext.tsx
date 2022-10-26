import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { newClientRegistration } from "../pages/Cart";


interface CoffeeProviderProps {
    children: ReactNode;
}

export interface CoffeeProps {
    imgCoffee: string;
    nameCoffee: string;
    valueCoffee: number;
    countCartCoffee: number;
}

interface CoffeeContextProviderProps {
    clientRegistration: newClientRegistration[];
    amountToPlay: number;
    deliveryFee: number;
    totalValueCoffees: number;
    itemsCart: number;
    coffee: Array<CoffeeProps>;
    addCoffeeInCart: (coffeeElement: CoffeeProps) => void;
    deleteCoffeeFromCart: (coffeeToDelete: string) => void;
    calculateValueCoffee: (valueCoffee: number) => void;
    increaseCartCoffee: (valueCoffee: number, quantityCoffee: number) => void;
    decreaseCartCoffee: (valueCoffee: number, quantityCoffee: number) => void;
    updateCartTotalValue: (valueCoffee: number) => void;
    getClientRegister: (newRegistration: newClientRegistration) => void;
    cleanCart: () => void;
}

export const CoffeeContext = createContext({} as CoffeeContextProviderProps)

export function CoffeeContextProvider({ children }: CoffeeProviderProps) {
    const [coffee, setCoffee] = useState<CoffeeProps[]>([])
    const [itemsCart, setItemsCart] = useState(0)
    const [totalValueCoffees, setTotalValueCoffees] = useState(0)
    const [deliveryFee, setDeliveryFee] = useState(0)
    const [amountToPlay, setAmountToPlay] = useState(totalValueCoffees)
    const [clientRegistration, setClientRegistration] = useState<newClientRegistration[]>([])

    function getClientRegister(newRegistration: newClientRegistration) {
        setClientRegistration((state) => {
            return [...state, newRegistration]
        })
    }

    function addCoffeeInCart(coffeeElement: CoffeeProps) {
        const coffeeNameDuplicate = coffee.find((item) => item.nameCoffee === coffeeElement.nameCoffee)
        if (coffee.length < 3) {
            if (!coffeeNameDuplicate) {
                toast("Item adicionado ao carrinho !", { theme: 'dark', autoClose: 2000 });
                setCoffee((state) => [...state, coffeeElement])
            }
            else {
                toast("Este item já foi adicionado!", { theme: 'dark', autoClose: 2000 });
            }
        }
        else {
            toast("Carrinho Cheio!", { theme: 'dark', autoClose: 2000 });
        }
    }

    function deleteCoffeeFromCart(coffeeToDelete: string) {
        const newListCoffee = coffee.filter((coffee) => {
            return coffee.nameCoffee !== coffeeToDelete
        })
        setCoffee(newListCoffee)
    }

    function calculateValueCoffee(valueCoffee: number) {
        setTotalValueCoffees((state) => {
            return valueCoffee
        })
    }

    function updateCartTotalValue(valueCoffee: number) {
        setTotalValueCoffees((state) => {
            return state -= valueCoffee
        })  
    }

    function increaseCartCoffee(valueCoffee: number, quantityCoffee: number) {
        setTotalValueCoffees((state) => {
            return state += (valueCoffee / quantityCoffee)
        })
    }

    function decreaseCartCoffee(valueCoffee: number, quantityCoffee: number) {
        setTotalValueCoffees((state) => {
            return state -= (valueCoffee / quantityCoffee)
        })
    }

    function cleanCart() {
        setItemsCart(0)
    }

    useEffect(() => {
        setItemsCart((state) => {
            return coffee.length
        })
        setDeliveryFee((state) => {
            if(coffee.length > 0) {
                return state = coffee.length * 1.5
            }
            else {
                return 0
            }
        })
        setAmountToPlay((state) => {
            return totalValueCoffees + deliveryFee
        })
    }, [coffee, totalValueCoffees, deliveryFee])

    return (
        <CoffeeContext.Provider
            value={{
                clientRegistration,
                amountToPlay,
                deliveryFee,
                totalValueCoffees,
                itemsCart,
                coffee,
                addCoffeeInCart,
                deleteCoffeeFromCart,
                calculateValueCoffee,
                increaseCartCoffee,
                decreaseCartCoffee,
                updateCartTotalValue,
                getClientRegister,
                cleanCart,
            }}
        >
            {children}
        </CoffeeContext.Provider>
    )
}