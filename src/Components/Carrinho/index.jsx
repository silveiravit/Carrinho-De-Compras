import React from "react";

import {
    Container,
    TextProduto,
    Preco,
    Quantidade,
    Button,
    TextQtd
} from './styles'

import { AntDesign } from '@expo/vector-icons';

export default function Carrinho({data, adicionarProduto, removerProduto}){ 
    return(
        <Container>
            <TextProduto>{data.name}</TextProduto>
            <Preco>{Number(data.price * data.quantidade).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Preco>
            <Quantidade>
                <Button onPress={removerProduto}>
                    <AntDesign name="minus" size={24} color="white" />
                </Button>
                <TextQtd>{data.quantidade}</TextQtd>
                <Button onPress={adicionarProduto}>
                    <AntDesign name="plus" size={24} color="white" />
                </Button>
            </Quantidade>
        </Container>
    )
}