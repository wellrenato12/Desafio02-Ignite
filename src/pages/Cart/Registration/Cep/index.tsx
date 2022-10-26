import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { FormContainer, Inputs } from "./styles";

export function Cep() {
    const { register } = useFormContext()

    return (
        <FormContainer>
            <span>
                <MapPinLine size={24} />
                <p>Endereço de Entrega</p>
            </span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <Inputs>
                <div>
                    <input 
                        type="number" 
                        placeholder="CEP" 
                        required
                        minLength={8}
                        {...register('cep', { valueAsNumber: true })}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Rua" 
                        required 
                        {...register('rua')}
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        placeholder="Número" 
                        required 
                        {...register('numero', { valueAsNumber: true })}
                    />
                    <input 
                        type="text" 
                        placeholder="Complemento" 
                        {...register('complemento')}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Bairro" 
                        required 
                        {...register('bairro')}
                    />
                    <input 
                        type="text" 
                        placeholder="Cidade" 
                        required 
                        {...register('cidade')}
                    />
                    <input 
                        type="text" 
                        placeholder="UF" 
                        required 
                        {...register('uf')}
                    />
                </div>
            </Inputs>
        </FormContainer>
    )
}