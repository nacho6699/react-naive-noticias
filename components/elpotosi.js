import React, { Component } from 'react';
import { ScrollView,View, Text,Image,StyleSheet, TouchableHighlight,SectionList } from 'react-native';
import { Card,Divider, ListItem, Button, Icon } from 'react-native-elements';
import cheerio from 'react-native-cheerio';
import { Video } from 'expo-av';
const imgDefault = 'data:image/png;base64,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'

 
//-----------------------el potosi------------------------
async function init(){
    let news = [];
    let newTitulo={};
    
    const response = await fetch(
        "https://elpotosi.net/local"
    );
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    //obteniendo los datos del titular 
    let titular = $('main section .section-news div .col-md-8 div');

    let titulo = $(titular).find('.title-note').first().text();
    let fecha = $(titular).find('.fecha-version .fecha').html().trim();
    let img = $(titular).find('.image-container img').attr('src');
    let img2 = $(titular).find('img').attr('src');
    let video = $(titular).find('.video iframe').attr('src');
    if(titulo != "" && titulo != null && titulo != undefined && titulo != '\n'){
        let url_img=imgDefault;
        if(img == ""||img == undefined){
            url_img = img2;
        }else{
            url_img = img;
        }
        newTitulo = {
            titulo:titulo,
            fecha:fecha,
            img:url_img,
            video:video
        }
        console.log(newTitulo);
    }

    //obteniendo la lista de noticias--------------------------------
    const result = $('.card-note').each((i,elemen) =>{
        let tituloNota = $(elemen).find('h4').text();
        let imgNota = $(elemen).find('.img-container-section-name img').attr('src');
        if(tituloNota != null && tituloNota != undefined && tituloNota != '' && imgNota!= undefined){
            let descripcionNota = $(elemen).find('p').text().trim();
            let fechaNota = $(elemen).find('.fecha-version .fecha').html().trim();
            let link = $(elemen).find('a').attr('href');
            
            let data = {
                tituloNota:tituloNota,
                descripcionNota:descripcionNota,
                fechaNota:fechaNota,
                imgNota:imgNota,
                link:link
            }
            news.push(data);
            //console.log(data);
        }

    })
    return {newTitulo,news};
}

export default class ElPotosi extends React.Component {
constructor(props){
  super(props);
  this.state = {
    titular:{
        titulo: '',
        fecha:'',
        img:imgDefault,
        video:''
    },
    news:[]
  };
} 

componentDidMount(){
    init().then((res,err)=>{
      this.setState({
        titular:{
            titulo:res.newTitulo.titulo,
            fecha:res.newTitulo.fecha,
            img:res.newTitulo.img,
            video:res.newTitulo.video
        },
        news:res.news
      })
    });   
}

_mensaje = () => {
    alert('hola');
    
};
_llave = (dato) => {
    alert('es'+dato);
  
};

  render() {
    return (
    <View style={styles.container}> 
     
        <Image
            style={{height:30}}
            resizeMode="contain"
            source={{uri:imgDefault}}
        />
        <ScrollView >
        <TouchableHighlight onPress={this._mensaje} underlayColor='#f1c40f'>
            <View>
            {/*this.state.titular.video != ''?
                <Video
                source={{uri:'https://www.w3schools.com/html/mov_bbb.mp4'}}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={false}
                useNativeControls={true}
                isLooping
                style={{ width: 300, height: 300 }}
                />:*/}
                <Image
                    style={{height: 150}}
                    resizeMode="stretch"
                    source={{uri:this.state.titular.img}}
                />
                <Text style={styles.titular} >{this.state.titular.titulo}</Text>
            </View>
              
        </TouchableHighlight>
        <Divider style={{ backgroundColor: 'blue' }} />
    
        
        {
            this.state.news.map((u, i) => {
            return (
                <TouchableHighlight key={i} id={i} onPress={() => this._llave(i)} underlayColor='#f1c40f'>
                <Card>
                    <Image
                    style={{height: 120 }}
                    resizeMode="stretch"
                    source={{uri:u.imgNota}}
                    />
                    <Text style={styles.titulo}>{u.tituloNota}</Text>
                    <Text >{u.descripcionNota}</Text> 
                    <Text style={styles.fecha} >{u.fechaNota}</Text>                    
                </Card>
                </TouchableHighlight>
            );
            })
        }
        
    </ScrollView>
    </View> 
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  text: {
      fontSize: 15
  },
  titulo:{
      fontWeight:"bold"
  },
  titular:{
    fontSize: 18,
    fontWeight:'bold',
    paddingLeft:10,
    paddingRight:10
  },
  fecha:{
    fontSize: 14, 
    color:'#9e9e9e',
    textAlign:"right" 
  }
});