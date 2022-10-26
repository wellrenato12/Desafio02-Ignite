import { Bag } from "./Bag";
import { Registration } from "./Registration";
import { CartContainer } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useNavigate } from "react-router-dom";
import * as zod from 'zod'

enum PaymentMethods {
    credit = 'credit',
    debit = 'debit',
    money = 'money',
}

const newClientRegistrationSchema = zod.object({
    cep: zod.number(),
    rua: zod.string(),
    numero: zod.number(),
    complemento: zod.string().optional(),
    bairro: zod.string(),
    cidade: zod.string(),
    uf: zod.string(),
    paymentMethod: zod.nativeEnum(PaymentMethods),
})

type ConfirmOrderFormData = newClientRegistration

export type newClientRegistration = zod.infer<typeof newClientRegistrationSchema>

export function Cart() {
    const { getClientRegister, cleanCart } = useContext(CoffeeContext)
    const newClientRegistration = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(newClientRegistrationSchema),
    })
    const { reset, handleSubmit } = newClientRegistration

    const navigate = useNavigate()

    function handleCreateClientRegistration(data: ConfirmOrderFormData) {
        const newRegistration = {
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            complemento: data.complemento,
            bairro: data.bairro,
            cidade: data.cidade,
            uf: data.uf,
            paymentMethod: data.paymentMethod,
        }
        getClientRegister(newRegistration)
        reset()
        navigate('/completedOrder')
        cleanCart()
    }

    return (
        <FormProvider {...newClientRegistration}>
            <CartContainer>
                <form onSubmit={handleSubmit(handleCreateClientRegistration)}>
                    <Registration />
                    <Bag />
                </form>
            </CartContainer>
        </FormProvider>
    )
}