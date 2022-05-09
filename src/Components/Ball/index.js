import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'


const Ball = ({number}) => {
  const [color, setColor] = useState('#025E33')
  const [textColor, setTextColor] = useState('#fff')

  function setBallColor() {
    if(Number(number) <= 5) {
      return setColor('#873600')
    }
    if(Number(number) <= 10) {
      return setColor('#DC7633')
    }
    if(Number(number) <= 15) {
      return setColor('#C0392B')
    }
    if(Number(number) <= 20) {
      return setColor('#7D3C98')
    }
    if(Number(number) <= 25) {
      return setColor('#2980B9')
    }
    if(Number(number) <= 30) {
      return setColor('#025E33')
    }
    if(Number(number) <= 35) {
      return setColor('#873600')
    }
    if(Number(number) <= 40) {
      return setColor('#DC7633')
    }
    if(Number(number) <= 45) {
      return setColor('#C0392B')
    }
    if(Number(number) <= 50) {
      return setColor('#7D3C98')
    }
    if(Number(number) <= 55) {
      return setColor('#2980B9')
    }
    if(Number(number) <= 60) {
      return setColor('#025E33')
    }
  }
  
  useEffect(() => {
    setBallColor()
  },[])

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={[styles.number]}>{number}</Text>
    </View>
  )
}

export { Ball }