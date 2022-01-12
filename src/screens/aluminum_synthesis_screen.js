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
  Heading,
  Pressable,
  Center,
  Flex,
  Stack,
} from "native-base";
import { isIphoneX } from 'react-native-iphone-x-helper'
import AppHeader from "../components/app_header";
const imgccessoriesCollection = require("../../assets/images/4.png");
class AluminumSynthesisScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width,
      isShowOptimalCutting: false,
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

    const ShowOptimalCutting = (
      <View>
        {this.state.isShowOptimalCutting ? (
          <Box mr={2}>
            <HStack mt={3}>
              <VStack mr={5}>
                <Text color="red.700" fontWeight={600} fontSize={16}>
                  1-
                </Text>
              </VStack>
              <VStack>
                <Text>
                  <HStack>
                    <VStack alignItems="center">
                      <Text color="red.700" fontSize={12}>
                        D1
                      </Text>
                      <Box bg="info.400" paddingX={3} paddingY={1} marginY={1}>
                        <Text color="black" fontSize={12}>
                          5675
                        </Text>
                      </Box>
                      <Text color="red.700" fontSize={12} mb={2}>
                        65
                      </Text>
                    </VStack>
                    <VStack>
                      <Text></Text>
                      <Box bg="yellow.200" paddingY={1} marginY={1}>
                        <Text color="yellow.200" fontSize={12}>
                          1
                        </Text>
                      </Box>
                      <Text mb={2}></Text>
                    </VStack>
                  </HStack>

                  <VStack alignItems="center">
                    <Text color="red.700" fontSize={12}>
                      Dư
                    </Text>
                    <Box paddingX={3} paddingY={1} marginY={1} bg="yellow.200">
                      <Text color="black" fontSize={12}>
                        1432434535
                      </Text>
                    </Box>
                    <Text mb={2}></Text>
                  </VStack>
                </Text>
              </VStack>
            </HStack>
          </Box>
        ) : (
          <View></View>
        )}
      </View>
    );
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
              
              <HStack justifyContent="space-between" >
                <Text flex={2} fontSize={15} mr={1}>
                  PMA - Cánh đi mở ngoài
                </Text>
                <Text flex={1} fontSize={15} textAlign="right">
                  1 Cây
                </Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text flex={2} fontSize={12} mr={1} color="info.900">
                  56456342
                </Text>
                <Text flex={1} fontSize={12} textAlign="right" color="red.600">
                  23.23 <Text color="light.400"> Kg</Text>
                </Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text flex={2} fontSize={12} mr={1} color="light.400">
                  0.99 (kg/m)
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Divider />
          {ShowOptimalCutting}
        </View>
      );
    }

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <AppHeader
          title="TỔNG HỢP NHÔM"
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
            <Text fontSize={12}>
              Kích thước cây nhôm: <Text fontSize={17}>24567 </Text>mm
            </Text>
            <Text fontSize={12}>
              Tổng trọng lượng nhôm: <Text fontSize={17}>99.20 </Text>kg
            </Text>
            {mylist}
          </Box>
        </ScrollView>
        <HStack alignItems="center" safeAreaBottom shadow={6} bg="red.600">
          <Pressable
            py="2"
            flex={1}
            onPress={() => this.setState({ isShowOptimalCutting: false })}
          >
            <Center>
              <Text color="white" fontSize="13" bold>
                Tổng hợp nhôm
              </Text>
            </Center>
          </Pressable>
          <Pressable
            py="3"
            flex={1}
            onPress={() => this.setState({ isShowOptimalCutting: true })}
            borderLeftWidth={1}
            borderLeftColor={"white"}
          >
            <Center>
              <Text color="white" fontSize="13" bold>
                Tối ưu cắt
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </>
    );
  }
}

export default AluminumSynthesisScreen;
