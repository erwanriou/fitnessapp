import React, { Component } from 'react'
import { View } from 'react-native'
import { getMetricMetaINfo } from '../utils/helpers'

export default class AddEntry extends Component {

  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }

  increment = (metric) => {
    const { max, step } = getMetricMetaINfo(metric)
    this.setState((state) => {
      const count = state[metric] + step
      return {
        ...state,
        [metric]: count > max ? max : count,
      }
    })
  }

  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaINfo(metric).step
      return {
        ...state,
        [metric]: count < 0 ? 0 : count,
      }
    })
  }

  slide = (metric, value) => {
    this.setState(() => {
      [metric]: value,
    })
  }

  render() {
    return (
      <View>
        {getMetricMetaINfo('bike').getIcon()}
      </View>
    )
  }
}
