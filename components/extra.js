import React from 'react';
import Principal from './views/principal'
import { StyleSheet,Text, View, ScrollView,ImageBackground, Image,Alert } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { Grid } from 'native-base';
import Menu from './components/menu'
class Noticias extends React.Component{
  bienvenido =()=>{
    Alert.alert('hola nacho');
  }
  render(){
    return(
      <ImageBackground source={require('./assets/fondo.jpg')} style={styles.container}>
        <View style={styles.header}>
        <Menu/>
          <View style={styles.headerImg}>
            <Image source={require('./assets/fondo3.jpg')} style={{height:70, width:70, borderRadius:35}} />
          </View>
          <View style={styles.headerButton}>
            <Button
              title="Learn More"
              color="#841584"
              onPress={this.bienvenido}
            />
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.texto}>Bienvenido a mi primera App</Text>
        </View>
        <View style={styles.footer}>
          <Text>Texto1</Text>
          <Text>Texto2</Text>
          <Text>Texto3</Text>
        </View>
      </ImageBackground>
      

    )
  }
}
export default Noticias;

const styles = StyleSheet.create({
  container:{
    flex:8,
    flexDirection:'column'
  },
  header:{
   /* backgroundColor:'red',*/
    flex:1,
    flexDirection:'row',
    alignContent:'space-around'
  },
  body:{
    /*backgroundColor:'blue',*/
    flex:5,
    alignItems:'center',
    justifyContent:'center'
  },
  footer:{
    /*backgroundColor:'cyan',*/
    flex:2,
    flexDirection:'row'
  },
  headerImg:{
    /*backgroundColor:'orange',*/
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  headerButton:{
    /*backgroundColor:'yellow',*/
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  texto:{
    color:'white'
  }
})

