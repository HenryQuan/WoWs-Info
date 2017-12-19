import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './SearchHeaderStyles';

class SearchHeader extends React.PureComponent {
  render() {
    const { inputStyle, viewStyle } = styles;
    const { onChangeText } = this.props;
    return (
      <View style={viewStyle}>
        <TextInput style={inputStyle} onChangeText={onChangeText}
          autoCorrect={false} autoFocus autoCapitalize='none' />
      </View>
    )
  }
}

export {SearchHeader};