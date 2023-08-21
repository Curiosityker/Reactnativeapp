import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import CartScreen from '../CartScreen';
import FavoriteScreen from '../Components/FavoriteScreen';
import Homeseen from '../Components/Homeseen';
import {Image, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameDetailsScreen from '../Components/GameDetailsScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack= () => {
    return (
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#1C6FEB'}}}>
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Homeseen}
  
          />
          <Stack.Screen
            name="Game Details"
            component={GameDetailsScreen}
            options={({route})=>({
                title:route.params?.title,
            })}
          />
        </Stack.Navigator>
    )
  }
  
 

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false ,tabBarStyle:{backgroundColor:'#0F2C56'},
    }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
            // tabBarStyle:{display:'none'},
          tabBarIcon: () => (
            <Image
              source={require('../Img/Home.jpg')}
              style={{width: 40, height: 40,borderRadius:25}}
              
            />
          ),
        }}
      />
      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarBadge:3,
        tabBarIcon:()=>(
            <Image source={require('../Img/cart.jpg')}
            style={{width: 40, height: 40,borderRadius:25}}
            />
        )
      }} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        tabBarIcon:()=>(
            <Image source={require('../Img/favarite.jpg')}
            style={{width:40, height:40,borderRadius:25}}
            />
        )
            
        
      }} />
    </Tab.Navigator>
  );
}
