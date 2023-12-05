
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowPostScreen from './src/screens/ShowPostScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
{
  Index: IndexScreen,
  ShowPost: ShowPostScreen,
  Create: CreateScreen,
  Edit: EditScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs List'
  }
});

const App = createAppContainer(navigator);

export default () =>{
  return (
  <Provider>
    <App/>
  </Provider>
  );
};