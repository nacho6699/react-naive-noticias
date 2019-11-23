import React, {Component} from 'react';
import {WebView} from 'react-native';

class LaRazon extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://www.la-razon.com/'}}
        style={{marginTop: 20}}
      />
    );
  }
}
export default LaRazon