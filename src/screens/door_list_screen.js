/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Dimensions, StyleSheet, Image, View, ScrollView,StatusBar, TouchableOpacity, Platform } from 'react-native';
 import {
  Box,
  Center,
  HStack,
  Text,
  Checkbox,
  Pressable,
  NativeBaseProvider,
  AlertDialog,
  Button
} from 'native-base';
import { isIphoneX } from 'react-native-iphone-x-helper';
import AppHeader from "../components/app_header";
class ListDoorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      selected: 0,
      isOpen: false,
    };
    this.cancelRef = React.createRef();
  }
  onLayout = () => {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }
  setSelected = (value) => {
    this.setState({selected: value})
  }
  onClose = () => {
    this.setState({isOpen: false});
  }

  render(){
    const { width, height, selected, isOpen } = this.state;
    const alertBeforeDelete = (
     <AlertDialog
      leastDestructiveRef={this.cancelRef}
      isOpen={isOpen}
      onClose={this.onClose}
    >
      <AlertDialog.Content bg='white'>
        <AlertDialog.Body mt='3'>
          Vui lòng chọn cửa bạn muốn xoá
        </AlertDialog.Body>
        <AlertDialog.Footer bg="white">
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={this.onClose}
              ref={this.cancelRef}
            >
              Thoát
            </Button>
            <Button colorScheme="danger" variant="ghost" onPress={this.onClose}>
              Đồng ý
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
    );
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
          title="DANH SÁCH CỬA"
          hasMenu={false}
          hasLeft={true}
          backPress={() =>
            this.props.navigation.goBack(null)
          }
          hasRightQuotation={true}
          rightButtonQuotation={null}
          textRightQuotation="Xuất Toàn Bộ CT"
        />
        <Center flex={1}>
          <ScrollView flex={1} showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
            {/* <Text>{width}</Text> */}
            <Box width="100%" flex={1} py={4} style={mStyle.boxPadding}>
                <Text bold fontSize="15" mb={2}>Tên công trình</Text>
                <HStack alignItems="center" flexWrap="wrap">
                {[1,2,3,4, 5, 6, 7,8,9].map((index, key) => (
                  <TouchableOpacity key={key} onPress={()=> this.props.navigation.navigate('size_door')}>
                    <View alignItems="center">
                      <Center 
                          w={{ 
                            base: width / 4 - 13, 
                            sm: width / 7 - 10, 
                            md: (width >= 600 && isIphoneX() && !Platform.isPad) ? width / 7 - 7 : width / 6 - 12,
                            lg: width / 7 - 12  }} 
                          h={{ 
                            base: width / 4 - 13, 
                            sm: width / 7 - 10, 
                            md: (width >= 600 && isIphoneX() && !Platform.isPad) ? width / 7 - 7 : width / 6 - 12, 
                            lg: width / 7 - 12  }} 
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
                        <Checkbox colorScheme="danger" value={index} bg='white' accessibilityLabel='checkbox'/>
                        <Text color='error.600'>D1</Text>
                      </HStack>
                    </View>
                  </TouchableOpacity>
                ))}
              </HStack>
            </Box>
          </ScrollView>
        </Center>
        {alertBeforeDelete}
        <HStack alignItems="center" safeAreaBottom shadow={6} style={{backgroundColor: '#dc2626'}}>
          <Pressable
            // opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => this.props.navigation.navigate('aluminum_select')}>
            <Center>
              <Text color="white" fontSize="13" bold>
                Thêm cửa
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // opacity={selected === 1 ? 1 : 0.5}
            py="3"
            flex={1}
            // onPress={() => this.setSelected(1)}
            onPress={() => this.setState({isOpen: !isOpen})}
            borderLeftWidth={1}
            borderLeftColor={'white'}
          >
            <Center>
              <Text color="white" fontSize="13" bold>
                Xoá cửa
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </View>
    );
  }
}
export default ListDoorScreen;

