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
class DetailDoorScreen extends React.Component {
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
    const data_CutSize = [
      {
        title: 'YAL - Khung cửa mở quay',
        subTitle: 'Ngang trên - 45 - 45',
        para: 'DA-K55S',
        price: '2800',
        quantity: 1,
        type: 'thanh'
      }
    ];
    const data_glass = [
      {
        title: '6',
        subTitle: '2.589',
        para: 'cánh',
        price: '524 x 1234',
        quantity: 4,
        type: 'tấm'
      }
    ];
    const data_accessory = [
      {
        title: 'Bản lề cửa đi YAL',
        subTitle: 'YAL - DBL',
        para: '',
        price: '16',
        quantity: null,
        type: 'Chiếc'
      }
    ];
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
          title="CHI TIẾT BỘ CỬA"
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
          <Box flex={1} pb={4} style={mStyle.boxPadding}>
            {/* Image of Door Start */}
            {pageIndex === 0 || pageIndex === 1 ? (
              <View>
                <Text bold mt='2'>Test - D1 - 2800 X 2600 - SL: 1 - 7.28 M2/BỘ</Text>
                <HStack alignSelf="center" my={4}>
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
                              source={require('../../assets/images/4.png')}
                              resizeMode="contain"
                              style={{flex: 1, width: '100%'}}
                          />
                      </Center>
                    </Pressable>
                  
                </HStack>
              </View>
            ) : null}
            {/* Image of Door End */}
            {/* Content of Tab 0 1 2 3 Start */}
            {pageIndex != 3 ? 
              (pageIndex === 0 ? data_CutSize : (pageIndex === 1 ? data_glass : data_accessory)).map((index, key)=> (
            <VStack 
              key={key}
              flex='1'
              alignSelf="center"
              rounded='sm'>
              <HStack 
                key={key}
                alignItems="center"
                justifyContent='space-between'
                borderBottomWidth='1' 
                borderBottomColor='muted.300'
              >
                <Box w="15%" maxWidth='60' p='2'>
                  <Image 
                    source={require('../../assets/images/4.png')}
                    resizeMode="contain"
                    style={{width: 40, height: 40}}
                  />
                </Box>
                <Box w='55%' p='2'>
                  <VStack>
                    <Text bold fontSize='15'>{index.title}</Text>
                    <Text color='light.500' fontSize='13'>{index.subTitle}</Text>
                    {pageIndex === 2 ? null : <Text color='info.700' fontSize='13'>{index.para}</Text>}
                  </VStack>
                </Box>
                <Box w="30%" p='1'>
                  <VStack>
                    <Text bold fontSize='16' textAlign='right'>{index.price}</Text>
                    <Text color='light.500' fontSize='13' textAlign='right'><Text color='error.500' bold>{index.quantity} </Text>{index.type}</Text>
                  </VStack>
                </Box>
              </HStack>
            </VStack>
            )) : (
            <VStack ///////// giá thành 
              flex='1'
              alignSelf="center"
              rounded='sm'>
              <HStack 
                alignItems="center"
                borderBottomWidth='1' 
                borderBottomColor='muted.300'
              >
                <Box w='60%' py='2'>
                  <VStack>
                    <Text bold fontSize='15'>Nhôm</Text>
                    <Text color='light.500' fontSize='12'>43.3Kg</Text>
                    <Text color='info.700' fontSize='12'>90000</Text>
                  </VStack>
                </Box>
                <Box w="40%" p='1' >
                  <Text bold fontSize='16' textAlign='right'>3.895.244 Vnđ</Text>
                </Box>
              </HStack>
              <HStack 
                alignItems="center"
                borderBottomWidth='1' 
                borderBottomColor='muted.300'
              >
                <Box w='60%' py='2'>
                  <Text fontWeight={600}>Phụ kiện (tự nhập) (VNĐ)</Text>
                </Box>
                <Box w="40%" p='1' >
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
              <HStack 
                alignItems="center"
                borderBottomWidth='1' 
                borderBottomColor='muted.300'
              >
                <Box w='60%' py='2' >
                  <Text fontWeight={600}>Vật tư phụ (tự nhập) (VNĐ)</Text>
                </Box>
                <Pressable w="40%" p='1' onPress={() => this.props.navigation.navigate('accessory_setting')}>
                  <Text bold textAlign='right'>0 Vnđ</Text>
                </Pressable>
              </HStack>
              <HStack 
                alignItems="center"
                borderBottomWidth='1' 
                borderBottomColor='muted.300'
              >
                <Box w='60%' py='2'>
                  <Text fontWeight={600}>Công sản xuất + Lắp đặt (VNĐ)</Text>
                </Box>
                <Pressable w="40%" p='1' onPress={() => this.props.navigation.navigate('accessory_setting')}>
                  <Text bold textAlign='right'>0 Vnđ</Text>
                </Pressable>
              </HStack>
              <HStack 
                alignItems="center"
                borderBottomWidth='1' 
                borderBottomColor='muted.300'
              >
                <Box w='60%' py='2'>
                  <Text bold fontSize='16'>Tổng</Text>
                </Box>
                <Box w="40%" p='1' >
                  <Text bold fontSize='16' textAlign='right'>4.000.244 Vnđ</Text>
                </Box>
              </HStack>
              <HStack 
                alignItems="center"
                borderBottomWidth='1' 
                borderBottomColor='muted.300'
              >
                <Box w='60%' py='2'>
                  <Text bold fontSize='18' color='darkBlue.600'>Tổng giá bán</Text>
                </Box>
                <Box w="40%" p='1' >
                  <Text bold fontSize='18' textAlign='right' color='darkBlue.600'>4.000.244 Vnđ</Text>
                </Box>
              </HStack>
            </VStack> ///////// giá thành 
            )}
            {/* Content of Tab 0 1 2 3 End */}
            


          </Box>
          {/* Modal Show Image Start */}
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
          {/* Modal Show Image End */}
        </ScrollView>
        {/* Footer Start */}
        <HStack alignItems="center" safeAreaBottom shadow={6} style={{backgroundColor: '#dc2626'}}>
          <Pressable
            flex={1}
            py={1}
            onPress={() => this.onChangeContent(0)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                KT cắt
              </Text>
            </Center>
          </Pressable>
          <Pressable
            flex={1}
            py={3}
            borderLeftWidth={1}
            borderLeftColor={'white'}
            borderRightWidth={1}
            borderRightColor={'white'}
            onPress={() => this.onChangeContent(1)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                KT Kính
              </Text>
            </Center>
          </Pressable>
          <Pressable
            flex={1}
            py={3}
            borderRightWidth={1}
            borderRightColor={'white'}
            onPress={() => this.onChangeContent(2)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Phụ kiện
              </Text>
            </Center>
          </Pressable>
          <Pressable
            flex={1}
            py={3}
            borderRightWidth={1}
            borderRightColor={'white'}
            onPress={() => this.onChangeContent(3)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Giá thành
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // py="3"
            flex={1}
             onPress={() => this.props.navigation.goBack(null)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Lưu và thêm cửa
              </Text>
            </Center>
          </Pressable>
        </HStack>
        {/* Footer End */}
      </View>
    );
  }
}
export default DetailDoorScreen;
