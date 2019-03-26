/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import PayPal from 'react-native-paypal-wrapper';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  handlePress(){    
    // 3 env available: NO_NETWORK, SANDBOX, PRODUCTION
    PayPal.initialize(PayPal.SANDBOX, "ATtQcR8zZajLkHEEc_8IbFtrKUACdo7ma9x9OowD02A5TZ2vZa3wI0Z8_c8TdkZZOFAWDZD2ZNjr13fx");
    PayPal.pay({
      price: '69.99',
      currency: 'BRL',
      description: 'Item Modulo Teste',
    }).then(confirm => console.log(confirm))
    .catch(error => console.log(error));
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="Botão de Pagamentos"
                onPress={this.handlePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
