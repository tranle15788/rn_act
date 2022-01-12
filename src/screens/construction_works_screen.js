/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Dimensions, View } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
  Box,
  Button,
  HStack,
  Checkbox,
  Image,
  ScrollView,
  StatusBar,
  Text,
  Modal,
  Input,
  Pressable,
  FormControl,
  Center,
  AlertDialog,
} from "native-base";
import { useState } from "react";
import AppHeader from "../components/app_header";
const imgListDoor = require("../../assets/images/img_dscua.png");
const imgAluminumSynthesis = require("../../assets/images/img_nhom.png");
const imgGlassSynthesis = require("../../assets/images/img_kinh.png");
const imgAccessoriesCollection = require("../../assets/images/img_phukien.png");
const imgQuotation = require("../../assets/images/img_baogia.png");
class ConstructionWorksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width,
      modalVisible: false,
      modalConstructionVisible: false,
      isOpen: false,
    };
    this.onLayout = this.onLayout.bind(this);
  }

  onLayout(e) {
    this.setState({
      width: Dimensions.get("window").width,
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setModalConstructionVisible(visible) {
    this.setState({ modalConstructionVisible: visible });
  }

  onClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { width, isOpen } = this.state;
    var myloop = [];
    for (let i = 1; i < 11; i++) {
      myloop.push(
        <View onLayout={this.onLayout} style={{ marginBottom: 10 }} key={i}>
          <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
            <Text isTruncated ml={2} fontSize={17}>
              {i}. Test
            </Text>
          </Checkbox>
          <HStack justifyContent="space-evenly">
            <Button
              variant="unstyled"
              onPress={() => this.props.navigation.push("list_door")}
            >
              <Image
                source={imgListDoor}
                size={[(width - 50) / 5, (width - 160) / 5]}
                resizeMode="contain"
                alt="imgListDoor"
              />
            </Button>
            <Button
              variant="unstyled"
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Image
                source={imgAluminumSynthesis}
                size={[(width - 50) / 5, (width - 160) / 5]}
                resizeMode="contain"
                alt="imgAluminumSynthesis"
              />
            </Button>
            <Button
              variant="unstyled"
              onPress={() => this.props.navigation.push("glass_synthesis")}
            >
              <Image
                source={imgGlassSynthesis}
                size={[(width - 50) / 5, (width - 160) / 5]}
                resizeMode="contain"
                alt="imgGlassSynthesis"
              />
            </Button>
            <Button
              variant="unstyled"
              onPress={() =>
                this.props.navigation.push("accessories_collection")
              }
            >
              <Image
                source={imgAccessoriesCollection}
                size={[(width - 50) / 5, (width - 160) / 5]}
                resizeMode="contain"
                alt="imgAccessoriesCollection"
              />
            </Button>
            <Button
              variant="unstyled"
              onPress={() => this.props.navigation.push("quotation")}
            >
              <Image
                source={imgQuotation}
                size={[(width - 50) / 5, (width - 160) / 5]}
                resizeMode="contain"
                alt="imgQuotation"
              />
            </Button>
          </HStack>
        </View>
      );
    }
    const modalAluminum = (
      <Modal
        isOpen={this.state.modalVisible}
        onClose={() => this.setModalVisible(!this.state.modalVisible)}
        avoidKeyboard
      >
        <Modal.Content maxWidth="400px">
          <Modal.Header textAlign="center">Kích thước cây nhôm</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input placeholder="Kích thước (mm)" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                Huỷ
              </Button>
              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.navigation.push("aluminum_synthesis");
                }}
              >
                Đồng ý
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
    const modalConstruction = (
      <Modal
        isOpen={this.state.modalConstructionVisible}
        onClose={() =>
          this.setModalConstructionVisible(!this.state.modalConstructionVisible)
        }
        avoidKeyboard
      >
        <Modal.Content maxWidth="400px">
          <Modal.Header textAlign="center">Thêm công trình</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input placeholder="Thêm công trình" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  this.setModalConstructionVisible(
                    !this.state.modalConstructionVisible
                  );
                }}
              >
                Huỷ
              </Button>
              <Button
                onPress={() => {
                  this.setModalConstructionVisible(
                    !this.state.modalConstructionVisible
                  );
                }}
              >
                Đồng ý
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
    const alertBeforeDelete = (
      <AlertDialog
        leastDestructiveRef={this.cancelRef}
        isOpen={isOpen}
        onClose={this.onClose}
      >
        <AlertDialog.Content bg="white">
          <AlertDialog.Body mt="3">
            {/* Vui lòng chọn công trình bạn muốn xoá */}
            Bạn có muốn xoá công trình
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
              <Button
                colorScheme="danger"
                variant="ghost"
                onPress={this.onClose}
              >
                Đồng ý
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    );

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <AppHeader
          title="DANH SÁCH CÔNG TRÌNH"
          menuPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
          hasRight={true}
        />
        <ScrollView _contentContainerStyle={{ mb: "4" }} bg="white">
          <Box safeAreaRight safeAreaLeft margin={4}>
            {myloop}
          </Box>
        </ScrollView>
        <HStack alignItems="center" safeAreaBottom shadow={6} bg="red.600">
          <Pressable
            py="2"
            flex={1}
            onPress={() =>  this.setModalConstructionVisible(!this.state.modalConstructionVisible)}
          >
            <Center>
              <Text color="white" fontSize="13" bold>
                Thêm công trình
              </Text>
            </Center>
          </Pressable>
          <Pressable
            py="3"
            flex={1}
            onPress={() => this.setState({ isOpen: !isOpen })}
            borderLeftWidth={1}
            borderLeftColor={"white"}
          >
            <Center>
              <Text color="white" fontSize="13" bold>
                Xoá công trình
              </Text>
            </Center>
          </Pressable>
        </HStack>
        {modalAluminum}
        {modalConstruction}
        {alertBeforeDelete}
      </>
    );
  }
}

export default ConstructionWorksScreen;
