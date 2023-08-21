import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import CustomButton from '../Navigation/CustomButton';
import InputField from './InputField';
import {AuthContext} from './AuthContext';

const Loginseen = ({navigation}) => {
  const {login,googleLogin} = useContext(AuthContext);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Img/Login1.jpg')}
            style={{width: 200, height: 200}}
          />
        </View>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 28,
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          keyboardType="email-addres"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <InputField
          label={'Password'}
          inputType="password"
          fieldButtonLabel={'Forgot ? '}
          fieldButtonFunction={() => {}}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />

        <CustomButton
          label={'Login'}
          onPress={() => {
            login(email, password);
          }}
        />
        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, Login with ...{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => googleLogin()}
            style={{
              borderWidth: 2,
              borderRadius: 20,
              paddingHorizontal: 30,
              paddingVertical: 10,
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
              paddingVertical: 10,
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
              paddingVertical: 10,
              borderColor: '#ddd',
            }}>
            <Image
              source={require('../Img/Twitter.jpg')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text>New to the app ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Loginseen;
