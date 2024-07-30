import { styled } from 'styled-components/native'

export const Container = styled.View`
    border-width: 1px;
    padding: 10px;
    border-color: #999;
    border-radius: 5px;
    margin: 10px 0;
`
export const TextProduto = styled.Text`
    font-size: 22px;
    font-weight: bold;
`
export const Preco = styled.Text`
    font-size: 18px;
`
export const Quantidade = styled.View`
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
`
export const Button = styled.TouchableOpacity`
    background-color: #140a66;
    padding: 10px;
    border-radius: 5px;
`
export const TextQtd = styled.Text`
    margin: 0 20px;
    font-size: 20px;
`