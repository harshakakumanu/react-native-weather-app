import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomePage from './Components/Screens/HomePage'
import Weather from './Components/Screens/Weather'
import History from './Components/Screens/History'
import styles from './Components/Styles'

const TabNavigator = createBottomTabNavigator({
  HomePage: { screen: HomePage },
  Weather: { screen: Weather },
  History: { screen: History },
},{
  tabBarOptions: {
    showIcon: false,
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    style: styles.center,
    labelStyle: styles.tabText,
    pressOpacity: 1,
  },
})

export default createAppContainer(TabNavigator)
