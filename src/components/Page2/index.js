import React, { Component } from 'react'
import { View, Text } from 'react-native'

const styles = {
  Page2ComponentStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
}

class Page2Component extends Component {
  constructor() {
    super()

    this.state = {
      loading: false
    }
  }

  render() {
    const { Page2ComponentStyle } = styles
    const { loading } = this.state

    return (
      <View style={Page2ComponentStyle}>
        <Text>Page2Component</Text>
        <Text>{ loading !== 'false' ? 'Loading ...' : 'Chargement terminé'}</Text>
      </View>
    )
  }
}

export default Page2Component
