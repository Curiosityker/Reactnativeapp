import React from 'react';

import { AuthProvider } from './assets/Components/AuthContext';
import AppNav from './assets/Navigation/AppNav';
import {  NativeBaseProvider } from "native-base";
const App = () => {
  return (
    <NativeBaseProvider >
   <AuthProvider>
     <AppNav/>
   </AuthProvider>
   </NativeBaseProvider>
  );
};


export default App;
 