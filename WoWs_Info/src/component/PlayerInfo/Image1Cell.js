import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class Image1Cell extends React.PureComponent {
  render() {
    const { image, text } = this.props;
    return (
      <View style={viewStyle}>
        <Image source={image} style={imageStyle} resizeMode='contain'/>
        <Text style={textStyle}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 42,
    width: 42,
  },
  textStyle: {
    paddingTop: 4,
    fontSize: 16,
    textAlign: 'center',
  },
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
const { imageStyle, textStyle, viewStyle } = styles;

export {Image1Cell};