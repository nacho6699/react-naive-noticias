import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Text } from 'react-native-elements';

class MenuHeader extends React.Component {
  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => alert('Shown more');

  render() {
    return (

      <Appbar.Header>
        {/*<Appbar.BackAction
          onPress={this._goBack}
        />*/}
        <Appbar.Content
          title="Mis Noticias"
          subtitle="Subtitle"
        />
        <Appbar.Action icon="logout" onPress={this._onSearch} />
        <Appbar.Action icon="access-point" onPress={this._onMore} />
      </Appbar.Header>

  
    )
  }
}
export default MenuHeader