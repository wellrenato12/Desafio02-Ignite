import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imgCoffeeDelivery from '../../../assets/coffee-delivery.svg'
import { CoffeeFeature } from './CoffeeFeature/CoffeeFeature'
import { CoffeeContent, CoffeeDeliveryContainer, CoffeeImage } from './styles'

const coffeeFeatures = [
    {
        description: 'Compra simples e segura',
        icon: () => <ShoppingCart weight="fill" />,
        color: "#C47F17",
    },
    {
        description: 'Embalagem mantém o café intacto',
        icon:() => <Package weight="fill" />,
        color: "#574F4D",
    },
    {
        description: 'Entrega rápida e rastreada',
        icon:() => <Timer weight="fill" />,
        color: "#DBAC2C",
    },
    {
        description: 'O café chega fresquinho até você',
        icon:() => <Coffee weight="fill" />,
        color: "#8047F8",
    }
]

export function CoffeeDelivery() {
    return (
        <CoffeeDeliveryContainer>
            <CoffeeContent>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <div>
                    {coffeeFeatures.map(item => (
                        <CoffeeFeature key={item.description}  
                        color={item.color} 
                        description={item.description} 
                        icon={item.icon} />
                    ))}
                </div>
            </CoffeeContent>

            <CoffeeImage>
                <img src={imgCoffeeDelivery} />
            </CoffeeImage>
        </CoffeeDeliveryContainer>
    )
}