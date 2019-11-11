import React, { Component } from 'react';
import { ScrollView,View, Text,Image,StyleSheet } from 'react-native';
//const cheerio = require('react-native-cheerio');
import cheerio from 'react-native-cheerio'
//import request from 'request-promise-native'

const users = [
  {
     name: 'brynn',
     avatar: '../assets/fondo3.jpg'
  },
  {
    name: 'nacho',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
  name: 'juan',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
}
 ]
 
 import { Card, ListItem, Button, Icon } from 'react-native-elements'
const $='';
 async function getMoviesFromApi() {
  try {

    const response = await fetch(
      "http://books.toscrape.com/"
      );
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);//cargando recien a cheerio
    const titulo = $('title').html();//extraendo el titulo
    console.log(titulo);
    return titulo;
  } catch (error) {
    console.error(error);
  }
}

export default class Card1 extends Component {
constructor(props){
  super(props);
  this.state = {
    titulo: '',
  };
} 
/*
  componentDidMount = () => this.loadPage();

  loadPage = () =>{
    this.setState(async () => {
      const titulo = await getMoviesFromApi();
      console.log('recibido '+titulo);
      return titulo;
    });
    
  }*/
  
  componentDidMount(){
    getMoviesFromApi().then((res,err)=>{
      this.setState({
        titulo:res,
      })
      //console.log(this.$('title').html());
    });
    //const dat=await this.getMoviesFromApi();     
  }

  render() {
    return (
      <Card title="CARD WITH DIVIDER">
        <ScrollView>
      {
        users.map((u, i) => {
          return (
            <View key={i} >
              <Image
                style={{height: 90 }}
                resizeMode="cover"
                source={{uri:'https://todoimagenesde.com/wp-content/uploads/2019/03/Bonitas10.jpg'}}
              />
              <Text >{u.name}</Text>
            </View>
          );
        })
      }
      </ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>jojojoo</Text>
        <Text style={styles.text} >{this.state.titulo}</Text>
      </View>
      <Button title='boton' onPress={this.listar}/>
    </Card>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  text: {
      fontSize: 15
  }
});