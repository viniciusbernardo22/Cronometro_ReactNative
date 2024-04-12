import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempo: 0,
      botao: 'Iniciar',
      ultimo: 0,
    };

    this.timer = null;
    this.Iniciar = this.Iniciar.bind(this);
    this.Limpar = this.Limpar.bind(this);
  }

  Iniciar = () => {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        botao: 'Iniciar',
      });
    } else {
      this.timer = setInterval(() => {
        this.setState({ tempo: this.state.tempo + 0.1 });
      }, 100);
      this.setState({
        botao: 'Parar',
      });
    }
  };

  Limpar = () => {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        ultimo: this.state.tempo,
        tempo: 0,
        botao: 'Iniciar',
      });
    } else {
      this.setState({
        ultimo: this.state.tempo,
        tempo: 0,
        botao: 'Iniciar',
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.tempo.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.Iniciar}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.Limpar}
            disabled={this.state.tempo == 0}
          >
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ultimo}>
          <Text style={styles.ultimoTxt}>
            {this.state.ultimo > 0
              ? 'Ultimo tempo ' + this.state.ultimo.toFixed(1) + 's'
              : ''}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6420AA',
  },
  cronometro: {},
  timer: {
    marginTop: -160,
    fontSize: 65,
    color: 'white',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 100,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 20,
    borderRadius: 8,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6420AA',
  },
  ultimo: {
    marginTop: 50,
  },
  ultimoTxt: {
    fontSize: 25,
    color: 'white',
    fontStyle: 'italic',
  },
});

export default App;
