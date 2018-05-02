import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View } from 'react-native-animatable';
import { DrawerCell } from '../../component';
import { navStyle } from '../../constant/colour';
import language from '../../constant/language';
import { iconsMap } from '../../constant/icon';

export default class Wiki extends Component {
  render() {
    const { achievement, commander, consumable, collection, warship, map } = data;
    return (
      <ScrollView>
        <View animation='fadeInRight' style={{padding: android ? 0 : 8}}>
          <DrawerCell icon={require('../../img/Achievement.png')} title={language.wiki_achievement + ' (' + Object.keys(achievement).length + ')'} onPress={() => this.pushToBasic(language.wiki_achievement, {info: achievement})}/>
          <DrawerCell icon={require('../../img/Warship.png')} title={language.wiki_warship + ' (' + Object.keys(warship).length + ')'} onPress={() => this.pushToWarship()}/>
          <DrawerCell icon={require('../../img/Upgrade.png')} title={language.wiki_upgrade} onPress={() => this.pushToBasic(language.wiki_upgrade, {info: consumable, upgrade: true})}/>
          <DrawerCell icon={require('../../img/Camouflage.png')} title={language.wiki_flag_camouflage} onPress={() => this.pushToBasic(language.wiki_flag_camouflage, {info: consumable})}/>
          <DrawerCell icon={require('../../img/Commander.png')} title={language.wiki_commander} onPress={() => this.pushToBasic(language.wiki_commander, {info: commander})}/>
          <DrawerCell icon={require('../../img/Map.png')} title={language.wiki_map + ' (' + Object.keys(map).length + ')'} onPress={() => this.pushToMap()}/>
          <DrawerCell icon={require('../../img/Collection.png')} title={language.wiki_collection} onPress={() => this.pushToBasic(language.wiki_collection, {info: collection})}/>
        </View>
      </ScrollView>
    )
  }
  
  /**
   * Push to basic screen
   * @param {string} title 
   * @param {*} info 
   */
  pushToBasic(title, info) {
    // Close drawer for android
    if (android) this.props.drawer();
    this.props.navigator.push({
      screen: 'wiki.basic',
      title: title,
      passProps: info,
      navigatorStyle: navStyle()
    })
  }

  /**
   * Push to map screen
   */
  pushToMap = () => {
    // Close drawer for android
    if (android) this.props.drawer();
    this.props.navigator.push({
      screen: 'wiki.map',
      title: language.wiki_map,
      navigatorStyle: navStyle()
    })
  }

  /**
   * Push to warship screen
   */
  pushToWarship() {
    // Close drawer for android
    if (android) this.props.drawer();
    this.props.navigator.push({
      screen: 'wiki.ship',
      title: language.wiki_warship,
      navigatorButtons: {
        rightButtons: [ 
          {id: 'reset', icon: iconsMap['undo']},
          {id: 'filter', icon: iconsMap['filter']}
        ]
      },
      navigatorStyle: navStyle()
    })
  }
}

