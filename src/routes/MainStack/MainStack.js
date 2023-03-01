import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Main/HomeScreen/HomeScreen';
const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={'Signout'}
      >
      <Stack.Screen name="homeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
