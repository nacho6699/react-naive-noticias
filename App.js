import * as React from 'react';
import {Appbar } from 'react-native-paper';

import { StyleSheet,Text, View, ScrollView,ImageBackground, Image,Alert } from 'react-native';
import MenuHeader from './components/MenuHeader'
import Principal from './views/principal'
import Card from './components/card'
import ElPotosi from './components/elpotosi'
export default class MyComponent extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <MenuHeader/>
        {/*<Card/> */}
        <ElPotosi/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});