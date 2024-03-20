import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import FontIcon from 'react-native-vector-icons/Ionicons';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

const MidSizeInfo = [
  {
    id: 1,
    image: require('../images/CarSliderImg/taxi-04.jpg'),
    title: 'Toyota Innova Crysta',
    text1: 'Air Conditioned',
    text2: 'Passengers: 4 (including Driver)',
    btnTxt: 'Book Now',
  },
  {
    id: 2,
    image: require('../images/CarSliderImg/taxi-03.jpg'),
    title: 'Toyota Innova',
    text1: 'Air Conditioned',
    text2: 'Passengers: 4 (including Driver)',
    btnTxt: 'Book Now',
  },
  {
    id: 3,
    image: require('../images/CarSliderImg/taxi-08.jpg'),
    title: 'Chevrolet Tavera',
    text1: 'Air Conditioned',
    text2: 'Passengers: 4 (including Driver)',
    btnTxt: 'Book Now',
  },
];

const MidSize = () => {

  const navigation = useNavigation(); 



  const handleBackButton = () => {
    navigation.goBack(); 
  };


  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={handleBackButton}>
              <FontIcon name="arrow-back" color={'#213e9a'} size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={{
              color: '#213e9a',
              fontSize: 30,
              fontWeight: '500',
              marginTop: 20,
            }}>Mid-Size Cars</Text>
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: -15,
            flexDirection: 'row',
            marginBottom: 15,
          }}>
            <View style={{ paddingHorizontal: 12 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>_</Text>
            </View>
            <FontIcon name="car-sport" color={'#213e9a'} size={30} style={{ marginTop: 30 }} />
            <View>
              <Text style={{ paddingLeft: 8, fontWeight: 'bold', marginBottom: 5 }}>
                _
              </Text>
            </View>
          </View>

          <ScrollView  showsVerticalScrollIndicator={false}>
            {MidSizeInfo.map((item, index) => (
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
      <Footer />
    </View>
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
  backButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    zIndex: 1,
  },
  descriptionContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    lineHeight: 22,
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
    marginTop: 10,
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
    marginTop: 10,
    marginLeft: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
};

export default MidSize;
