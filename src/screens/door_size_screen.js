/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Dimensions, StyleSheet, Image, View, ScrollView, StatusBar, Platform } from 'react-native';
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
class SizeDoorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      showModal: false,
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

  render(){
    const { width, height, showModal} = this.state;
    const mStyle = StyleSheet.create({
      itemStyle: {
        marginHorizontal: 4,
      },
      boxPadding: {
        paddingHorizontal: (width >= 600 && isIphoneX() && !Platform.isPad) ? 50 : 10,
      }
    });
    return (
      <View onLayout={this.onLayout} flex={1} safeAreaTop style={{backgroundColor: '#fff'}}>
        <StatusBar barStyle="dark-content" />
        <AppHeader
          title="KÍCH THƯỚC CỬA"
          hasMenu={false}
          hasLeft={true}
          backPress={() =>
            this.props.navigation.goBack(null)
          }
          hasRightQuotation={true}
          rightButtonQuotation={null}
          textRightQuotation="Xuất File"
        />
        <ScrollView flex={1} showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
          {/* <Text>{width}</Text> */}
          <Box alignItems="center" flex={1} py={4} style={mStyle.boxPadding}>
            <HStack alignItems="center" mb={4}>
              <Pressable 
                onPress={() => this.props.navigation.navigate('modal_img')}
              >
                <Center 
                    w='120'
                    h='120'
                    style={mStyle.itemStyle} 
                    mb={2}
                >
                    <Image 
                        source={require('../../assets/images/3.png')}
                        resizeMode="contain"
                        style={{flex: 1, width: '100%'}}
                    />
                </Center>
              </Pressable>
              
            </HStack>
            <VStack 
              flex='1'
              alignItems="center" 
              borderWidth='1' 
              borderColor='muted.400' 
              rounded='sm'>
              {[1,2,3,4].map((index, key)=> (
                <HStack 
                  key={key}
                  flex='1' 
                  alignItems="center"
                  borderBottomWidth='1' 
                  borderBottomColor={index === 4 ? 'transparent' : 'muted.400'}
                >
                  <Box w="75%" p='2'>
                    <Text bold>Tên khách hàng</Text>
                  </Box>
                  <Box w="25%" p='1' borderLeftWidth='1' borderLeftColor='#ccc'>
                    <Input
                      size='lg'
                      bg='#5FDDE5'
                      style={{fontWeight: '600'}}
                      borderWidth='0'
                        textAlign='right'
                        defaultValue='3'
                        w={{
                          base: "100%",
                        }}
                    />
                  </Box>
                </HStack>
              ))}
            </VStack>
          </Box>
          {/* <Modal isOpen={showModal} onClose={this.onShowModalImg} size={width > 600 ? 'lg' : 'full'}>
            <Modal.Content h='100%' justifyContent='center'>
              <Modal.CloseButton />
              <Modal.Body flex='1' alignItem='center'>
                <Center 
                  alignSelf='center'
                  w={ width > 600 ? 500 : 300}
                  h={ width > 600 ? 300 : 300}
                  my={10}
                  flex={1}
                >
                  <Image 
                 
                      source={require('../../assets/images/img_baogia.png')}
                      resizeMode="contain"
                      style={{flex: 1, width: '100%'}}
                  />
                </Center>
              </Modal.Body>
            </Modal.Content>
          </Modal> */}
        </ScrollView>
        <HStack alignItems="center" safeAreaBottom shadow={6} style={{backgroundColor: '#dc2626'}}>
          <Pressable
            flex={1}
            py={width > 600 ? 3 : 1}
            onPress={() => this.props.navigation.goBack(null)}
          >
            <Center px={2}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Lưu & thêm cửa khác
              </Text>
            </Center>
          </Pressable>
          <Pressable
            flex={1}
            py={width > 600 ? 3 : 1}
            borderLeftWidth={1}
            borderRightWidth={1}ght
            borderLeftColor={'white'}
            borderRightColor={'white'}
            onPress={() => this.props.navigation.goBack(null)}
          >
            <Center px={2}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Lưu & thêm cửa cùng loại
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // py="3"
            flex={1}
            py={width > 600 ? 3 : 1}
            onPress={() => this.props.navigation.navigate('detail-door')}
          >
            <Center>
              <Text color="white" fontSize="13" bold>
                Xem chi tiết
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </View>
    );
  }
}
export default SizeDoorScreen;
