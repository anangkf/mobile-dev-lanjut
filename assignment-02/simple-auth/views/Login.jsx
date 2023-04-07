import axios from 'axios';
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4eef7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28
  },
  box: {
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
    width: '100%',
    minHeight: 300,
    paddingVertical: 12,
    paddingHorizontal: 38,
    gap: 6
  },
  input: {
    minWidth: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4 ,
    padding: 4
  }
});

const INIT_FORM_DATA = {
  email: '',
  password: ''
}

const Login = () => {
  const [formData, setFormData] = useState(INIT_FORM_DATA)

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = () => {
    axios.post('https://nestjs-adminjs.vercel.app/user/login', formData)
      .then(res => {
        console.log(res)
        Alert.alert(`Wellcome ${formData.email}`)
      })
      .catch(err => {
        Alert.alert(`Invalid Credentials`)
        console.log(err)
      })
    setFormData(INIT_FORM_DATA)
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{ fontSize: 28 }} >Login</Text>
          <SafeAreaView style={{ gap: 8 }}>
            <View>
              <Text>Email</Text>
              <TextInput 
                style={styles.input} 
                placeholder='email' 
                value={formData.email} 
                onChangeText={(value) => handleChange(value, 'email')} 
                keyboardType='email-address' 
                autoCapitalize='none' 
                autoFocus 
                autoComplete='email' 
              />
            </View>
            <View>
              <Text>Password</Text>
              <TextInput 
                style={styles.input} 
                placeholder='password' 
                value={formData.password} 
                onChangeText={(value) => handleChange(value, 'password')} 
                secureTextEntry={true} 
                autoCapitalize='none' 
                autoComplete='password' 
              />
            </View>
            <Button title='Login' onPress={handleSubmit} />
          </SafeAreaView>
      </View>
    </View>
  )
}

export default Login