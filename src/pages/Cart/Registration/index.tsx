import { Cep } from "./Cep";
import { FormPayment } from "./FormPayment";
import { CartForm } from "./styles";
import { Title } from "./Title";

export function Registration() {
    return (
        <CartForm>
            <Title />
            <Cep />
            <FormPayment />
        </CartForm>
    )
}