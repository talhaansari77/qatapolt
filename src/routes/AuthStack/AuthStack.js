import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import LoginSignup from '../../screens/Auth/LoginSignup/LoginSignup';

const AuthStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"LoginSignup"}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="LoginSignup" component={LoginSignup} />

  


    </Stack.Navigator>
  );
};

export default AuthStack;
