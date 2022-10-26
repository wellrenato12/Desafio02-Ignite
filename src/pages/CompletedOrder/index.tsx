import { CompletedOrderContainer, CompletedOrderImage, OrderContent, OrderInformation } from "./styles";
import completedOrder from '../../assets/completed-order.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function CompletedOrder() {
    const { clientRegistration } = useContext(CoffeeContext)

    return (
        <>
            <OrderContent>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </OrderContent>
            <CompletedOrderContainer>
                <OrderInformation>
                    <div>
                        <span>
                            <MapPin weight="fill" />
                        </span>
                        <div>
                            <p>Entrega em <strong>{clientRegistration.map((item) => {
                                return item.rua 
                            })}</strong></p>
                            <p>{clientRegistration.map((item) => {
                                return item.cidade
                            })}
                            {' '}
                            -
                            {' '}
                            {clientRegistration.map((item) => {
                                return item.uf
                            })}
                            </p>
                        </div>
                    </div>
                    <div>
                        <span>
                            <Timer weight="fill" />
                        </span>
                        <div>
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min</strong></p>
                        </div>
                    </div>
                    <div>
                        <span>
                            <CurrencyDollar weight="fill" />
                        </span>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p>
                                <strong>
                                    {clientRegistration.map((item) => {
                                        if(item.paymentMethod === 'credit') {
                                            return 'Cartão de Crédito'
                                        }
                                        else if(item.paymentMethod === 'debit') {
                                            return 'Cartão de Débito'
                                        }
                                        return 'Dinheiro'
                                    })}
                                </strong>
                            </p>
                        </div>
                    </div>
                </OrderInformation>
                <CompletedOrderImage>
                    <img src={completedOrder} alt="Pedido finalizado" />
                </CompletedOrderImage>
            </CompletedOrderContainer>
        </>
    )
}