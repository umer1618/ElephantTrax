import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({name, value, onChange, placeholder}) => {
  return (
    <View>
      <Text style={{marginTop: 5}}>{name}</Text>
      <TextInput
        value={value}
        onChangeText={e => onChange(e)}
        placeholder={placeholder}
        style={styles.inp}
        secureTextEntry={name === 'Password'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inp: {
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
    marginVertical: 5,
    backgroundColor: 'white',
    paddingVertical: 5,
  },
});
