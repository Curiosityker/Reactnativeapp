import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Authstack from './Authstack';
import Appstack from './Appstack';
import {AuthContext} from '../Components/AuthContext';
import auth from '@react-native-firebase/auth';



const AppNav = () => {

const {user,setUser}=useContext(AuthContext)
const[initializing,setInitializing]=useState(true)

const onAuthStateChanged=(user)=>{
setUser(user)
if(initializing) setInitializing(false)
}



useEffect(()=>{
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber; // unsubscribe on unmount
},[])

if(initializing) return null

  return (
    <NavigationContainer>
     {user ? <Appstack/> :<Authstack/>}
    </NavigationContainer>
  )
}

export default AppNav







// const AppNav = () => {
//   const {isLoading, userToken} = useContext(AuthContext);

//   if (isLoading) {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <ActivityIndicator size={'large'} />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       {userToken !== null ? <Appstack /> : <Authstack />}
//     </NavigationContainer>
//   );
// };

// export default AppNav;
