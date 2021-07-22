import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';

const App = () => {

    const { principal, botao } = style

    const gerarNovaFrase = () => {
        let numAleatório = Math.floor(Math.random() * 10)

        const frases = [
            'A persistência é o caminho do êxito.', 
            'O que não provoca minha morte faz com que eu fique mais forte.', 
            'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.', 
            'O que me preocupa não é o grito dos maus. É o silêncio dos bons.', 
            'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.', 
            'No meio da dificuldade encontra-se a oportunidade.', 
            'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.', 
            'É parte da cura o desejo de ser curado.', 
            'O verdadeiro homem mede a sua força quando se defronta com o obstáculo.', 
            'Você precisa fazer aquilo que pensa que não é capaz de fazer.'
        ]

        alert(frases [numAleatório])
    }

    return (
        <View style={principal}>
            <Image source={require('./imgs/logo.png')}/>
            <TouchableOpacity onPress={gerarNovaFrase}>
                <Text style={botao}>Nova Frase</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = {
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    botao: {
        backgroundColor: '#538530',
        paddingHorizontal: 20,
        paddingVertical:10,
        margin: 20,
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    }
}

export default App;