import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../utils/Colors';
import CustomText from '../../components/CustomText';
import {InterFont} from '../../utils/Fonts';
import ChatScreen from '../../screens/Main/ChatScreen/ChatScreen';
import GroupChat from '../../screens/Main/GroupChat/GroupChat';
const Tab = createMaterialTopTabNavigator();
const TopNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: colors.primary,
          height: verticalScale(32),
          alignItems: 'center',
          justifyContent: 'space-around',
          marginHorizontal: scale(20),
          borderRadius: 10,
          elevation: 0,
        },
        tabBarAllowFontScaling: true,
        tabBarLabel: ({focused, size, color}) => {
          let screenName = '';
          if (route.name === 'Chat') {
            screenName = 'Chat';
            color = focused ? colors.white : colors.lightGray;
          } else if (route.name === 'GroupChat') {
            screenName = 'Group Chat';
            color = focused ? colors.white : colors.lightGray;
          }
          return (
            <CustomText
              label={screenName}
              color={color}
              fontSize={12}
              fontFamily={InterFont.bold}
            />
          );
        },
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {width: 180},
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="GroupChat" component={GroupChat} />
    </Tab.Navigator>
  );
};

export default TopNav;
