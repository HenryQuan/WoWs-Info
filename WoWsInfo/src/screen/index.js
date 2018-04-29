import { Navigation } from 'react-native-navigation';

import News from './News/News';
import More from './News/More';
import Browser from './News/Browser';

import Search from './Search';
import Drawer from './Drawer';
import WoWsInfo from './WoWsInfo';

// Wiki
import Wiki from './Wiki/Wiki';
import Achievement from './Wiki/Achievement';
import BasicWiki from './Wiki/BasicWiki';
import BasicDetail from './Wiki/BasicDetail';
import MapDetail from './Wiki/MapDetail';
import GameMap from './Wiki/GameMap';
import Ship from './Wiki/Ship';
import ShipFilter from './Wiki/ShipFilter';

// Settings
import Settings from './Settings/Settings';
import Theme from './Settings/Theme';

export function registerScreens() {
  Navigation.registerComponent('app.wowsinfo', () => WoWsInfo);    
  Navigation.registerComponent('app.drawer', () => Drawer);  
  Navigation.registerComponent('info.news', () => News);
  Navigation.registerComponent('info.browser', () => Browser);
  Navigation.registerComponent('news.more', () => More);
  Navigation.registerComponent('info.search', () => Search);
  Navigation.registerComponent('info.wiki', () => Wiki);
  Navigation.registerComponent('wiki.basic', () => BasicWiki);
  Navigation.registerComponent('wiki.map', () => GameMap);
  Navigation.registerComponent('map.detail', () => MapDetail);
  Navigation.registerComponent('wiki.ship', () => Ship);  
  Navigation.registerComponent('ship.filter', () => ShipFilter);  
  Navigation.registerComponent('wiki.achievement', () => Achievement);
  Navigation.registerComponent('basic.detail', () => BasicDetail);
  Navigation.registerComponent('info.settings', () => Settings);
  Navigation.registerComponent('settings.theme', () => Theme);
}