import { styled } from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    padding: 10px;
    margin: 30px 0;
`
export const Titulo = styled.Text`
    font-size: 25px;
    font-weight: bold;
`
export const ContainerTitulo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 60px;
`
export const ButtonCarrinho = styled.TouchableOpacity`
    height: 30px;
`
export const QtdCarrinho = styled.Text`
    background-color: red;
    font-size: 15px;
    color: white;
    border-radius: 50px;
    padding: 5px;
    text-align: center;
`