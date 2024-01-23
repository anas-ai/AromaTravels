import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = () => {

  
  const PhoneCall =()=>{
    Linking.openURL(`tel:+918949217986`)
  }

  const sendEmail = () => {
    Linking.openURL('mailto:travelaroma2@gmail.com');
  };

  return (
    <View
      style={{
        backgroundColor: '#00adef',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
        <TouchableOpacity onPress={PhoneCall}style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
        <Icon name="phone" color={'#fff'} size={15}></Icon>
        <Text style={{ color: '#fff', paddingLeft: 10 }}>+91 9664304937</Text>
        </TouchableOpacity>
        
      </View>

      <TouchableOpacity onPress={sendEmail} style={{ flexDirection: 'row' }}>
        <Entypo name="mail" color={'#fff'} size={15}></Entypo>
        <Text style={{ color: '#fff', paddingLeft: 10 }}>travelaroma2@gmail.com</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
