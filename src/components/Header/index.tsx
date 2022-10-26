import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoIgnite from '../../assets/logo-ignite.svg'
import { ItemsCart } from '../ItemsCart'
import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <NavLink to="/" title="Carrinho">
                    <img src={logoIgnite} />
                </NavLink>
                <ItemsCart />
                <div>
                    <button>
                        <MapPin size={24} weight="fill" />
                        São Paulo, SP
                    </button>
                    
                    <NavLink to="/cart" title="Carrinho">
                        <button>
                            <ShoppingCart size={24} weight="fill" />
                        </button>
                    </NavLink>
                </div>
            </div>
        </HeaderContainer>
    )
}