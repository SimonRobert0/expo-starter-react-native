import React, { Component } from 'react'; 
import { View, Text } from 'react-native';

class Page1Component extends Component {
    render() {
        const { Page1ComponentStyle } = styles;

        return (
            <View style={Page1ComponentStyle}>
                <Text>Page1Component</Text>
                <Text>Page 1</Text>
            </View>
        );
    }
};

const styles = { 
  Page1ComponentStyle: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5FCFF', 
  }, 
};

export default Page1Component;
