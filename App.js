import * as React from 'react';
import { StyleSheet,Text, View, ScrollView,ImageBackground, Image} from 'react-native';
import { Card,Divider, ListItem, Button, Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import MenuHeader from './components/MenuHeader'
import ElPotosi from './src/views/elpotosi'
import LaRazon from './src/views/laRazon'
import Home from './src/views/Home'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  MyHome: {
    screen: Home,
    navigationOptions:{
      title:'Diarios Bolivia',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerRight: () => (
        <Button
          onPress={() => alert('Esta app esta en desarrollo por: Jose Ignacio Cruz')}
          title="Info"
          color='#000'
          type='clear'
        />
      ),
     
    }
  },
  elPotosi:{
    screen:ElPotosi,
    navigationOptions:{
      title:'EL Potosí'
    }
  },
  laRazon:{
    screen:LaRazon,
    navigationOptions:{
      title:'La Razón'
    }
  }
},{headerLayoutPreset:'center'});

export default createAppContainer(AppNavigator);
/*
export default class MyComponent extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <MenuHeader/>
        {/*<Card/> }
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
*/