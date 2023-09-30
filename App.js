import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
export default function App() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
});
