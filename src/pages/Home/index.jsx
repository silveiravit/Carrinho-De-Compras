import React,{useState, useContext} from "react";

import { useNavigation } from '@react-navigation/native'

import { FlatList } from 'react-native'

import Produtos from '../../Components/Produtos'

import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import {
    Container,
    Titulo,
    ContainerTitulo,
    ButtonCarrinho,
    QtdCarrinho
} from './styles'

import { AuthContext } from "../../Context/context";

export default function Home(){
    const { handleAdd, produto } = useContext(AuthContext)
    const navigation = useNavigation()
    const produtos = [
        {
            id: 1,
            name: 'Coca Cola',
            price: 9.90
        },
        {
            id: 2,
            name: 'Chocolate',
            price: 3.50
        },
        {
            id: 3,
            name: 'Queijo 500g',
            price: 29.70
        },
        {
            id: 4,
            name: 'Batata Frita',
            price: 23.50
        },
        {
            id: 5,
            name: 'Guaraná lata',
            price: 1.50
        },
    ]
    return(
        <Container>
            <ContainerTitulo>
                <Titulo>Lista de produtos</Titulo>
                <ButtonCarrinho onPress={() => navigation.navigate('Carrinho')}>
                    <Feather name="shopping-cart" size={30} color="black" />
                    { produto.length !== 0 ?
                    (
                        <QtdCarrinho>{produto.length}</QtdCarrinho>
                    ):null
                    }
                </ButtonCarrinho>
            </ContainerTitulo>
            <FlatList 
                data={produtos}
                renderItem={({item}) => (
                    <Produtos data={item} adicionar={handleAdd}/>
                )}
            />
        </Container>
    )
}