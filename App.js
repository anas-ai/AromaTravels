import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {ListItem, Avatar} from '@rneui/themed';
import Home from './src/screen/Home';
import About from './src/screen/About';
import Services from './src/screen/Services';
import CarRent from './src/screen/CarRent';
import Excursion from './src/screen/Excursion';
import Tours from './src/screen/Tours';
import Contact from './src/screen/ContactScreen';
import Header from './src/components/Header';
import Economy from './src/screen/Economy';
import MidSize from './src/screen/MidSize';
import Luxury from './src/screen/Luxury';
import DeluxeCar from './src/screen/DeluxeCar';
import Kumbhalgarh from './src/screen/Kumbhalgarh';
import Ranakpur from './src/screen/Ranakpur';
import Ekling from './src/screen/Ekling';
import Chittorgarh from './src/screen/Chittorgarh';
import UdaipurDay from './src/screen/UdaipurDay';
import MountAbu from './src/screen/MountAbu';
import TourAccordin from './src/Accordion/TourAccordin';
import North from './src/screen/TourScreens/North';
import GoldenLeaf from './src/screen/TourScreens/GoldenLeaf';
import RoyalRajasthan from './src/screen/TourScreens/RoyalRajasthan';
import South from './src/screen/TourScreens/South';
import EconomyCars from './src/components/EconomyCars';
import {responsiveFontSize, responsiveScreenWidth} from 'react-native-responsive-dimensions';

const CommonHeaderTitle = () => (
  <View style={{marginLeft: widthPercentageToDP('10%')}}>
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

const CustomDrawerContent = props => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../aromatravels/src/images/website-logo.jpg')}
            style={styles.headerImage}
          />
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />

      {/* <View style={{marginTop:3}}>
        <TouchableOpacity
          style={{position: 'relative'}}
          onPress={() => navigation.goBack()}>
          <Icon
            name="close"
            size={18}
            style={{
              position: 'absolute',
              bottom: 300,
              left: 255,
              backgroundColor: '#808080',
              color: '#fff',
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
      </View> */}
      <RNEListItemAccordion navigation={navigation} />
      <ExcursionAccordion navigation={navigation} />
      <TourAccordin navigation={navigation} />
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
    fontSize: RFPercentage(1.7),
    color: 'gray',
    fontWeight:'700',
    marginLeft:responsiveScreenWidth(.5),
    
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
        height: heightPercentageToDP('6%'),
        borderBottomWidth: 0.2,
        borderColor: '#fff',
        elevation: 1,
        width: '100%',
        backgroundColor: '#00adef',
      },
    })}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color, size, focused}) => (
          <Icon
            name={(name = focused ? 'home-sharp' : 'home-outline')}
            size={(size = focused ? size + 4 : size + 0)}
            color={'#fff'}
          />
        ),
        tabBarLabel: 'Home',
        tabBarLabelStyle: {fontSize: RFPercentage(1.5), color: '#fff'},
      }}
    />
    {/* <Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarIcon: ({color, size, focused}) => (
          <Icon
            // name="information-circle-outline"
            name={(name = focused ? 'information' : 'information-circle-outline')}
            size={(size = focused ? size + 6 : size + 2)}
            color={'#fff'}
          />
        ),
        tabBarLabel: 'About',
        tabBarLabelStyle: {fontSize: RFPercentage(1.8), color: '#fff'},
      }}
    /> */}
    <Tab.Screen
      name="Services"
      component={Services}
      options={{
        tabBarIcon: ({color, size, focused}) => (
          <Icon
            name={(name = focused ? 'list-circle' : 'list-circle-outline')}
            size={(size = focused ? size + 4 : size + 0)}
            color={'#fff'}
          />
        ),
        tabBarLabel: 'Services',
        tabBarLabelStyle: {fontSize: RFPercentage(1.5), color: '#fff'},
      }}
    />
    <Tab.Screen
      name="CarRent"
      component={CarRent}
      options={{
        tabBarIcon: ({color, size, focused}) => (
          <Icon
            name={(name = focused ? 'car' : 'car-outline')}
            size={(size = focused ? size + 4 : size + 0)}
            color={'#fff'}
          />
        ),
        tabBarLabel: 'Car Rent',
        tabBarLabelStyle: {fontSize: RFPercentage(1.8), color: '#fff'},
      }}
    />
    <Tab.Screen
      name="Contact"
      component={Contact}
      options={{
        tabBarIcon: ({color, size, focused}) => (
          <Icon2
            name={(name = focused ? 'user-circle-o' : 'user-circle')}
            size={(size = focused ? size + 4 : size + 0)}
            color={'#fff'}
          />
        ),
        tabBarLabel: 'Contact',
        tabBarLabelStyle: {fontSize: RFPercentage(1.5), color: '#fff'},
      }}
    />
  </Tab.Navigator>
);

