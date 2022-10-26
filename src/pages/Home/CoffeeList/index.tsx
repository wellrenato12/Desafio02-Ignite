import { CoffeeItem } from "../CoffeeItem";
import { ListCoffeeContainer, ListCoffeeTitle } from "./styles";

import tradicional from '../../../assets/coffeeimages/tradicional.svg'
import americano from '../../../assets/coffeeimages/americano.svg'
import cremoso from '../../../assets/coffeeimages/cremoso.svg'
import gelado from '../../../assets/coffeeimages/gelado.svg'
import leite from '../../../assets/coffeeimages/leite.svg'
import latte from '../../../assets/coffeeimages/latte.svg'
import capuccino from '../../../assets/coffeeimages/capuccino.svg'
import macchiato from '../../../assets/coffeeimages/macchiato.svg'
import mocaccino from '../../../assets/coffeeimages/mocaccino.svg'
import quente from '../../../assets/coffeeimages/quente.svg'
import cubano from '../../../assets/coffeeimages/cubano.svg'
import havaiano from '../../../assets/coffeeimages/havaiano.svg'
import arabe from '../../../assets/coffeeimages/arabe.svg'
import irlandes from '../../../assets/coffeeimages/irlandes.svg'

const coffeeMenuItems = [
    {
        imgCoffee: tradicional,
        coffeeTypes: [
            {
                id: 1,
                name: 'Tradicional',
            },
        ],
        nameCoffee: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quent e grão moídos',
        valueCoffee: 5.90,
    },
    {
        imgCoffee: americano,
        coffeeTypes: [
            {
                id: 1,
                name: 'Tradicional',
            },
        ],
        nameCoffee: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        valueCoffee: 7.90,
    },
    {
        imgCoffee: cremoso,
        coffeeTypes: [
            {
                id: 1,
                name: 'Tradicional',
            },
        ],
        nameCoffee: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        valueCoffee: 6.90,
    },
    {
        imgCoffee: gelado,
        coffeeTypes: [
            {
                id: 1,
                name: 'Tradicional',
            },
            {
                id: 2,
                name: 'Gelado',
            },
        ],
        nameCoffee: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        valueCoffee: 8.49,
    },
    {
        imgCoffee: leite,
        coffeeTypes: [
            {
                id: 1,
                name: 'Tradicional',
            },
            {
                id: 2,
                name: 'Com Leite',
            },
        ],
        nameCoffee: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        valueCoffee: 9.89,
    },
    {
        imgCoffee: latte,
        coffeeTypes: [
            {
                id: 1,
                name: 'Tradicional',
            },
            {
                id: 2,
                name: 'Com Leite',
            },
        ],
        nameCoffee: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        valueCoffee: 11.00,
    },
    {
        imgCoffee: capuccino,
        coffeeTypes: [
            {
                id: 1,
                name: 'Tradicional',
            },
            {
                id: 2,
                name: 'Com Leite',
            },
        ],
        nameCoffee: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        valueCoffee: 9.49,
    },
    {
        imgCoffee: macchiato,
        coffeeTypes: [
            {
                id: 1,
                name: 'Tradicional',
            },
            {
                id: 2,
                name: 'Com Leite',
            },
        ],
        nameCoffee: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        valueCoffee: 14.00,
    },
    {
        imgCoffee: mocaccino,
        coffeeTypes: [
            {
                id: 1,
                name: 'Tradicional',
            },
            {
                id: 2,
                name: 'Com Leite',
            },
        ],
        nameCoffee: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        valueCoffee: 14.00,
    },
    {
        imgCoffee: quente,
        coffeeTypes: [
            {
                id: 1,
                name: 'Especial',
            },
            {
                id: 2,
                name: 'Com Leite',
            },
        ],
        nameCoffee: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        valueCoffee: 7.00,
    },
    {
        imgCoffee: cubano,
        coffeeTypes: [
            {
                id: 1,
                name: 'Especial',
            },
            {
                id: 2,
                name: 'Alcoólico',
            },
            {
                id: 3,
                name: 'Gelado',
            },
        ],
        nameCoffee: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        valueCoffee: 11.00,
    },
    {
        imgCoffee: havaiano,
        coffeeTypes: [
            {
                id: 1,
                name: 'Especial',
            },
        ],
        nameCoffee: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        valueCoffee: 14.00,
    },
    {
        imgCoffee: arabe,
        coffeeTypes: [
            {
                id: 1,
                name: 'Especial',
            },
        ],
        nameCoffee: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        valueCoffee: 14.00,
    },
    {
        imgCoffee: irlandes,
        coffeeTypes: [
            {
                id: 1,
                name: 'Alcoólico',
            },
            {
                id: 2,
                name: 'Especial',
            },
        ],
        nameCoffee: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açucar e chantilly',
        valueCoffee: 14.00,
    },
]

export function CoffeeList() {
    return (
        <ListCoffeeTitle>
            <h1>Nossos Cafés</h1>
            <ListCoffeeContainer>
                {coffeeMenuItems.map((item) => {
                    return <CoffeeItem 
                        key={item.nameCoffee} 
                        coffeeTypes={item.coffeeTypes} 
                        nameCoffee={item.nameCoffee} 
                        description={item.description} 
                        imgCoffee={item.imgCoffee}
                        valueCoffee={item.valueCoffee}
                    />
                })}
            </ListCoffeeContainer>
        </ListCoffeeTitle>
    )
}