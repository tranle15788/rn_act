/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Dimensions, StyleSheet, Image, View, StatusBar } from 'react-native';
 import {
  Box,
  Center,
  Button,
  Text
} from 'native-base';
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import AppHeader from "../components/app_header";
class ModalImgView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,

    };
    this.cancelRef = React.createRef();
  }
  onLayout = () => {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }
  render() {
    const { width, height } = this.state;
    
    const mStyle = StyleSheet.create({
      itemStyle: {
        marginHorizontal: 4,
      },
      boxPadding: {
        paddingHorizontal: width > 600 ? 50 : 10,
      }
    });
    return (
      <View onLayout={this.onLayout} flex={1} safeAreaTop style={{backgroundColor: '#000'}}>
        <StatusBar barStyle="light-content" />
        <Center flex={1}>
            <View style={{position: 'absolute', right: width > 600 ? 15 : 0, top: 5}}>
                <Button variant='unstyle' onPress={() => this.props.navigation.goBack(null)}>
                    <IconOutline name="close" size={23} color="white" />
                </Button>
            </View>
            <Center h={height > 600 ? '50%' : '80%'} w='100%' maxWidth='450' alignItems='center' bg='white'>
                <Image 
                    source={require('../../assets/images/4.png')}
                    resizeMode="contain"
                    style={{flex: 1, height: '100%'}}
                />
            </Center>
        </Center>
      </View>
    );
  }
}
export default ModalImgView;
