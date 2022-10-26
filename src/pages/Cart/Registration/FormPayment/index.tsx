import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentMethodOptions } from "./PaymentMethodOptions";
import { CartFormOfPayment, FormPaymentCard } from "./styles";

export function FormPayment() {
    const { register } = useFormContext()

    return (
        <CartFormOfPayment>
            <span>
                <CurrencyDollar size={24} />
                <p>Pagamento</p>
            </span>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            <FormPaymentCard>
                <PaymentMethodOptions />
            </FormPaymentCard>
        </CartFormOfPayment>
    )
}