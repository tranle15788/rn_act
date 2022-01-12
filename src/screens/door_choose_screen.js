/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Dimensions, StyleSheet, Image, View, ScrollView,StatusBar, TouchableOpacity, Platform} from 'react-native';
 import {
  Box,
  Center,
  HStack,
  Text,
  Button,
  Pressable,
  VStack, 
  Modal,
  Input 
} from 'native-base';
import { isIphoneX } from 'react-native-iphone-x-helper';
import AppHeader from "../components/app_header";
class ChooseDoorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      showModal: false,
      pageIndex: 0,

    };
    this.cancelRef = React.createRef();
  }
  onLayout = () => {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }
  onShowModalImg = () => this.setState({showModal: !this.state.showModal});

  onChangeContent = (page) => {
    this.setState({pageIndex: page})
  }
  render() {
    const { width, height, showModal, pageIndex} = this.state;
    const dataDoorType = [
      'Cửa đi mở ngoài',
      'Cửa đi mở trong',
      'Cửa sổ mở quay',
      'Cửa sổ mở trượt'
    ];
    
    const mStyle = StyleSheet.create({
      itemStyle: {
        marginHorizontal: 4,
      },
      boxPadding: {
        paddingHorizontal: 0,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ef4444',
        marginHorizontal: (width >= 600 && isIphoneX() && !Platform.isPad) ? 50 : 15,
        marginTop: 15,
        borderRadius: 4
      }
    });
    return (
      <View onLayout={this.onLayout} flex={1} safeAreaTop style={{backgroundColor: '#fff'}}>
        <StatusBar barStyle="dark-content" />
        <AppHeader
          title="CHỌN LOẠI CỬA"
          hasMenu={false}
          hasLeft={true}
          backPress={() =>
            this.props.navigation.goBack(null) 
          }
          hasRightQuotation={true}
          rightPress={() => this.props.navigation.navigate('accessory_setting')}
          textRightQuotation="Cài đặt thông số"
        />
        <ScrollView flex={1} showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
          {pageIndex == 0 && (dataDoorType.map((index, doorKey) => (
            <Box key={doorKey} flex={1} style={mStyle.boxPadding}>
              <Text fontWeight='600' fontSize="15" mb={3} ml={3} color='error.600' textTransform='uppercase'>
                {index}
              </Text>
              <HStack alignItems="center" flexWrap="wrap">
              {[1,2,3,4, 5, 6, 7,8,9].map((index, key) => (
                <TouchableOpacity key={key} onPress={()=> this.props.navigation.navigate('size_door')}>
                  <View alignItems="center">
                    <Center 
                        w={{ 
                          base: width / 4 - 16, 
                          sm: width / 7 - 10, 
                          md: (width >= 600 && isIphoneX() && !Platform.isPad) ? width / 7 - 5 : width / 6 - 14, 
                          lg: width / 7 - 14 }} 
                        h={{ 
                          base: width / 4 - 16, 
                          sm: width / 7 - 10, 
                          md: (width >= 600 && isIphoneX() && !Platform.isPad) ? width / 7 - 5 : width / 6 - 14, 
                          lg: width / 7 - 14 }} 
                        style={mStyle.itemStyle} 
                        mb={2}
                        p='1'
                        rounded="md" 
                        bg='white'
                    >
                        <Image 
                            source={require('../../assets/images/3.png')}
                            resizeMode="cover"
                            style={{flex: 1, width: '100%'}}
                        />
                    </Center>
                    <HStack mb={2} space={2} alignItems="center">
                      <Text fontSize='13'>TN1</Text>
                    </HStack>
                  </View>
                </TouchableOpacity>
                ))}
              </HStack>
            </Box>
          )))}
          {pageIndex != 0 && (
            <Box flex={1} style={mStyle.boxPadding}>
              <Text fontWeight='600' fontSize="15" mb={3} ml={3} color='error.600' textTransform='uppercase'>
                {pageIndex === 1 && 'Cửa đi mở ngoài'}
                {pageIndex === 2 && 'Cửa đi mở trong'}
                {pageIndex === 3 && 'Cửa sổ mở quay'}
                {pageIndex === 4 && 'Cửa sổ mở trượt'}
              </Text>
              <HStack alignItems="center" flexWrap="wrap">
              {[1,2,3,4, 5, 6, 7,8,9].map((key) => (
                <TouchableOpacity key={key} onPress={()=> this.props.navigation.navigate('size_door')}>
                  <View alignItems="center">
                    <Center 
                        w={{ base: width / 4 - 16, sm: width / 7 - 10, md: width / 7 - 7, lg: width / 7 - 5  }} 
                        h={{ base: width / 4 - 16, sm: width / 7 - 10, md: width / 7 - 7, lg: width / 7 - 5  }} 
                        style={mStyle.itemStyle} 
                        mb={2}
                        p='1'
                        rounded="md" 
                        bg='white'
                    >
                        <Image 
                            source={require('../../assets/images/3.png')}
                            resizeMode="cover"
                            style={{flex: 1, width: '100%'}}
                        />
                    </Center>
                    <HStack mb={2} space={2} alignItems="center">
                      <Text fontSize='13'>TN1</Text>
                    </HStack>
                  </View>
                </TouchableOpacity>
                ))}
              </HStack>
            </Box>)}
          <View style={{height: 50}}/>
        </ScrollView>
        {/* Footer Start */}
        <HStack alignItems="center" safeAreaBottom shadow={6} style={{backgroundColor: '#dc2626'}}>
          <Pressable
            flex={1}
            py={3}
            onPress={() => this.onChangeContent(0)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Tất cả
              </Text>
            </Center>
          </Pressable>
          <Pressable
            flex={1}
            py={1}
            borderLeftWidth={1}
            borderLeftColor={'white'}
            borderRightWidth={1}
            borderRightColor={'white'}
            onPress={() => this.onChangeContent(1)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Đi mở ngoài
              </Text>
            </Center>
          </Pressable>
          <Pressable
            flex={1}
            py={1}
            borderRightWidth={1}
            borderRightColor={'white'}
            onPress={() => this.onChangeContent(2)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Đi mở trong
              </Text>
            </Center>
          </Pressable>
          <Pressable
            flex={1}
            py={1}
            borderRightWidth={1}
            borderRightColor={'white'}
            onPress={() => this.onChangeContent(3)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Cửa sổ, vách
              </Text>
            </Center>
          </Pressable>
          <Pressable
            py="3"
            flex={1}
            onPress={() => this.onChangeContent(4)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Cửa trượt
              </Text>
            </Center>
          </Pressable>
        </HStack>
        {/* Footer End */}
      </View>
    );
  }
}
export default ChooseDoorScreen;
