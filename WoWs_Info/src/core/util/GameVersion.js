import { API, localDataName } from '../../constant/value';
import { StorageManager, ServerManager } from './'; 

// Get current game version from api
class GameVersion {
  static async getCurrVersion() {
    let server = await StorageManager.getItem(localDataName.currServer);
    var format = require('string-format');
    let api = format(API.GameVersion, ServerManager.getDomainFrom(server));
    console.log(api);
    let response = await fetch(api);
    let json = await response.json();
    if (json != null && json.status == 'ok') {
      return json.data.game_version;
    }
  }
}

export {GameVersion};