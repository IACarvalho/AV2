import { useState } from 'react'
import { View, SafeAreaView} from 'react-native'
import { Appbar, TextInput, Button} from 'react-native-paper'

import styles from './styles'

const ForgotPassword = ({ navigation }) => {

  const goBack = () => {
    navigation.goBack()
  }

  const handleSendButton = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    })
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
          style={styles.input}
        />
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => handleSendButton()}
        >
          Enviar
        </Button>
      </SafeAreaView>
    </View>
  )
}

export default ForgotPassword