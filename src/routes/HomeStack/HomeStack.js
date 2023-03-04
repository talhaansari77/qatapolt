// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../screens/Main/ArenaScreen/ArenaScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../utils/Colors';
import {icons} from '../../assets/icons';
import {Image, Platform, Text} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomText from '../../components/CustomText';
import StadiumScreen from '../../screens/Main/ArenaScreen/ArenaScreen';
import ChatScreen from '../../screens/Main/ChatScreen/ChatScreen';
import PostScreen from '../../screens/Main/PostScreen/PostScreen';
import WatchListScreen from '../../screens/Main/WatchListScreen/WatchListScreen';
import ArenaScreen from '../../screens/Main/ArenaScreen/ArenaScreen';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
    
      screenOptions={({route}) => ({
        // tabBarColor: ({focused, size, color}) => {},
        // tabBarStyle:()=>{innerHeight:1000},
        tabBarStyle: {
          height: verticalScale(65),
          paddingTop: 5,
          backgroundColor: colors.white,
          display:route.name === 'NewPost'?"none":"flex",
          paddingBottom:Platform.OS == "ios" ? 20 : 12
        },
        headerShown: false,
        tabBarLabel: ({focused, size, color}) => {
          let label = '';
          if (route.name === 'Arena') {
            label = 'Arena';
            color = focused ? colors.black : colors.lightGray;
          } else if (route.name === 'Chat') {
            label = 'Chat';
            color = focused ? colors.black : colors.lightGray;
          } else if (route.name === 'NewPost') {
            label = '';
            color = focused ? colors.black : colors.lightGray;
          } else if (route.name === 'WatchList') {
            label = 'WatchList';
            color = focused ? colors.black : colors.lightGray;
          } else if (route.name === 'Profile') {
            label = 'Profile';
            color = focused ? colors.black : colors.lightGray;
          }
          return <CustomText label={label} color={color} />;
        },

        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Arena') {
            iconName = focused ?icons.stadiumActive:icons.stadium;
            // size = focused ? 35 : 30;
            color = focused ? colors.green : colors.lightGray;
          } else if (route.name === 'Chat') {
            iconName = focused ?icons.chatActive:icons.chat;
            // size = focused ? 35 : 30;
            color = focused ? colors.green : colors.lightGray;
          } else if (route.name === 'NewPost') {
            iconName = icons.plus;
            // size = focused ? 35 : 30;
            return (
              <Image
                source={iconName}
                style={{
                  height: 40,
                  width: 40,
                  marginTop: 20,
                }}
              />
            );
            // color = focused ? colors.green : colors.lightGray;
          } else if (route.name === 'WatchList') {
            iconName = focused ?icons.watchlistActive:icons.star;
            // size = focused ? 35 : 30;
            color = focused ? colors.green : colors.lightGray;
          } else if (route.name === 'Profile') {
            iconName = icons.profile;
            // size = focused ? 35 : 30;
            return (
              <Image
                source={iconName}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            );
          }
          return (
            <Image
              source={iconName}
              style={{
                tintColor: color,
                height: 30,
                width: 30,
              }}
            />
          );
        },
      })}

      //   tabBarOptions={{
      //     activeTintColor: '#f0f',
      //     inactiveTintColor: '#555',
      //     activeBackgroundColor: '#fff',
      //     inactiveBackgroundColor: '#999',
      //     showLabel: true,
      //     labelStyle: {fontSize: 14},
      //     showIcon: true,
      //   }}
      //   activeColor="#fff"
      //   inactiveColor="#3e2465"

      //   shifting={true}
      // barStyle={{
      //   // backgroundColor: colors.white,
      //   // height: verticalScale(700),
      // }}
      initialRouteName={"NewPost"}
    >
      <Tab.Screen name="Arena" component={ArenaScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="NewPost" component={PostScreen} />
      <Tab.Screen name="WatchList" component={WatchListScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default HomeStack;
