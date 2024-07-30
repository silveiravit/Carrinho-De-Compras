import React, {useState, useContext, useEffect} from "react";

import Carrinho from "../../Components/Carrinho";

import { FlatList } from "react-native";

import {
    Container,
    Texto,
    ContainerTitulo,
    ContainerTotal,
    Total
} from './styles'

import { AuthContext } from "../../Context/context";

export default function MeuCarrinho(){
    const { produto, adicionarProduto, removerProduto } = useContext(AuthContext)
    const [total, setTotal] = useState(0) 
    useEffect(() => {
        function totalGeral(){
            let tot = []
                produto.forEach(item => {
                    tot.push(item.total)
                })
                let t = tot.reduce((a, b) => a + b, 0)
            setTotal(t)
        }
        totalGeral()
    }, [adicionarProduto, removerProduto])
    return(
        <Container>
            { produto.length !== 0 ? (
                <FlatList 
                    data={produto}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Carrinho 
                            data={item}
                            adicionarProduto={() => adicionarProduto(item)}
                            removerProduto={() => removerProduto(item)}
                        />
                    )}
                />
            ):(
                <ContainerTitulo>
                    <Texto>Não há produtos no carrinho...</Texto>
                </ContainerTitulo>
            )
            }  
            <ContainerTotal>
                <Total>
                    Total: {Number(total).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Total>  
            </ContainerTotal>
        </Container>
    )
}