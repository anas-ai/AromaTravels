import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const Call = () => {

  
  const PhoneCall =()=>{
    Linking.openURL(`tel:+919664304937`)
  }

 

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
        <Icon name="phone-alt" color={'#fff'} size={15}></Icon>
        <Text style={{ color: '#fff', paddingLeft: 10 }}>+91 9664304937</Text>
        </TouchableOpacity>
        
      </View>

      
    </View>
  );
};

export default Call;
