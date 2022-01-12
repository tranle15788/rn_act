import React from 'react';
import { View, StyleSheet, Image, Dimensions, TextInput, Platform, ScrollView } from 'react-native';
import { 
   Button, 
} from 'native-base';
import { IconOutline } from "@ant-design/icons-react-native";
class RegisterScreen extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
         }
       }
  render() {
       const screenWidth = Math.round(Dimensions.get('window').width);
       const screenHeight = Math.round(Dimensions.get('window').height);
       return (
            <View style={mStyle.viewContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View  alignItems="center">
                        <View style={{position: 'absolute', top: screenHeight > 736 ? 50 : 15, left: 0}}>
                            <Button 
                                variant="ghost" 
                                style={{borderRadius: 999, width: 40, height: 40}}
                                onPress={() =>
                                    this.props.navigation.goBack(null)}
                            >
                                <IconOutline name='left' style={{fontSize: 18}}/>
                            </Button>
                        </View>
                        <View style={{height: screenHeight / 6}}/>
                        <Image 
                        style={mStyle.logoImage}
                        resizeMode="contain"
                        source={require('../../assets/images/logo.png'
                        )}/>
                    
                    
                        <View style={{width: screenWidth > 600 ? 350 : screenWidth - 50}}> 
                            <View style={mStyle.inputView}>
                                <TextInput
                                    style={{ color: '#262626', fontSize: 15, paddingVertical: 10}}
                                    onChangeText={(text) => this.setState({ phoneNumber: text })}
                                    placeholder='Họ và tên'
                                    placeholderTextColor="#a8a29e"
                                />
                                {/* <Text style={mStyle.labelError}>error</Text> */}
                            </View>
                            
                            <View style={mStyle.inputView}>
                                <TextInput
                                    style={mStyle.inputStyle}
                                    onChangeText={(text) => this.setState({ phoneNumber: text })}
                                    placeholder='Số điện thoại'
                                    placeholderTextColor="#a8a29e"
                                />
                                {/* <Text style={mStyle.labelError}>error</Text> */}
                            </View>

                            <View style={mStyle.inputView}>
                                <TextInput
                                    style={mStyle.inputStyle}
                                    onChangeText={(text) => this.setState({ phoneNumber: text })}
                                    placeholder='Mật khẩu'
                                    placeholderTextColor="#a8a29e"
                                />
                                {/* <Text style={mStyle.labelError}>error</Text> */}
                            </View>
                            <View style={mStyle.inputView}>
                                <TextInput
                                    style={mStyle.inputStyle}
                                    onChangeText={(text) => this.setState({ phoneNumber: text })}
                                    placeholder='Nhập lại mật khẩu'
                                    placeholderTextColor="#a8a29e"
                                />
                                {/* <Text style={mStyle.labelError}>error</Text> */}
                            </View>

                            <Button 
                                style={{marginTop: 20, marginBottom: 10, backgroundColor: '#dc2626', }} 
                                _text={{
                                    color: "#fef2f2",
                                    fontSize: 15,
                                    fontWeight: 600,
                                }}>
                                Đăng ký
                            </Button>
                        </View>
                    </View>
                    <View style={{height: 30}}/>
                </ScrollView>
           </View>
       );
  }
}
export default RegisterScreen;
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const mStyle = StyleSheet.create({
    viewContent: {
        width: '100%', 
        height: '100%', 
        backgroundColor: "white",
    },
   labelError: {
       fontSize: 12,
       color: "#dc2626",
       textAlign: 'right',
       marginTop: 5,
       paddingBottom: 10,
   },
   signUpText: {
       fontSize: 13,
       textAlign: 'right',
       color: '#ef4444',
       fontWeight: '600'
   },
   inputView: {
       height: 40,
       borderBottomWidth: 1,
       borderBottomColor: '#d6d3d1',
       marginBottom: 12 
   },
   logoImage: {
       width: 155,
       height: 155,
       marginBottom: screenHeight / 16
    },
    inputStyle: {
        color: '#262626',
        fontSize: 15,
        paddingVertical: 10
    }
});