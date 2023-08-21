import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import Background from '../Background';

const Mainseen = ({navigation}) => {
    return (
        <Background>
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              //  backgroundColor: '#E55451',
            }}>
            <View style={{paddingBottom: 570}}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Loginseen')}
              style={{
                backgroundColor: '#004CB9',
                padding: 20,
                paddingLeft: 20,
                width: '90%',
                borderRadius: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 400,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
                Let's Begin
              </Text>
             
            </TouchableOpacity>
          </SafeAreaView>
        </Background>
      );
}

export default Mainseen