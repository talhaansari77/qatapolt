import {View, Text, LogBox} from 'react-native';
import React, { useEffect } from 'react';
import RootNavigator from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/routes/AuthStack/AuthStack';
import HomeStack from './src/routes/HomeStack/HomeStack';


LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

const App = () => {
  

  return (
    
    
   

    <Provider store={store}>
    
    
      <RootNavigator/>
     </Provider>
  );
};

export default App;
