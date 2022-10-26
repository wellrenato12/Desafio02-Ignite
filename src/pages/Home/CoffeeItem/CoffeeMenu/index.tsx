import { CoffeeMenuType } from '..'
import { CoffeeImage, CoffeeMenuContainer } from './styles'

export function CoffeeMenu({ coffeeTypes, description, nameCoffee, imgCoffee }: CoffeeMenuType) {
    return (
        <CoffeeMenuContainer>
            <CoffeeImage src={imgCoffee} />
            <div>
                {coffeeTypes.map((coffee) => {
                    return <p key={coffee.id}>{coffee.name}</p>
                })}
            </div>
            {<span>{nameCoffee}</span>}
            {<p>{description}</p>}
        </CoffeeMenuContainer>
    )
}