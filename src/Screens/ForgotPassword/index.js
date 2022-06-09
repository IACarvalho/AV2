import { useState } from 'react'
import { View, SafeAreaView, Alert } from 'react-native'
import { Appbar, TextInput, Button } from 'react-native-paper'
import auth from '@react-native-firebase/auth'
import { validateEmailRegex } from '../../Ultils'

import styles from './styles'

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('')

  const goBack = () => {
    navigation.goBack()
  }

  const handleSendButton = () => {
    if (!validateEmailRegex(email)) {
      Alert.alert('Email invalid')
      return
    }
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
        console.log('Email sent')
      }
      )
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Recuperar Senha" />
      </Appbar.Header>

      <SafeAreaView style={styles.form}>
        <TextInput
          label="E-mail"
          mode="outlined"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleSendButton}
        >
          Enviar
        </Button>
      </SafeAreaView>
    </View>
  )
}

export default ForgotPassword