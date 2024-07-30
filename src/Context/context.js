import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [produto, setProduto] = useState([])
    const [amount, setAmount] = useState(0)
    function handleAdd(produtoAdd){
        const indexItem = produto.findIndex(item => item.id === produtoAdd.id)
        if(indexItem !== -1){
            let produtoList = produto
            produtoList[indexItem].quantidade = produtoList[indexItem].quantidade + 1
            produtoList[indexItem].total = produtoList[indexItem].quantidade * produtoList[indexItem].price
            setProduto(produtoList)
            return 
        }
        let data = {
            ...produtoAdd,
            quantidade: 1,
            total: produtoAdd.price
        }
        setProduto(oldProduto => [...oldProduto, data])
    }
    function adicionarProduto(value){
        const indexProduto = produto.findIndex(item => item.id === value.id)
        let q = produto[indexProduto].quantidade += 1
        produto[indexProduto].total = produto[indexProduto].quantidade * produto[indexProduto].price
        setAmount(q)
     }
     function removerProduto(value){
        const indexProduto = produto.findIndex(item => item.id === value.id)
        const deleteProduto = produto[indexProduto].quantidade -= 1 
        produto[indexProduto].total = produto[indexProduto].quantidade * produto[indexProduto].price
        setAmount(deleteProduto)
        if(deleteProduto == 0){
            const produtoFilter = produto.filter(item => item.quantidade !== deleteProduto)
            setProduto(produtoFilter)
        }
    }
    return(
        <AuthContext.Provider value={{ produto, handleAdd, adicionarProduto, removerProduto, amount }}>
            {children}
        </AuthContext.Provider>
    )
}