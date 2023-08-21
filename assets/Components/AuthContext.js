import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async () => {
          try {
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.warn(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import React, {createContext, useEffect, useState} from 'react';
// import {BASE_URL} from '../Config';

// export const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [userToken, setUserToken] = useState(null);
//   const [userInfo, setUserInfo] = useState(null);

//   // Login function
//   const login = (username, password) => {
//      setIsLoading(true);
//     axios
//       .post('https://dummyjson.com/auth/login', {
//         username,
//         password,
//       })
//       .then(res => {
//         let userInfo = res.data;
//         setUserInfo(userInfo);
//         setUserToken(userInfo.token);
//         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//         AsyncStorage.setItem('userToken', userInfo.token);

//         console.log(userInfo);
//         console.log('User Token  : ' + userInfo.token);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//       setIsLoading(false)
//   };

//   //logout function

//   const logout = () => {
//     setIsLoading(true);
//     setUserToken(null);

//     AsyncStorage.removeItem('userInfo');
//     AsyncStorage.removeItem('userToken');
//     setIsLoading(false);
//   };

//   //Logged In function
//   const isLoggedIn = async () => {
//     try {
//        setIsLoading(true);
//       let userInfo = await AsyncStorage.getItem('userInfo');
//       let userToken = await AsyncStorage.getItem('userToken');
//       userInfo = JSON.parse(userInfo);

//       if (userInfo) {
//         setUserToken(userToken);
//         setUserInfo(userInfo);
//       }
//       setIsLoading(false);

//     } catch (e) {
//       console.log(`isLogged in error ${e}`);
//     }
//   };

//   useEffect(() => {

//       isLoggedIn();
//   },[]);

//   return (
//     <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
