import React, { Component } from 'react'
import { View } from 'react-native'
import { getMetricMetaINfo } from '../utils/helpers'

export default class AddEntry extends Component {
  render() {
    return (
      <View>
        {getMetricMetaINfo('bike').getIcon()}
      </View>
    )
  }
}
