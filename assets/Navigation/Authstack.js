import React, { useEffect } from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mainseen from '../Components/Mainseen';
import Loginseen from '../Components/Loginseen';
import RegisterScreen from '../Components/RegisterScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const Stack = createNativeStackNavigator();
const Authstack = () => {


useEffect(()=>{
  GoogleSignin.configure({
    webClientId: '370125548746-nm2b7sr3au1rnedhfle7elmuqd92uh57.apps.googleusercontent.com',
  });
},[])




  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Mainseen"
          component={Mainseen}

        />
        <Stack.Screen
          name="Loginseen"
          options={{headerShown: false}}
          component={Loginseen}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={RegisterScreen}
        />
      </Stack.Navigator>
  )
}

export default Authstack