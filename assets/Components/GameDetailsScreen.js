import { Image, SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
import {freeGames, paidGames, sliderData} from "../../model/data"





const GameDetailsScreen= ({navigation,route}) => {
  


  
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: '#132134'}}>
    
      <Text>{route.params?.title}</Text>
    
    </SafeAreaView>
  )
}

export default GameDetailsScreen