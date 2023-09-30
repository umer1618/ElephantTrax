import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SocialAccount from '../components/SocialAccount';
import Input from '../components/Input';
import Button from '../components/Button';
export default function SignIn({setIsPageChanged}) {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setError(false);
  }, [email, password]);

  const validateForm = () => {
    // Email validation using a regular expression
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    // Password strength check
    const isStrongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      password,
    );

    if (!emailRegex.test(email) || !isStrongPassword) {
      setError(true);
    } else {
      setError(false);
      console.log('Form Validated');
    }
  };

  return (
    <View>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/images/elephant_logo.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.screen}>
        <SocialAccount />
        <View style={styles.form}>
          <Text style={{fontSize: 18, alignSelf: 'center'}}>
            Sign in with your email and password
          </Text>
          {error && (
            <View
              style={{
                backgroundColor: '#f5f5f5',
                borderColor: '#c5505e',
                borderWidth: 2,
                padding: 10,
                margin: 10,
              }}>
              <Text
                style={{fontSize: 16, color: '#c5505e', alignSelf: 'center'}}>
                The email or password you entered is invalid
              </Text>
            </View>
          )}
          <Input
            value={email}
            onChange={setEmail}
            name="Email"
            placeholder="name@host.com"
          />
          <Input
            value={password}
            onChange={setPassword}
            name="Password"
            placeholder="Password"
          />
          <TouchableOpacity>
            <Text style={styles.touch}>Forgot your password?</Text>
          </TouchableOpacity>
          <Button onPress={validateForm} name="Sign in" />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text>Need an account? </Text>
            <TouchableOpacity
              onPress={() => {
                setIsPageChanged(true);
              }}>
              <Text style={styles.touch}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: '#FF450D',
    height: 120,
  },
  img: {
    width: '55%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -100,
  },
  screen: {
    width: '90%',
    // alignItems:'center',
    margin: 20,
  },
  form: {
    marginTop: 15,
  },
  touch: {
    color: 'dodgerblue',
  },
});