//car rent
function RNEListItemAccordion() {
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigation();

  return (
    <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title
              style={{
                fontSize: RFPercentage(1.7),
                color: 'gray',
                fontWeight:'700',
                marginLeft:responsiveScreenWidth(.5)
              }}>
              Car Rent
            </ListItem.Title>
            {/* <ListItem.Subtitle>Tap to expand</ListItem.Subtitle> */}
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Economy')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Economy Cars</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MidSize')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Mid-Size Cars</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Luxury')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Luxury Cars</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DeluxeCar')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Deluxe Coach </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </ListItem.Accordion>
    </>
  );
}

//Udaipur Excursion
function ExcursionAccordion() {
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigation();

  return (
    <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title
              style={{
                fontSize: RFPercentage(1.7),
                color: 'gray',
                fontWeight:'700',
                marginLeft:responsiveScreenWidth(.5)
              }}>
              Udaipur Excursion
            </ListItem.Title>
            {/* <ListItem.Subtitle>Tap to expand</ListItem.Subtitle> */}
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('UdaipurDay')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Udaipur Day Tour</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Kumbhalgarh')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Kumbhalgarh-Haldighati Tour</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Ranakpur')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Ranakpur Kumbhalgarh day tour</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Ekling')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>
                Eklingji Nathdwara Haldighati Tour{' '}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chittorgarh')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Chittorgarh Fort day tour</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MountAbu')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Mount Abu Tour</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </ListItem.Accordion>
    </>
  );
}

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerStyle={{
      backgroundColor: '#fff',
      width: widthPercentageToDP('100%'),
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name="Home"
      component={TabNavigator}
      options={{headerTitle: () => <CommonHeaderTitle />}}
    />
    <Drawer.Screen
      name="About"
      component={About}
      options={{headerTitle: () => <CommonHeaderTitle />}}
    />
    <Drawer.Screen
      name="Services"
      component={Services}
      options={{headerTitle: () => <CommonHeaderTitle />}}
    />
    {/* <Drawer.Screen
      name="Excursion"
      component={Excursion}
      options={{headerTitle: () => <CommonHeaderTitle />}}
    /> */}

    <Drawer.Screen
      name="Contact"
      component={Contact}
      options={{headerTitle: () => <CommonHeaderTitle />}}
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
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Economy"
          component={Economy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MidSize"
          component={MidSize}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Luxury"
          component={Luxury}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeluxeCar"
          component={DeluxeCar}
          options={{headerShown: false}}
        />
        {/* Excursion screens */}
        <Stack.Screen
          name="UdaipurDay"
          component={UdaipurDay}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Kumbhalgarh"
          component={Kumbhalgarh}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ranakpur"
          component={Ranakpur}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ekling"
          component={Ekling}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chittorgarh"
          component={Chittorgarh}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MountAbu"
          component={MountAbu}
          options={{headerShown: false}}
        />
        {/* Tour screen */}
        <Stack.Screen
          name="North"
          component={North}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="South"
          component={South}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GoldenLeaf"
          component={GoldenLeaf}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RoyalRajasthan"
          component={RoyalRajasthan}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

