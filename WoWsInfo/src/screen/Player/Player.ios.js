import React from 'react';
import { TabBarIOS, View } from 'react-native';
import { AchievementScreen, Basic, Graph, Rank, Ship } from './';

class PlayerTab extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'User'};
  }

  setTab(ID) {
    this.setState({selectedTab: ID});
  }

  render() {
    return (
      <TabBarIOS itemPositioning='center' tintColor={global.themeColour} translucent>
        <TabBarIOS.Item icon={require('../../img/AchievementTab.png')} title={strings.achievement_tab}
          selected={this.state.selectedTab === 'Acievement'}
          onPress={() => this.setTab('Acievement')}>
          <AchievementScreen {...this.props}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={require('../../img/Graph.png')} title={strings.graph_tab}
          selected={this.state.selectedTab === 'Graph'}
          onPress={() => this.setTab('Graph')}>
          <Graph />
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={require('../../img/User.png')} title={strings.basic_tab}
          selected={this.state.selectedTab === 'User'}
          onPress={() => this.setTab('User')}>
          <Basic {...this.props}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={require('../../img/Ship.png')} title={strings.warship_tab}
          selected={this.state.selectedTab === 'Ship'}
          onPress={() => this.setTab('Ship')}>
          <Ship {...this.props}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item icon={require('../../img/Rank.png')} title={strings.rank_tab}
          selected={this.state.selectedTab === 'Rank'}
          onPress={() => this.setTab('Rank')}>
          <Rank {...this.props}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

export {PlayerTab};