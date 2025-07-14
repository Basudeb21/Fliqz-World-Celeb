import React, { useEffect } from 'react'
import Routes from './src/navigation/Routes'
import { Platform, StatusBar } from 'react-native'
import { Colors } from './src/constants'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import NavigationBar from 'react-native-system-navigation-bar';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setNavigationColor(Colors.THEME, 'light');
    }
  }, []);
  return (
    <>
      <StatusBar backgroundColor={Colors.THEME} barStyle="light-content" />
      <Routes />
    </>
  )
}

export default App