import React, { Component } from 'react'
import { View, Text } from 'react-native'

const styles = {
  Page1ComponentStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
}

class Page1Component extends Component {
  constructor() {
    super()

    this.state = {
      loading: false
    }
  }

  render() {
    const { Page1ComponentStyle } = styles
    const { loading } = this.state

    return (
      <View style={Page1ComponentStyle}>
        <Text>Page1Component</Text>
        <Text>{ loading !== 'false' ? 'Loading ...' : 'Chargement terminé'}</Text>
      </View>
    )
  }
}

export default Page1Component
