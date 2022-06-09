import { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Button, TextInput, Appbar } from 'react-native-paper'
import auth from '@react-native-firebase/auth'

import { validateEmailRegex } from '../../Ultils'

import styles from './styles'

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [repeatEmail, setRepeatEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [passwordIsNotVisible, setPasswordIsNotValid] = useState(true)
  const [icon, setIcon] = useState('eye')
  const [loading, setLoading] = useState(false)

  const goBack = () => {
    navigation.goBack()
  }

  const handlePasswordVisibility = () => {
    if (icon === 'eye') {
      setIcon('eye-off')
    } else {
      setIcon('eye')
    }
    setPasswordIsNotValid(!passwordIsNotVisible)
  }

  const validateEmail = () => {
    if (email !== repeatEmail) {
      return false
    }
    if (email === '') {
      return false
    }

    return validateEmailRegex(email)
  }

  const validaePassword = () => {
    if (password !== repeatPassword) {
      return false
    }
    if (password.length < 8) {
      return false
    }
    return true
  }


  const handleCadButton = () => {
    setLoading(true)
    if (validateEmail() && validaePassword()) {
      auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false)
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        })
        .catch(error => {
          console.log(error)
        }
        )
    } else {
      setLoading(false)
      console.log('error')
    }
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Register" />
      </Appbar.Header>
      <SafeAreaView style={styles.form}>
        <TextInput
          label="E-mail"
          mode="outlined"
          value={email}
          style={styles.input}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          label="Repita o E-mail"
          mode="outlined"
          value={repeatEmail}
          style={styles.input}
          onChangeText={text => setRepeatEmail(text)}
        />

        <TextInput
          label="Senha"
          mode="outlined"
          value={password}
          style={styles.input}
          secureTextEntry={passwordIsNotVisible}
          right={<TextInput.Icon name={icon} onPress={() => handlePasswordVisibility()} />}
          onChangeText={text => setPassword(text)}
        />

        <TextInput
          label="Repita a Senha"
          mode="outlined"
          value={repeatPassword}
          style={styles.input}
          secureTextEntry={passwordIsNotVisible}
          right={<TextInput.Icon name={icon} onPress={() => handlePasswordVisibility()} />}
          onChangeText={text => setRepeatPassword(text)}
        />

        <Button
          mode="contained"
          style={styles.button}
          loading={loading}
          onPress={handleCadButton}
        >
          Cadastrar
        </Button>
      </SafeAreaView>
    </View>
  )
}

export default Register