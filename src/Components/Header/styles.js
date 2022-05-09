import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: '#025E33',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  backIcon:{
    position: 'absolute',
    left: 10,
  },

  logoutIcon: {
    position: 'absolute',
    right: 10,
  }
})

export default styles