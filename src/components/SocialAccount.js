import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const SocialAccount = () => {
  return (
    <View>
        <View style={styles.socialContainer}>
          <Text style={styles.siginTxt}>Sign In with tour social account</Text>
        </View>
        <TouchableOpacity style={[styles.socialTouch,{backgroundColor:'black'}]}>
            {/* <Image source={require('../assets/images/Android'/icons8-google-72(-hdpi).png)}/> */}
            <Text style={styles.socialTxt}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialTouch,{backgroundColor:'royalblue'}]}>
            {/* <Image source={require('../assets/images/Android'/icons8-google-72(-hdpi).png)}/> */}
            <Text style={styles.socialTxt}>Continue with Google</Text>
        </TouchableOpacity>
        <Text style={{fontSize:12,marginVertical:15}}>We won't post to any of your accounts without asking first</Text>
        <View style={{backgroundColor:'lightgrey',height:1}}/>
    </View>
  )
}

export default SocialAccount

const styles = StyleSheet.create({
  socialContainer: {},
  
  siginTxt:{
    textAlign:'left',
    fontSize:18,
    
  },
  socialTouch:{
    // backgroundColor:'black',
    paddingVertical:10,
    borderRadius:5,
    marginTop:10
  },
  socialTxt:{
    color:'white',
    marginLeft:10
  }
})