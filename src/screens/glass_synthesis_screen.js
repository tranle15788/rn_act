/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from "react";
import { View, Dimensions, Platform } from "react-native";
import {
  Box,
  Text,
  HStack,
  Divider,
  ScrollView,
  StatusBar,
  Image,
  VStack,
  Heading
} from "native-base";
import { isIphoneX } from 'react-native-iphone-x-helper'
import AppHeader from "../components/app_header";
const imgccessoriesCollection = require("../../assets/images/4.png");
class GlassSynthesisScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width,
    };

    this.onLayout = this.onLayout.bind(this);
  }
  onLayout(e) {
    this.setState({
      width: Dimensions.get("window").width,
    });
  }

  render() {
    const width = Dimensions.get("window").width;
    var mylist = [];
    for (let i = 1; i < 15; i++) {
      mylist.push(
        <View
          onLayout={this.onLayout}
          style={{ marginBottom: 5, marginTop: 10 }}
          key={i}
        >
          <HStack>
            <VStack mr={2} justifyContent="center">
              <Image
                source={imgccessoriesCollection}
                size={41}
                resizeMode="contain"
                alt="imgAccessoriesCollection"
              />
            </VStack>

            <VStack width={(width >= 600 && isIphoneX() && !Platform.isPad) ? width - 140 - 41 :width - 40 - 41} >
              <HStack justifyContent="space-between">
                <Text flex={1} fontSize={15} mr={1}>
                  D1 - 6
                </Text>
                <Text flex={1} fontSize={15} textAlign="right">
                  678 x 123
                </Text>
              </HStack>
              <HStack justifyContent="space-between">
          <Text flex={1} fontSize={12} mr={1} color="light.400">
            0.67 (m2)
          </Text>
          <Text flex={1}  fontSize={12} textAlign="right" color="red.600">
            1
          </Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text flex={1} fontSize={12} mr={1} color="info.900">
            cánh
          </Text>
          <Text flex={1}  fontSize={12} textAlign="right" color="info.900">
            123.444 Vnđ/m2
          </Text>
        </HStack>
            </VStack>
          </HStack>
          <Divider />
        </View>
      );
    }
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <AppHeader
          title="TỔNG HỢP KÍNH"
          backPress={() => this.props.navigation.goBack(null)}
          hasLeft={true}
          hasMenu={false}
          hasRightQuotation={true}
          textRightQuotation="Xuất file"
        />
        <ScrollView _contentContainerStyle={{ mb: "10" }} bg="white">
          <Box safeAreaRight safeAreaLeft margin={4}>
          <Heading size="sm" mb={1}>
              Tên công trình
            </Heading>
            <Text fontSize={12}>Số lượng: 6 - Tổng diện tích: 25.96 m2</Text>
            <Text fontSize={12}>
              Tổng tiền kính: 21.234.123 Vnđ
            </Text>
            {mylist}
          </Box>
        </ScrollView>
      </>
    );
  }
}

export default GlassSynthesisScreen;
