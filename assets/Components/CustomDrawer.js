import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import React, { useContext } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { AuthContext } from './AuthContext';
const CustomDrawer = props => {



  const{logout}=useContext(AuthContext)

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#091C2D'}}>
        <ImageBackground
          source={require('../Img/image.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../Img/user-profile.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Parijat
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 15}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{logout()}} style={{paddingVertical:15}}>
        <Text style={{fontSize:20,color:'#37B84A'}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
