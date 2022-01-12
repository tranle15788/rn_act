import * as React from "react";
import { DrawerActions, TouchableOpacity } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  Button,
  Box,
  Pressable,
  Heading,
  VStack,
  Text,
  HStack,
  Divider,
  Avatar,
  ZStack,
  IconButton,
  Image,
} from "native-base";
import { IconOutline } from "@ant-design/icons-react-native";
import ConstructionWorksScreen from "../screens/construction_works_screen";
import AluminumCrossSectionScreen from "../screens/aluminum_cross_section_screen";
import MessageScreen from "../screens/message_screen";
import { position } from "native-base/lib/typescript/theme/styled-system";

const avatar = require("../../assets/images/01.jpg");
const Drawer = createDrawerNavigator();

// list icon
const getIcon = (screenName) => {
  switch (screenName) {
    case "construction_works":
      return "unordered-list";
    case "aluminum_cross_section":
      return "copy";
    case "message_screen":
      return "message";
    default:
      return undefined;
  }
};

// list name
const getName = (screenName) => {
  switch (screenName) {
    case "construction_works":
      return "Danh sách công trình";
    case "aluminum_cross_section":
      return "Mặt cắt nhôm";
    case "message_screen":
      return "Liên hệ hỗ trợ";
    default:
      return undefined;
  }
};


class MyDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
      <Drawer.Navigator
        // custom drawer
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            {/*  header */}
            <HStack ml="3" mr="5" mt="3">
              <Box width="20%">
                <ZStack>
                  <Avatar
                    alignSelf="center"
                    bg="amber.500"
                    size="lg"
                    source={avatar}
                  ></Avatar>
                  <IconButton
                    // onPress={() => this.chooseDocumentFromCamera()}
                    top={10}
                    right={-10}
                    borderRadius="full"
                    bg="#rgba(143, 143, 143, 0.6)"
                    colorScheme="gray"
                    variant="solid"
                    color="#fff"
                    icon={
                      <IconOutline
                        name="edit"
                        size={12}
                        color="#fff"
                        textAlign="center"
                      />
                    }
                  />
                </ZStack>
              </Box>
              <VStack width="80%" ml="5">
                <Box>
                  <Text color="gray.700" fontSize="xs" isTruncated>
                    Xin chào
                  </Text>
                  <HStack justifyContent="space-between">
                    <Text
                      bold
                      color="gray.700"
                      isTruncated
                      fontSize="lg"
                      width="80%"
                    >
                      Admin
                    </Text>
                    <Button variant="unstyled"
                     onPress={() => this.props.navigation.push("login")}
                    >
                      <IconOutline name="logout" size={18} />
                    </Button>
                  </HStack>
                  <Text color="gray.700" fontSize="sm" isTruncated>
                    admin@gmail.com
                  </Text>
                </Box>
              </VStack>
            </HStack>
            <Divider my="2" />
            {/* content menu */}
            <VStack space="3">
              {props.state.routeNames.map((name, index) => (
                <Pressable
                  key={index}
                  px="5"
                  py="3"
                  rounded="md"
                  bg={index === props.state.index ? "#fef2f2" : "transparent"}
                  onPress={(event) => {
                    props.navigation.navigate(name);
                  }}
                >
                  <HStack space="7" alignItems="center">
                    <IconOutline
                      name={getIcon(name)}
                      size={18}
                      color={index === props.state.index ? "#dc2626" : "black"}
                    />
                    <Text
                      fontWeight="500"
                      color={index === props.state.index ? "#dc2626" : "black"}
                    >
                      {getName(name)}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack>

            <Heading textAlign="center" size="sm" mt="10" color="red.500">
              Hotline: 0977853869
            </Heading>
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen
          name="construction_works"
          component={ConstructionWorksScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="aluminum_cross_section"
          component={AluminumCrossSectionScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="message_screen"
          component={MessageScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    );
  }
}

export default MyDrawer;
