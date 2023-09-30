import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({onPress, name}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.btnTxt}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FF450D',
    borderRadius: 100,
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
  },
});
