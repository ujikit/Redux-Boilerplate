import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// configs
import {store} from './src/states/store/store';
// screens
import DispatchExampleComponent from './src/screens/DispatchExample';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DispatchExampleComponent">
          <Stack.Screen
            name="DispatchExampleComponent"
            component={DispatchExampleComponent}
            options={{
              headerShown: false
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
