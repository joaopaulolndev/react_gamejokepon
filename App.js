import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {escolhaUsuario: '', escolhaComputador: '', resultado : ''}
  }

  jokenpo(escolhaUsuario) {
    //gera numero aleatorio (0, 1, 2)
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você Ganhou';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Perdeu';
      } 
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você Perdeu';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Ganhou';
      } 
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Você Ganhou';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você Perdeu';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      } 
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (

      <View style={styles.container}>

        <Topo />
        <View style={styles.painelAcoes}>

          <View style={styles.btnEscolha}> 
            {/* <Button title="Pedra" onPress={ () => {this.jokenpo('pedra')} } /> */}
            <TouchableOpacity 
              onPress={() => {this.jokenpo('pedra');}}
              style={styles.botao} >
              <Text style={styles.textoBotao}>Pedra</Text>
            </TouchableOpacity>  
          </View>
          <View style={styles.btnEscolha}>
            {/* <Button title="Papel" onPress={ () => {this.jokenpo('papel')} }/> */}
            <TouchableOpacity 
              onPress={() => {this.jokenpo('papel');}}
              style={styles.botao} >
              <Text style={styles.textoBotao}>Papel</Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.btnEscolha}>
            {/* <Button title="Tesoura" onPress={ () => {this.jokenpo('tesoura')} }/> */}
            <TouchableOpacity 
              onPress={() => {this.jokenpo('tesoura');}}
              style={styles.botao} >
              <Text style={styles.textoBotao}>Tesoura</Text>
            </TouchableOpacity> 
          </View>

        </View>

        <View style={styles.palco}>

          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
          
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    paddingTop: 20,
    //justifyContent: 'center',
  },
  btnEscolha: {
    width: 90,
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  botao: {
    backgroundColor: '#00BFFF',
     paddingVertical: 10,
     paddingHorizontal: 10,
     width: 95,
     alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
