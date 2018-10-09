import React, { Component } from 'react'; 
import { View, Text } from 'react-native';

class Page2Component extends Component {
    render() {
        const { Page2Component } = styles;

        return (
            <View style={Page2Component}>
                <Text>Page2Component</Text>
                <Text>Page 2</Text>
            </View>
        );
    }
};

const styles = { 
  Page2Component: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5FCFF', 
  }, 
};

export default Page2Component;
