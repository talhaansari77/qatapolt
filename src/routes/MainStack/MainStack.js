import {createStackNavigator} from '@react-navigation/stack';
import QatalPoltNews from '../../screens/Main/QatalPoltNews/QatalPoltNews';
import HomeStack from '../HomeStack/HomeStack';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'QatalPoltNews'}
      >
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="QatalPoltNews" component={QatalPoltNews} />
    </Stack.Navigator>
  ); 
};

export default MainStack;
