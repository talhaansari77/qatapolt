import {View, Text, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors} from '../../utils/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ArenaScreen from '../../screens/Main/ArenaScreen/ArenaScreen';
import HomeStack from '../HomeStack/HomeStack';
import CustomDrawer from './CustomDrawer';
import {verticalScale} from 'react-native-size-matters';
import {icons} from '../../assets/icons';
import QatapoltNews from '../../screens/Main/QatapoltNews/QatapoltNews';
import LiveScores from '../../screens/Main/LiveScores/LiveScores';
import {images} from '../../assets/images';
import SportsNews from '../../screens/Main/SportesNews/SportsNews';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.white,
        drawerActiveBackgroundColor: colors.primary,
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: verticalScale(15),
        },
      }}
      initialRouteName={'Home'}>
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Image
              style={{width: 22, height: 22, tintColor: '#3f3f3f'}}
              source={icons.stadium}
            />
            // <FontAwesome5 name="home" size={22} color={color} />
          ),
        }}
        name="Arena"
        component={HomeStack}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color, focused}) => (
            <Image
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? colors.white : '#3f3f3f',
              }}
              source={images.appIcon}
            />
            // <FontAwesome5 name="home" size={22} color={color} />
          ),
        }}
        name="Qatapolt News"
        component={QatapoltNews}
      />
      <Drawer.Screen
      
        options={{
          drawerIcon: ({color, focused}) => (
            <Image
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? colors.white : '#3f3f3f',
              }}
              source={icons.news}
            />
            // <FontAwesome5 name="home" size={22} color={color} />
          ),
        }}
        name="Sports News"
        component={SportsNews}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color, focused}) => (
            <Image
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? colors.white : '#3f3f3f',
              }}
              source={icons.football}
            />
            // <FontAwesome5 name="home" size={22} color={color} />
          ),
        }}
        name="Live Scores"
        component={LiveScores}
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
