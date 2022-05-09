import { useState } from 'react'
import {View, SafeAreaView} from 'react-native'
import {Button, Appbar} from 'react-native-paper'

import styles from './styles'

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    }, 500)
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Entrar" />
      </Appbar.Header>
      <SafeAreaView>
        <Button
          mode="contained"
          style={styles.button}
          loading={loading}
          onPress={() => handleLogin()}
        >
          ENTRAR
        </Button>
      </SafeAreaView>
    </View>
  )
}

export default Login