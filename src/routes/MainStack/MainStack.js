import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from '../HomeStack/HomeStack';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={'Signout'}
      >
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
