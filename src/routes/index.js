import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthStack from './AuthStack/AuthStack';
import MainStack from './MainStack/MainStack';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../utils/Colors';

const RootNavigator = () => {
  const {settings} = useSelector(state => state.authReducer);
  const colorMode1 = settings.darkMode ? colors.darkMode : colors.white;
  const colorMode2 = settings.darkMode ? colors.darkMode2 : colors.white;
  const colorMode3 = settings.darkMode ? colors.darkMode2 : colors.grey;
  const textColor = settings.darkMode ? colors.grey2 : colors.black;

  const colorModes = {colorMode1, colorMode2, colorMode3, textColor};

  useEffect(() => {
    console.log(settings);
  }, [settings]);

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"MainStack"} >
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          colorModes={colorModes}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          colorModes={colorModes}
        />
      </Stack.Navigator>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
    </NavigationContainer>
  );
};

export default RootNavigator;
