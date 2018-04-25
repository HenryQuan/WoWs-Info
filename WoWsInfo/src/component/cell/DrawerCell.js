import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { WoWsTouchable } from '../../component';
import { scale } from 'react-native-size-matters';
import { GREY } from 'react-native-material-color';

class DrawerCell extends Component {
  render() {
    const { icon, title, onPress } = this.props; 
    const { viewStyle, imageStyle, textStyle } = styles
    return (
      <WoWsTouchable onPress={onPress}>
        <View style={viewStyle}>
          <Image source={icon} style={imageStyle}/>
          <Text style={textStyle}>{title}</Text>
        </View>
      </WoWsTouchable>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    height: 54, paddingLeft: 8,
    alignItems: 'center'
  },
  imageStyle: {
    width: 48, height: 48
  },
  textStyle: {
    fontWeight: '300', fontSize: 16,
    color: GREY[900],
    padding: 8, width: '100%'
  }
})

export { DrawerCell };