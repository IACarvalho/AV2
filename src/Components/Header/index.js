import {View, Text} from 'react-native'
import { Button } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

const Header = ( { title = '', back = null, logout = null } ) => {
  const renderBack = () => {
    if (back) {
      return (
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => back()}
        >
        <AntDesign name="leftcircleo" size={24} color="#fff" />
      </TouchableOpacity>
      )
    }
  }

  function renderLogout() {
    if (logout) {
      return (
        <Button 
          icon="logout"
          Type="outline" 
          mode="text"
          style={styles.logoutIcon}
          color='#fff' 
          onPress={() => logout()}
        >Sair</Button>
      )
    }
  }

  return (
    <View style={styles.container}>
      {renderBack()}
      <Text style={styles.title}>{ title }</Text>
      {renderLogout()}
    </View>
  )
}

export { Header }