import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const InputField = ({
  label,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingBottom: 8,
        marginBottom: 20,
      }}>
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
          value={value}
          onChangeText={onChangeText}
        />
      )}

      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: 700}}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
