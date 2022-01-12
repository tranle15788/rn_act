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
class AccessorySettingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      pageIndex: 2,
    };
    this.cancelRef = React.createRef();
  }
  componentDidMount() {
  }
  
  onLayout = () => {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }

  onChangeContent = (page) => {
    this.setState({pageIndex: page})
  }
  render() {
    const { width, height, pageIndex} = this.state;
    const data_profit = [
      'Công sản xuất/lắp đặt(VĐN/m2)',
      'Vật tư phụ(VĐN/m2)',
      'Hệ số lợi nhuận(giá bán / vốn)'
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
          title={pageIndex != 2 ? "CÀI ĐẶT PHỤ KIỆN" : "HỆ SỐ LỢI NHUẬN"}
          hasMenu={false}
          hasLeft={true}
          backPress={() =>
            this.props.navigation.goBack(null)
          }
          hasRightQuotation={true}
          rightButtonQuotation={null}
          textRightQuotation="Lưu Lại"
        />
        <ScrollView flex={1} showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
          <Box flex={1} mt={2} pb={4} style={mStyle.boxPadding}>
            {/* Content of Tab 0 1 2  Start */}
            {pageIndex === 0 && <VStack 
                flex='1'
                alignItems="center" 
                borderWidth='1' 
                borderColor='muted.400' 
                rounded='sm'>
                    <HStack 
                        flex='1' 
                        alignItems="center"
                        borderBottomWidth='1' 
                        borderBottomColor='muted.400'
                    >
                        <Box w="75%" p='2'>
                        <Text fontWeight={'600'}>CÀI ĐẶT THÔNG SỐ</Text>
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
                    {[1,2,3,4].map((index, key)=> (
                    <HStack 
                        key={key}
                        flex='1' 
                        alignItems="center"
                        borderBottomWidth='1' 
                        borderBottomColor={index === 4 ? 'transparent' : 'muted.400'}
                    >
                        <Box w="75%" p='2'>
                        <Text>(1) - Cánh cửa đi ngậm khung</Text>
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
              </VStack>}
              {pageIndex === 1 && <VStack 
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
                            <Text fontWeight='600'>Bản lề cửa đi YAL</Text>
                            <Text color='light.500' fontSize='12'>YAL-DBL</Text>
                        </Box>
                        <Box w="25%" p='1' borderLeftWidth='1' borderLeftColor='#ccc'>
                            <Input
                                size='sm'
                                bg='#5FDDE5'
                                style={{fontWeight: '600'}}
                                borderWidth='0'
                                textAlign='right'
                                defaultValue='3'
                                w={{
                                    base: "100%",
                                }}
                            />
                            <Text color='light.500' fontSize='12' textAlign='right'>Chiếc</Text>
                        </Box>
                    </HStack>
                    ))}
              </VStack>}
              {pageIndex === 2 && <VStack 
                flex='1'
                alignItems="center" 
                borderWidth='1' 
                borderColor='muted.400' 
                rounded='sm'>
                    {data_profit.map((index, key)=> (
                    <HStack 
                        key={key}
                        flex='1' 
                        alignItems="center"
                        borderBottomWidth='1' 
                        borderBottomColor={index == 2 ? 'transparent' : 'muted.400'}
                    >
                        <Box w="75%" p='2'>
                            <Text fontWeight='600'>{index}</Text>
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
              </VStack>}
            {/* Content of Tab 0 1 2 End */}

          </Box>
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
                Nhóm
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
                Giá phụ kiện
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // py="3"
            flex={1}
            onPress={() => this.onChangeContent(2)}
          >
            <Center px={1}>
              <Text color="white" fontSize="13" bold textAlign='center'>
                Hệ số lợi nhuận
              </Text>
            </Center>
          </Pressable>
        </HStack>
        {/* Footer End */}
      </View>
    );
  }
}
export default AccessorySettingScreen;
