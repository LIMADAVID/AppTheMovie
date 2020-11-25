import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import React, { useMemo, useState } from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import { 
  Provider as PaperProvider, 
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper
} from 'react-native-paper'
import { 
  NavigationContainer, 
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation
} from '@react-navigation/native'
import Navigation from './src/navigation/Navigation'
import PreferencesContext from './src/context/PreferencesContext'

export default function Main() {
  const [theme, setTheme] = useState('dark')

  DefaultThemePaper.colors.primary = '#1ae1f2'
  DarkThemePaper.colors.primary = '#1ae1f2'
  DarkThemePaper.colors.accent = '#1ae1f2'

  DarkThemeNavigation.colors.background = '#192734'
  DarkThemeNavigation.colors.card = '#15212b'

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const preference = useMemo(
    ( )=> ({
      toggleTheme,
      theme
    }),
    [theme]
  )

  return (
    <PreferencesContext.Provider value={preference}>
      <PaperProvider theme={theme === 'dark' ? DarkThemePaper : DefaultThemePaper}>
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
        <NavigationContainer theme={ theme === 'dark' ? DarkThemeNavigation : DefaultThemeNavigation}>          
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
} 