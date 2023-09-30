import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
export default function App() {
  const [isPageChanged, setIsPageChanged] = useState(false);
  return (
    <View style={styles.container}>
      {!isPageChanged ? (
        <SignIn
          isPageChanged={isPageChanged}
          setIsPageChanged={setIsPageChanged}
        />
      ) : (
        <SignUp
          isPageChanged={isPageChanged}
          setIsPageChanged={setIsPageChanged}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
});
