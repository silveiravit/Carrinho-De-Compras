import React from "react";

import {Container, TextProduto, TextValor, ContainerProdutos, ButtonAdd} from './styles'

import { AntDesign } from '@expo/vector-icons';

export default function Produtos({ data, adicionar }){
    return(
        <Container>
            <ContainerProdutos>
                <TextProduto>
                    {data.name}
                </TextProduto>
                <TextValor>
                    {Number(data.price).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                </TextValor>
            </ContainerProdutos>
            <ButtonAdd onPress={() => adicionar(data)}>
                <AntDesign name="plus" size={30} color="white" />
            </ButtonAdd>
        </Container>
    )
}