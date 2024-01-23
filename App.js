import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFPercentage , RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP , heightPercentageToDP } from 'react-native-responsive-screen';

import Home from './src/screen/Home';
import About from './src/screen/About';
import Services from './src/screen/Services';
import CarRent from './src/screen/CarRent';
import Excursion from './src/screen/Excursion';
import Tours from './src/screen/Tours';
import Contact from './src/screen/Contact';
import Header from './src/components/Header';

const CommonHeaderTitle = () => (
  <View style={{ marginLeft: widthPercentageToDP('10%') }}>
    <Image
      source={require('../aromatravels/src/images/website-logo.jpg')}
      style={{
        height: heightPercentageToDP('40%'),
        width: widthPercentageToDP('40%'),
        marginRight: widthPercentageToDP('2%'),
        resizeMode: 'contain',
        padding: widthPercentageToDP('3%'),
      }}
    />
  </View>
);

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require('../aromatravels/src/images/website-logo.jpg')}
          style={styles.headerImage}
        />
        {/* <Text style={styles.headerText}>AROMA TRAVEL</Text> */}
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: heightPercentageToDP('12%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: widthPercentageToDP('45%'),
    height: heightPercentageToDP('45%'),
    borderRadius: widthPercentageToDP('7.5%'),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: RFPercentage(2.5),
    fontWeight: 'bold',
    color: '#252525',
  },
});

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={() => ({
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: true,
      headerShown: false,
      tabBarStyle: {
        height: heightPercentageToDP('8%'),
        borderBottomWidth: 0.2,
        borderColor: '#fff',
        elevation: 1,
        width: '100%',
        backgroundColor: '#000',
      },
    })}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name="home-sharp" size={size = focused ? size + 8 : size + 2 } color={'#fff'} />
        ),
        tabBarLabel: 'Home',
        tabBarLabelStyle: { fontSize: RFPercentage(1.8), color: '#fff' },
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name="information-circle-outline" size={size = focused ? size + 8 : size + 2} color={'#fff'} />
        ),
        tabBarLabel: 'About',
        tabBarLabelStyle: { fontSize: RFPercentage(1.8), color: '#fff' },
      }}
    />
    <Tab.Screen
      name="Services"
      component={Services}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name="list-circle-outline" size={size = focused ? size + 8 : size + 2} color={'#fff'} />
        ),
        tabBarLabel: 'Services',
        tabBarLabelStyle: { fontSize: RFPercentage(1.8), color: '#fff' },
      }}
    />
    <Tab.Screen
      name="CarRent"
      component={CarRent}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name="car-outline" size={size=focused ? size+8 : size+2} color={'#fff'} />
        ),
        tabBarLabel: 'Car Rent',
        tabBarLabelStyle: { fontSize: RFPercentage(1.8), color: '#fff' },
      }}
    />
    <Tab.Screen
      name="Contact"
      component={Contact}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon name="person-circle-outline" size={size = focused ? size + 4 : size + 2} color={'#fff'} />
        ),
        tabBarLabel: 'Contact',
        tabBarLabelStyle: { fontSize: RFPercentage(1.8), color: '#fff' },
      }}
    />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerStyle={{
      backgroundColor: '#fff',
      width: widthPercentageToDP('80%'),
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Home"
      component={TabNavigator}
      options={{ headerTitle: () => <CommonHeaderTitle /> }}
    />
    <Drawer.Screen
      name="About"
      component={About}
      options={{ headerTitle: () => <CommonHeaderTitle /> }}
    />
    <Drawer.Screen
      name="Services"
      component={Services}
      options={{ headerTitle: () => <CommonHeaderTitle /> }}
    />
    <Drawer.Screen
      name="Excursion"
      component={Excursion}
      options={{ headerTitle: () => <CommonHeaderTitle /> }}
    />
    <Drawer.Screen
      name="Tours"
      component={Tours}
      options={{ headerTitle: () => <CommonHeaderTitle /> }}
    />
    <Drawer.Screen
      name="Contact"
      component={Contact}
      options={{ headerTitle: () => <CommonHeaderTitle /> }}
    />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
