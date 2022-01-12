/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from "react";
import { View } from "react-native";
import {
  Box,
  Text,
  HStack,
  Divider,
  ScrollView,
  StatusBar,
  Heading,
  VStack,
} from "native-base";
import AppHeader from "../components/app_header";

class QuotationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var mylist = [];
    for (let i = 1; i < 11; i++) {
      mylist.push(
        <VStack mt={2} key={i}>
        <HStack justifyContent="space-between">
          <Text flex={1} fontSize={15} mr={1}>
            S1 - Khung Inox
          </Text>
          <Text flex={1} color="red.500" fontSize={15} textAlign="right">
            1.234.321 Vnđ
          </Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text flex={1} fontSize={12} mr={1} color="light.400">
            680 x 150
          </Text>
          <Text flex={1}  fontSize={12} textAlign="right" color="light.400">
            1
          </Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text flex={1} fontSize={12} mr={1} color="info.900">
            1.02 m2
          </Text>
          <Text flex={1}  fontSize={12} textAlign="right" color="info.900">
            1.234.123 Vnđ/m2
          </Text>
        </HStack>
        <Divider />
      </VStack>
      );}
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <AppHeader
          title="BẢNG BÁO GIÁ"
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
            <Text fontSize={12}>Đơn giá: 567.566 Vnđ/m2</Text>
            <Text fontSize={12}>
              Tổng tiền: <Text color="red.500">21.234.123 Vnđ</Text>
            </Text>
            {mylist}
          </Box>
        </ScrollView>
      </>
    );
  }
}

export default QuotationScreen;
