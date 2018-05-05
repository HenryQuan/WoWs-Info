import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image1Cell } from './Image1Cell';

class Info3Cell extends Component {
  render() {
    const { info } = this.props;
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Image1Cell image={require('../../../img/Battle.png')} text={info.battle}/>
        <Image1Cell image={require('../../../img/WinRate.png')} text={info.winrate + '%'} highlight={{height: 56, width: 56}}/>
        <Image1Cell image={require('../../../img/Damage.png')} text={info.damage}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export { Info3Cell };