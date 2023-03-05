import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors} from '../../utils/Colors';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ArenaScreen from '../../screens/Main/ArenaScreen/ArenaScreen';
import HomeStack from '../HomeStack/HomeStack';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#3f3f3f',
        drawerActiveBackgroundColor: colors.secondary,
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
      initialRouteName={'Home'}
      >
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="home" size={22} color={color} />
          ),
        }}
        name="SCREEN"
        component={HomeStack}
      />
      {/* <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="plus" size={22} color={color} />
          ),
        }}
        name="AddCategories"
        component={AddCategories}
      /> */}
    </Drawer.Navigator>
  );
};

export default MainDrawer;
