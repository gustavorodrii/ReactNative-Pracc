import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Mega from './components/mega/Mega'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutos from './components/produtos/listaProdutos'
// import ListaProdutosV2 from './components/produtos/listaProdutosV2'
// import UsuarioLogado from './components/UsuarioLogado'
// import ParImpar from './components/ParImpar'
// import Primeiro from './components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/indireta/Pai'
// import ContadorV2 from './contador/ContadorV2'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'




export default () =>(
    <SafeAreaView style ={style.App}>
        <Mega qtdeNumeros={6}/>
        {/* <FlexboxV3/> */
        /* <DigiteSeuNome/> */
        /* <ListaProdutosV2/> */
        /* <UsuarioLogado usuario={{nome: 'Gui', email:'gui@gui.com'}}/> */
        /* <Familia>
            <Membro nome="Bia" sobrenome="Arruda"/>
            <Membro nome="Carlos" sobrenome="Arruda"/>
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva"/>
            <Membro nome="Julia" sobrenome="Silva"/>
        </Familia> */
        /* <ParImpar num={2}/> */
        /* <ContadorV2/> */
        /* <Pai /> */
        /* <Pai /> */
        /* <Contador inicial={100} passo={10}/>
        <Contador /> */
        /* <Botao /> */
        /* <Aleatorio min={10} max={60}/> */
        /* <Titulo principal="Cadastro de Produto"
            secundario="Tela de Cadastro do Produto"/> */
        /* <MinMax/> */
        /* <CompPadrao />
        <Comp1/>
        <Comp2/>        
        <Primeiro/> */}
    </SafeAreaView>
)


const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
