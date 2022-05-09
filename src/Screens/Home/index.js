import { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Button, Appbar } from 'react-native-paper'

import { Ball } from '../../Components/Ball'

import styles from './styles.js'

const Home = ({ navigation }) => {
  const [data, setData] = useState([])

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    })
  }

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const alreadyExists = (value, list) => {
    return list.find(item => item === value)
  }

  const generateBalls = () => {
    const balls = []
    for (let i = 0; i < 6; i++) {
      const number = getRandom(1, 60)
      if (!alreadyExists(number, balls)) {
        balls.push(number)
      }
      else {
        i--
      }
    }
    return balls.sort((a, b) => a - b)
  }

  const renderItem = ({ item }) => {
    return (
      <Ball number={item.ball} />
    )
  }

  const generateData = () => {
    setData([])
    const balls = generateBalls()
    const data = balls.map(ball => ({
      key: ball,
      ball: ball,
    }))
    setData(data)
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Sorteador" />
        <Appbar.Action icon="logout" onPress={() => handleLogout()} />
      </Appbar.Header>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          numColumns={4}
        />
      </View>
      <Button
        style={styles.button}
        mode='contained'
        onPress={() => generateData()}
      >
        Sortear
      </Button>
    </View>
  )
}

export default Home