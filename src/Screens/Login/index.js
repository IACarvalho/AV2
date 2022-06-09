import { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { TextInput, Button, Appbar } from 'react-native-paper'
import auth from '@react-native-firebase/auth'

import styles from './styles'

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordIsNotVisible, setPasswordIsNotValid] = useState(true)
  const [icon, setIcon] = useState('eye')

  const handleLogin = () => {
    setLoading(true)
    auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false)
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      }
      )
      .catch((error) => {
        setLoading(false)
        console.log(error)
      }
      )
      .finally(() => {
        setLoading(false)
      }
      )
  }

  const handlePasswordVisibility = () => {
    if (icon === 'eye') {
      setIcon('eye-off')
    } else {
      setIcon('eye')
    }
    setPasswordIsNotValid(!passwordIsNotVisible)
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Login" />
      </Appbar.Header>
      <SafeAreaView style={styles.form}>
        <View>
          <TextInput
            label="Email"
            style={styles.input}
            mode="outlined"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            label="Senha"
            style={styles.input}
            mode="outlined"
            value={password}
            secureTextEntry={passwordIsNotVisible}
            right={<TextInput.Icon name={icon} onPress={() => handlePasswordVisibility()} />}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Button
          mode="contained"
          style={styles.button}
          loading={loading}
          onPress={handleLogin}
        >
          ENTRAR
        </Button>
      </SafeAreaView>
      <View style={styles.registerRevocer} >
        <Button
          mode="text"
          onPress={() => navigation.navigate('Register')}
        >
          Não possui usuário? Cadastre-se
        </Button>
        <Button
          mode="text"
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          Esqueceu sua senha?
        </Button>
      </View>
    </View>
  )
}

export default Login