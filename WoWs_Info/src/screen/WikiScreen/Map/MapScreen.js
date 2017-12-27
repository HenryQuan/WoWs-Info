import React from 'react';
import { View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { WoWsLoading, MapCell } from '../../../component';

class MapScreen extends React.PureComponent {
  state = {
    isReady: false,
    data: [],
  }

  keyExtractor = (item) => {return item.icon}
  componentDidMount() {
    // Prase global.achievementJson and make it readable
    var parsed = [];
    for (key in global.gameMapJson) parsed.push(global.gameMapJson[key]);
    // console.log(parsed);
    this.setState({
      isReady: true,
      data: parsed,
    }, () => Actions.refresh({title: parsed.length}));
  }

  render() {
    if (this.state.isReady) {
      return (
        <View style={{flex: 1}}>
          <FlatList data={this.state.data} keyExtractor={this.keyExtractor} renderItem={({item}) => 
            <MapCell data={item}/>
          } />
        </View>
      )
    } else return <WoWsLoading />;
  }
}

export {MapScreen};