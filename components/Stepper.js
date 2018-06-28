import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { white, gray, purple } from '../utils/colors'

export default function Stepper ({ max, unit, step, value, onIncrement, onDecrement}) {
  return (
    <View style={[styles.row, { justifyContent: 'space-between'}]}>
      {Platform.OS === 'ios'
        ? <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.iosBtn}
              onPress={onDecrement}>
              <Entypo name='minus' size={30} color={purple} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iosBtn}
              onPress={onIncrement}>
              <Entypo name='plus' size={30} color={purple} />
            </TouchableOpacity>
          </View>
        : <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.androidBtn}
              onPress={onDecrement}>
              <FontAwesome name='minus' size={30} color={white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.androidBtn}
              onPress={onIncrement}>
              <FontAwesome name='plus' size={30} color={white} />
            </TouchableOpacity>
          </View>}

      <View style={styles.metricCounter}>
        <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
        <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 5,
  },
  androidBtn: {
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 2,
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
