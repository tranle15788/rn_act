/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from "react";
import { View } from "react-native";
import { HStack, Button, Text, Box } from "native-base";
import { IconFill, IconOutline } from "@ant-design/icons-react-native";

const AppHeader = (props) => {
  const {
    title,
    hasLeft,
    hasMenu,
    hasRight,
    hasTitle,
    hasRightQuotation,
    textRightQuotation,
    backPress,
    menuPress,
    rightPress,
  } = props;

  const menuButton = (
    <Button variant="unstyled" onPress={menuPress}>
      <IconOutline name="align-left" size={23} color="red" />
    </Button>
  );

  const backButton = (
    <Button variant="unstyled" onPress={backPress}>
      <IconOutline name="left" size={23} color="red" />
    </Button>
  );

  const rightButton = (
    <Button variant="unstyled" onPress={rightPress}>
      <IconFill name="bell" size={23} color="red" />
    </Button>
  );

  const rightButtonQuotation = (
    <Button variant="unstyled" onPress={rightPress} style={{paddingLeft: 0}}>
      <Text fontSize="12" style={{color:"red"}}>
        {textRightQuotation}
      </Text>
    </Button>
  );

  const titleContent = (
    <Text fontSize="17" fontWeight="bold" textAlign='center'>
      {title}
    </Text>
  );

  return (
    <>
      <Box safeAreaTop backgroundColor="white" />
      <View style={{ overflow: "hidden", paddingBottom: 5 }}>
        <View
          style={{
            backgroundColor: "#470000",
            height: 60,
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 3,
          }}
        >
          <HStack
            bg="white"
            px="1"
            py="3"
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack flex={1} alignItems="center">
              {hasMenu && menuButton}
              {hasLeft && backButton}
            </HStack>
            <HStack flex={0} justifyContent='center'>
              {hasTitle && titleContent}
            </HStack>     
            <HStack flex={1} justifyContent='flex-end'>
              {hasRightQuotation && rightButtonQuotation}
              {hasRight && rightButton}
            </HStack>
          </HStack>
        </View>
      </View>
    </>
  );
};

AppHeader.defaultProps = {
  title: "ACT",
  hasMenu: true,
  hasLeft: false,
  hasTitle: true,
  hasRight: false,
  hasRightQuotation: false,
  textRightQuotation: "",
  menuPress: () => null,
  backPress: () => null,
  rightPress: () => null,
};

export default AppHeader;
