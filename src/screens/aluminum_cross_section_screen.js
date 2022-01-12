/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { DrawerActions } from "@react-navigation/native";
import { Dimensions, StyleSheet, Image, View, ScrollView, StatusBar, Platform } from 'react-native';
import {
  Box,
  Center,
  HStack,
} from 'native-base';
import { isIphoneX } from 'react-native-iphone-x-helper';
import AppHeader from "../components/app_header";
class AluminumCrossSectionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };
  }
  onLayout = () => {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }

  render(){
    const { width, height } = this.state;
    const mStyle = StyleSheet.create({
      itemStyle: {
        marginHorizontal: 6,
      },
      boxPadding: {
        paddingHorizontal: (width >= 600 && isIphoneX() && !Platform.isPad) ? 50 : 10,
      }
    });
    return (
      <View onLayout={this.onLayout} flex={1} safeAreaTop style={{backgroundColor: '#fff'}}>
        <StatusBar barStyle="dark-content" />
        <AppHeader 
          title="DANH SÁCH CÔNG TRÌNH" 
          menuPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
        />
        <ScrollView flex={1} showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
          {/* <View flex={1} onLayout={this.onLayout}> */}
            <Box width="100%" flex={1} py={4} style={mStyle.boxPadding}>
              <HStack alignItems="center" flexWrap="wrap">
                {[1,2,3,4, 5,6,7, 8,9,10,11,12].map(() => (
                  <Center 
                    w={{ 
                      base: width / 3 - 19, 
                      sm: width / 6 - 10, 
                      md: (width >= 600 && isIphoneX() && !Platform.isPad) ? width / 6 - 7 : width / 6 - 16 , 
                      lg: width / 7 - 15  }} 
                    h={{ 
                      base: width / 3 - 19, 
                      sm: width / 6 - 10, 
                      md: (width >= 600 && isIphoneX() && !Platform.isPad) ? width / 6 - 7 : width / 6 - 16 , 
                      lg: width / 7 - 15  }} 
                    style={mStyle.itemStyle} 
                    mb={3}
                    p={2}
                    rounded="md" 
                    bg='white'
                    shadow={2}
                  >
                    <Image source={require('../../assets/images/aluminum.png')}
                    resizeMode="cover"
                    style={{flex: 1, width: '100%'}}/>
                  </Center>
                ))}
              </HStack>
            </Box>
          {/* </View> */}
        </ScrollView>
      </View>
    );
  }
}
export default AluminumCrossSectionScreen;

