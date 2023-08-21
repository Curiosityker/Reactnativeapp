import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Mainseen from '../Components/Mainseen';
import Loginseen from '../Components/Loginseen';
import Profilescreen from '../Components/Profilescreen';
import MomentsScreen from '../Components/MomentsScreen';
import SettingsScreen from '../Components/SettingsScreen';
import CustomDrawer from '../Components/CustomDrawer';
import TabNavigator from './TabNavigator';
import Gallery from '../Components/Gallery';

const Drawer = createDrawerNavigator();

const Appstack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {marginLeft: 25},
        drawerActiveBackgroundColor: '#0F3A5A',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
      }}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profilescreen} />
      <Drawer.Screen name="Gallery" component={Gallery} />
      <Drawer.Screen name="Moments" component={MomentsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default Appstack;
