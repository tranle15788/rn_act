/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { DrawerActions } from "@react-navigation/native";
 import { Dimensions, StyleSheet, Image, View, ScrollView,StatusBar, Platform } from 'react-native';
 import {
  Box,
  Center,
  HStack,
  Text,
  Checkbox,
  Input,
  Button,
  TextArea,
  VStack
} from 'native-base';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { IconOutline } from "@ant-design/icons-react-native";
import AppHeader from "../components/app_header";

class MessageScreen extends React.Component {
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
    const { width, height, selected, isOpen } = this.state;
    
    const mStyle = StyleSheet.create({
      itemStyle: {
        marginHorizontal: 4,
      },
      boxPadding: {
        paddingHorizontal: (width >= 600 && isIphoneX() && !Platform.isPad) ? 50 : 10,
      },
      messView: {
        width: (width >= 600 && isIphoneX() && !Platform.isPad) ? width - 100 : width - 20,
      },
      messItem: {
        padding: 10,
        marginBottom: 5,
        borderRadius: 10,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'row',
      },
      theirMess: {
        float: 'left',
        alignSelf: 'flex-start',
        backgroundColor: '#f4f4f5',
      },
      myMess: {
        float: 'right',
        alignSelf: 'flex-end',
        backgroundColor: '#f87171',
      },
      mb10: {marginBottom: 10},
    });
    return (
      <View onLayout={this.onLayout} flex={1} safeAreaTop style={{backgroundColor: '#fff'}}>

        <StatusBar barStyle="dark-content" />
        <AppHeader 
          title="CHAT HỖ TRỢ" 
          menuPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
        />
         <Center flex={1}>
          <ScrollView flex={1} showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
            {/* <Text>{width}</Text> */}
            <Box width="100%" flex={1} py={4} style={mStyle.boxPadding}>
              <Text fontSize="12" my={3} textAlign='center' color='#57534e'>02:00pm 01/01/2021</Text>
              <View style={mStyle.messView}>
                <View style={[mStyle.theirMess, mStyle.messItem, mStyle.mb10]}>
                  <Text>Xin chào tôi giúp được gì cho bạn?</Text>
                </View>
                <View style={[mStyle.mb10]}>
                  <View style={[mStyle.myMess, mStyle.messItem]}>
                    <Text color='white'>Chào bạn</Text>
                  </View>
                  <View style={[mStyle.myMess, mStyle.messItem]}>
                    <Text color='white'>Tôi không thể tạo công trình</Text>
                  </View>
                </View>
              </View>
            </Box>
          </ScrollView>
        </Center>
        <HStack alignItems="center" safeAreaBottom shadow={6} bg='white'>
          <TextArea
            type="text"
            w={(width >= 600 && isIphoneX() && !Platform.isPad) ? '96%':'100%'}
            h={12}
            ml={(width >= 600 && isIphoneX() && !Platform.isPad) ? 10 : 3} 
            variant="unstyled"
            fontSize={14}
            InputRightElement={
              <Button rounded="none" variant='unstyled' mr={(width >= 600 && isIphoneX() && !Platform.isPad) ? 10 : 3}>
                <IconOutline name="send" size={23} color="red" />
              </Button>
            }
            placeholder="Nhập tin nhắn"
          />
        </HStack>

      </View>
    );
  }
}
export default MessageScreen;

