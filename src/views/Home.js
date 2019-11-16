import React, { Component } from 'react';
import { ScrollView,View, Text,Image,StyleSheet, TouchableHighlight,TouchableOpacity,SectionList ,ActivityIndicator} from 'react-native';
import {Card, Divider, ListItem, Button, Icon } from 'react-native-elements';
import cheerio from 'react-native-cheerio';

class Home extends Component{
  render() {
    return (
        <View style={styles.container}>
          <ScrollView  style={{ flex: 1}}>
            <Text>Encuentra todas tus Noticias</Text>
            <TouchableOpacity style={styles.contentImg} onPress={() => this.props.navigation.navigate('elPotosi')}>
                <Image resizeMode="stretch" source={require('../../assets/elpotosi.png')} style={styles.img}/>
            </TouchableOpacity>
          </ScrollView>  
        </View>
    );
  }
}
export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    //borderWidth:2,
    //borderColor:'blue',
  },
  img:{
    height:50,
    width:'80%',
    
  },
  contentImg:{
    alignItems: 'center',
    borderWidth:2,
    borderColor:'#e0e0e0',
    padding:5,
    width:220
  }
})