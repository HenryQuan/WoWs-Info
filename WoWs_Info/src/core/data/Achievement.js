import { DataAPI, savedDataName } from '../../constant/value';
import { Language } from '../util/';
import store from 'react-native-simple-store';

class Achievement {
  // Save ship nations, api languages, ship types and ship modules
  static async saveAchievement() {
    var format = require('string-format');
    let api = format(DataAPI.Achievement, global.serverName) + Language.getApiLangStr();
    console.log('AchievementData\n' + api);
    try {
      let response = await fetch(api);
      let json = await response.json();
      if (json != null && json.status == 'ok') {
        let data = json.data.battle;
        console.log(data);
        global.achievementJson = data;
        await store.update(savedDataName.achievement, data);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export {Achievement};