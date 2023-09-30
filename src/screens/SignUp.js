import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import SocialAccount from '../components/SocialAccount';
import Input from '../components/Input';
import Button from '../components/Button';
import {Check, X} from 'lucide-react-native';
export default function SignUp() {
  const [name, setName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState({});

  const validatePassword = () => {
    // Define your password validation criteria here
    const isLengthValid = password.length >= 8;
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
    const hasNumber = password.length > 1 && /[0-9]/.test(password);
    const hasNoSpaces = password.length > 1 && !password.trim().includes(' ');

    setIsPasswordValid({
      isLengthValid: isLengthValid,
      hasSpecialChars: hasSpecialChars,
      hasNumber: hasNumber,
      hasNoSpaces: hasNoSpaces,
    });
  };

  const handlePasswordChange = newPassword => {
    setPassword(newPassword);
    validatePassword();
  };
  return (
    <View>
      <View style={styles.screen}>
        <Text style={{textAlign: 'center', marginBottom: 10}}>or</Text>
        <SocialAccount />
        <View style={styles.form}>
          <Text style={{fontSize: 18}}>
            Sign in with your email and password
          </Text>
          <Input
            value={email}
            onChange={setEmail}
            name="Email"
            placeholder="name@host.com"
          />
          <Input
            value={name}
            onChange={setName}
            name="Given name"
            placeholder=""
          />
          <Input
            value={familyName}
            onChange={setFamilyName}
            name="Family name"
            placeholder=""
          />
          <Input
            value={password}
            onChange={handlePasswordChange}
            name="Password"
            placeholder="Password"
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {isPasswordValid?.isLengthValid ? (
              <Check color="green" />
            ) : (
              <X color="red" />
            )}
            <Text
              style={{color: isPasswordValid?.isLengthValid ? 'green' : 'red'}}>
              password must be 8 characters
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {isPasswordValid?.hasSpecialChars ? (
              <Check color="green" />
            ) : (
              <X color="red" />
            )}
            <Text
              style={{
                color: isPasswordValid?.hasSpecialChars ? 'green' : 'red',
              }}>
              password have a special characters
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {isPasswordValid.hasNumber ? (
              <Check color="green" />
            ) : (
              <X color="red" />
            )}
            <Text style={{color: isPasswordValid.hasNumber ? 'green' : 'red'}}>
              password have a number
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {isPasswordValid.hasNoSpaces ? (
              <Check color="green" />
            ) : (
              <X color="red" />
            )}
            <Text
              style={{color: isPasswordValid.hasNoSpaces ? 'green' : 'red'}}>
              password must not have any leading or trailing spaces
            </Text>
          </View>
          <Button name="Sign up" />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.touch}>Sign in</Text>
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
