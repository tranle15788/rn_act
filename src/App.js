/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import SplashScreen from './screens/splash_screen';
import LoginScreen from './screens/login_screen';
import RegisterScreen from './screens/register_screen';
import MyDrawer from './components/my_drawer';
import ListDoorScreen from './screens/door_list_screen';
import SizeDoorScreen from './screens/door_size_screen';
import AluminumSelectScreen from './screens/aluminum_select_screen';
import DetailDoorScreen from './screens/door_detail_screen';
import AccessorySettingScreen from './screens/accessory_setting_screen';
import ChooseDoorScreen from './screens/door_choose_screen';
import ModalImgView from './screens/modal_imgview_screen';
import QuotationScreen from './screens/quotation_screen';
import AccessoriesCollectionScreen from './screens/accessories_collection_screen';
import GlassSynthesisScreen from './screens/glass_synthesis_screen';
import AluminumSynthesisScreen from './screens/aluminum_synthesis_screen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <NativeBaseProvider>
        <Stack.Navigator
          initialRouteName="splash"
          screenOptions={{gestureEnabled: false, headerShown: false}}>
          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen name="my_drawer" component={MyDrawer} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="register" component={RegisterScreen} />
          <Stack.Screen name="list_door" component={ListDoorScreen} />
          <Stack.Screen name="size_door" component={SizeDoorScreen} />
          <Stack.Screen
            name="aluminum_select"
            component={AluminumSelectScreen}
          />
          <Stack.Screen name="detail-door" component={DetailDoorScreen} /> 
          <Stack.Screen
            name="accessory_setting"
            component={AccessorySettingScreen}
          /> 
          <Stack.Screen name="choose_door" component={ChooseDoorScreen} /> 
          <Stack.Screen name="modal_img" component={ModalImgView} /> 
          <Stack.Screen name="quotation" component={QuotationScreen} /> 
          <Stack.Screen
            name="accessories_collection"
            component={AccessoriesCollectionScreen}
          /> 
          <Stack.Screen
            name="glass_synthesis"
            component={GlassSynthesisScreen}
          /> 
          <Stack.Screen
            name="aluminum_synthesis"
            component={AluminumSynthesisScreen}
          /> 
        </Stack.Navigator> 
      </NativeBaseProvider> 
    </NavigationContainer>
  );
}

export default App;
