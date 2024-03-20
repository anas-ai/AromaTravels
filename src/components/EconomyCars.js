import { ScrollView, View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import FontIcon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EconomyInfo = [
  {
    id: 1,
    image: require('../images/CarSliderImg/taxi-01.jpg'),
    title: 'Toyota Etios',
    text1: 'Air Conditioned',
    text2: 'Passengers: 4 (including Driver)',
    btnTxt: 'Book Now',
  },
  {
    id: 2,
    image: require('../images/CarSliderImg/taxi-02.jpg'),
    title: 'Maruti Swift Dzirey',
    text1: 'Air Conditioned',
    text2: 'Passengers: 4 (including Driver)',
    btnTxt: 'Book Now',
  },
  {
    id: 3,
    image: require('../images/CarSliderImg/taxi-07.jpg'),
    title: 'Hyundai Xcent',
    text1: 'Air Conditioned',
    text2: 'Passengers: 4 (including Driver)',
    btnTxt: 'Book Now',
  },
  
];


const EconomyCars = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
    
    <View style={{flex:0,alignItems:'center',justifyContent:'center'}}>
      <View style={styles.textContainer}>
          <Text style={{color: '#213e9a',
            fontSize: 30,
            fontWeight: '500',
            marginTop:20
            }}>Economy Cars</Text>
        </View>
        <View
          style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: -15,
              flexDirection: 'row',
              marginBottom:15
            }}>
          <View style={{paddingHorizontal: 12}}>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>_</Text>
          </View>
          <FontIcon name="car-sport" color={'#213e9a'} size={30} style={{marginTop:30}}/>
          <View>
            <Text style={{paddingLeft: 8, fontWeight: 'bold', marginBottom: 5}}>
              _
            </Text>
          </View>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {EconomyInfo.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
    
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text1}</Text>
                <Text style={styles.text}>{item.text2}</Text>
    
                <TouchableHighlight style={styles.button} onPress={()=>navigation.navigate('Contact')}>
                  <Text style={styles.buttonText}>{item.btnTxt}</Text>
                </TouchableHighlight>
              </View>
            </View>
          ))}
        </ScrollView>
    </View>
        </ScrollView>
      );
}

const styles = {
  container: {
      flex: 0,
    },
    textContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 40,
    },
    text: {
      color: '#213e9a',
      fontSize: 30,
      fontWeight: '500',
    },
    descriptionContainer: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    description: {
      lineHeight:22 ,
      textAlign: 'justify',
      color: '#999',
      fontWeight: 'bold',
    },
itemContainer: {
  borderWidth: 0.2,
  borderColor: '#000',
  margin: 10,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop:10
},
image: {
  height: 250,
  width: 300,
  resizeMode: 'cover',
},
textContainer: {
  alignContent: 'center',
  justifyContent: 'center',
  padding: 15,
},
title: {
  color: '#252525',
  fontWeight: 'bold',
  fontSize: 16,
  marginBottom: 10,
  textAlign: 'center',
},
text: {
  color: 'gray',
  fontSize: 14,
  marginBottom: 10,
  textAlign: 'center',
},
button: {
  backgroundColor: '#00adef',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  height: 50,
  marginTop:10,
  marginLeft:50
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight:'bold'
},
};

export default EconomyCars