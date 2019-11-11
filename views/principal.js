import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Card from '../components/card'
import { View } from 'react-native';
export default class HeaderIconExample extends Component {
  render() {
    var lista = [];
    var nombres=['juan','maria','ariel','luis','otro']
    for(let i = 0; i < 5 ; i++){
        lista.push(<Card nombre={nombres[i]} />);
    }
    return (
      <View>
        
        {lista}
      </View>
    );
  }
}