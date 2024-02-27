import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Icontwo from 'react-native-vector-icons/Zocial';


const Footer = () => {
  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.title}>Quick Link</Text>
        <Text style={styles.text}>Home</Text>
        <Text style={styles.text}>Udaipur Activities</Text>
        <Text style={styles.text}>Rajasthan Package</Text>
        <Text style={styles.text}>Our Services</Text>
        <Text style={styles.text}>About Us</Text>
        <Text style={styles.text}>Contact</Text>
      </View>
      <View>
        <Text style={styles.title}>Day Tours</Text>
        <Text style={styles.text}>Udaipur Day Tour</Text>
        <Text style={styles.text}>Kumbhalgarh-Haldighati Tour</Text>
        <Text style={styles.text}>Ranakpur-Kumbhalgarh Tour</Text>
        <Text style={styles.text}>Ekling Ji-Haldighati-Nathdwara Tour</Text>
        <Text style={styles.text}>Chittorgarh Day Tour</Text>
        <Text style={styles.text}>Mount Abu Day Tour</Text>
      </View>
      <View>
        <Text style={styles.title}>Car Rental</Text>
        <Text style={styles.text}>Toyota Etios</Text>
        <Text style={styles.text}>Swift Dzire</Text>
        <Text style={styles.text}>Toyota Innova</Text>
        <Text style={styles.text}>Toyota Innova Crysta</Text>
        <Text style={styles.text}>Tempo Traveller</Text>
        <Text style={styles.text}>Mini Bus</Text>
      </View>

      <View style={{}}>
        <Text style={styles.title}>Need Travel Help ?</Text>
        <View></View>
        <Icon style={styles.iconText} name='tree' color='#00adef' size={20}><Text style={{ color: 'white', fontSize: 22 }}> Travel Aroma</Text></Icon>
        <Entypo style={styles.iconText} name='location-pin' color="#00adef" size={25}><Text style={styles.text3}> B-143, Amar Nagar, Sajjan Garh Road, Udaipur,(Raj.)313001, INDIA</Text></Entypo>
        <Icon style={styles.iconText} name='whatsapp' color='#00adef' size={25}><Text style={styles.text}>  +91 9664304937</Text></Icon>
        <Icon style={styles.iconText} name='phone' color='#00adef' size={25}><Text style={styles.text}>  +91 8290187159</Text></Icon>
        <Entypo style={styles.iconText} name='mail' color='#00adef' size={25}><Text style={styles.text} > info@travelaroma.in</Text></Entypo>
      </View> */}

      {/* <View style={{borderTopWidth:0.5,borderColor:'white',margin:10,paddingTop:8}}><Text style={styles.text2}>© 2020 Travel Aroma. All rights reserved</Text> */}
      <View>
      <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}> 
      <Icontwo style={{margin:10,paddingBottom:8}} name='facebook' size={20} color="white"/>
      <Entypo  style={{margin:10}} name='tripadvisor' size={22} color="white"/>
      <Entypo  style={{margin:10}} name='instagram' size={18} color="white"/>
      <Icon  style={{margin:10}} name="google-plus" size={20} color="white"/>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'

  },
  title: {
    color: '#00adef',
    fontSize: 22,
    margin: 12,
    fontWeight: 'light'
  },
  text: {
    color: 'white',
    fontSize: 17,
    margin: 1.5,
    marginLeft: 15,
    fontWeight: 'light',
    },
    text2: {
      color: 'white',
      fontSize: 17,
      margin: 1.5,
      marginLeft: 15,
      fontWeight: 'light',
      textAlign:'center',
      },
      text3: {
        color: 'white',
        fontSize: 16,
        margin: 1.5,
        marginLeft: 15,
        fontWeight: 'light',
        // fontWeight:'300'
        },
  iconText: {
    color: '#00adef',
    fontSize: 17,
    margin: 1.5,
    marginLeft: 15,
    fontWeight: 'light',
    marginVertical: 10,

  }
})

export default Footer