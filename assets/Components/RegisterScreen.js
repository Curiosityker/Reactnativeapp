import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React, { useContext, useState } from 'react';
import InputField from './InputField';
import CustomButton from '../Navigation/CustomButton';
import { AuthContext } from './AuthContext';
  
  const RegisterScreen = ({navigation}) => {
  
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const[confirmPassword,setConfirmPassword]=useState()

 
const{register,googleLogin}=useContext(AuthContext)


    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <ScrollView  showsVerticalScrollIndicator={false} style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../Img/Regitaion.jpg')}
              style={{width: 300, height: 200,marginBottom: 20,}}
            />
          </View>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 28,
              color: '#333',
              marginBottom: 20,
            }}>
           Register
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <TouchableOpacity
              onPress={() => googleLogin()}
              style={{
                borderWidth: 2,
                borderRadius: 20,
                paddingHorizontal: 30,
                paddingVertical: 20,
                borderColor: '#ddd',
              }}>
              <Image
                source={require('../Img/Google.jpg')}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderWidth: 2,
                borderRadius: 20,
                paddingHorizontal: 30,
                paddingVertical: 20,
                borderColor: '#ddd',
              }}>
              <Image
                source={require('../Img/facebook.jpg')}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderWidth: 2,
                borderRadius: 20,
                paddingHorizontal: 30,
                paddingVertical: 20,
                borderColor: '#ddd',
              }}>
              <Image
                source={require('../Img/Twitter.jpg')}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
          </View>
          <Text style={{textAlign: 'center', color: '#666', marginBottom: 20}}>
            Or, Login with ...{' '}
          </Text>
          <InputField label={'Full Name'} />
          <InputField label={'Email ID'} 
          keyboardType="email-addres"
          value={email}
          onChangeText={text => setEmail(text)}
          />
          <InputField label={'Password'} 
          inputType="password"
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          fieldButtonLabel={"Forgot ? "}
          fieldButtonFunction={()=>{}}
          />
          <InputField label={'Confirm Password'} 
          inputType="password"
          value={confirmPassword}
          onChangeText={text => {
            setConfirmPassword(text);
          }}
          fieldButtonLabel={"Forgot ? "}
          fieldButtonFunction={()=>{}}
          />
          <CustomButton label={"Register"} onPress={()=>register(email,password)}/>
         
         
          <View style={{flexDirection:'row',justifyContent:'center',marginBottom:15}}>
          <Text>Already registered ? </Text>
          <TouchableOpacity onPress={() =>navigation.navigate('Loginseen')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}>Login</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;
  