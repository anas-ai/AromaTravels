import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import React from 'react';
import FontIcon from 'react-native-vector-icons/AntDesign';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';

const width = Dimensions.get('window');
const CarBooking = [
  {
    label: 'City-Palace',
    image: require('../images/ExcursionImg/City-Palace.jpg'),
    text: 'This is largest palace in Rajasthan; the 16th century city palace of granite is situated on the EST bank of The Pichola Lake. In the past it was the winter resort of maharanas. The inner monuments are – The Shish Mahal,Krishna villa,Bhim villa,Choti chitrashali, Dilkush Mahal, Manak Mahal, Moti Mahal, Bari Mahal, the mosaic peacocks at the more Chowk, the Zenana Mahal, various glass and porcelain statues Of Manak or Rubi Mahal. There is a Government Museum at city palace and a wing of the palace houses the hotel. ',
    btnText: 'Book Now',
  },
  {
    label: 'Jag Mandir',
    image: require('../images/ExcursionImg/Jag-Mandir.jpg'),
    text: 'Opposite Jagniwas, on the south of pichola Lake, on another island is the 3 storeyed Jagmandir Palace, the site of celebrations which has a circular dome of yellow sandstone. Is lineel urtuin vesite marble. It was begun by Maharana Amar Singh 1615 and completed by Karan Singh in 1622. Later it was repaired by Karan’s son Jagat Singh 1628-52 and give named after him. Its remain prince Khurram’s(Shahjahan) refuge. The palace built by different 12 stones, mausoleum of saint Baba Gafoor and white elephants made of marble on the entrance gate are worth seeing. ',
    btnText: 'Book Now',
  },
  {
    label: 'Lake Pichola',
    image: require('../images/ExcursionImg/udaipur-sightseeing.jpg'),
    text: 'This beautiful garden, situated north-east of Fateh Sagar, was constructed by the emperor of Delhi Maharana Sangram Singh II in 1710-34 AD and presented to as Nazarana. Maharana Fateh Singh (1884-1930 AD) rebivate abd extended painings mirror, fountains and cenotaphs work. Princes with their friends come here for relaxation. The main attraction of this garden is 4 ponds, where lotuses bloom in profusion, four white marble elephants and a novel fountain which palters the water drops, reminds the impression of rain without rainfall. ',
    btnText: 'Book Now',
  },
  {
    label: 'Vintage Car Collection Udaipur',
    image: require('../images/ExcursionImg/Vintage-Car.jpg'),
    text: 'Vintage and Classic Car Museum is a car museum in Udaipur in Rajasthan state in India, having some of the rarest classic and vintage car collection. This museum is owned by Rana Sriji Arvind Singh Mewar.',
    btnText: 'Book Now',
  },
  {
    label: 'Saheliyon Ki Badi',
    image: require('../images/ExcursionImg/udaipur-fullday-sightseeing-tour-6.jpg'),
    text: 'Travel Aroma offer a complete tour Rajasthan Tour, Udaipur Sightseeing, Taxi Services in udaipur and event plan of some of the most desired destinations in Rajasthan, we ensure that your tour of rajasthan will be a truly memorable vacation in Udaipur Rajasthan India',
    btnText: 'Book Now',
  },
  {
    label: 'Fateh Sagar',
    image: require('../images/ExcursionImg/udaipur-fullday-sightseeing-tour-5.jpg'),
    text: 'Fateh Sagar connected to the pichola lake by a canal. It was built by Maharana Jai Singh in 1678, when floods destroyed the lake. It was dug a new by Maharana Fateh Singh at a cost of about 6 lakhs. The lake is 2.4 km. long, 1.6 km. wide and 25 feet deep. There is a car road along. Fateh Sagar’s embankment named as Rani Road. This elegant lake is surrounded on three sides by hills. There is good arrangement for boating facilities. In past time it was known as the Connaught Dam’. ',
    btnText: 'Book Now',
  },
  ,
];

const UdaipurDay = () => {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground
          source={require('../images/ExcursionImg/tour-banner.jpg')}
          style={{width: '100%', height: 120, resizeMode: 'contain'}}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              marginTop: 15,
              fontSize: 20,
              fontWeight: '700',
              letterSpacing: 2,
            }}>
            Udaipur Sightseeing Day Tour
          </Text>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Udaipur Sightseeing Day Tour » Day 1</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: -15,
            flexDirection: 'row',
          }}>
          <View style={{paddingHorizontal: 12}}>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>_</Text>
          </View>
          <FontIcon name="customerservice" color={'#213e9a'} size={25} />
          <View>
            <Text style={{paddingLeft: 8, fontWeight: 'bold', marginBottom: 5}}>
              _
            </Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            We offer complete solution for travel organization from scheduling
            to finishing we do it in our best possible way.
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          {CarBooking.map((data, index) => {
            return (
              <View
                key={index}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground
                  source={data.image}
                  style={{
                    height: responsiveScreenHeight(40),
                    width: responsiveScreenHeight(50),
                    resizeMode: 'contain',
                    marginTop: 40,
                  }}>
                  <Text
                    style={{
                      backgroundColor: '#00adef',
                      width: 220,
                      borderRadius: 8,
                      color: '#fff',
                      textAlign: 'center',
                      marginLeft: 18,
                      justifyContent: 'center',
                      marginTop:0 ,
                      fontSize:responsiveFontSize(1.9),
                      padding: 8,
                      fontWeight: '500',
                    }}>
                    {data.label}
                  </Text>
                </ImageBackground>
                <View>
                  <Text
                    style={{textAlign: 'justify', margin: 10, color: 'gray',}}>
                    {data.text}
                  </Text>
                </View>

                {/* <View>
                  <TouchableHighlight onPress={()=>navigation.navigate('Contact')}>
                    <Text
                      style={{
                        backgroundColor: '#00adef',
                        fontSize: 10,
                        padding: 10,
                        color: '#fff',
                        fontSize: 15,
                      }}>
                      {data.btnText}
                    </Text>
                  </TouchableHighlight>
                </View> */}
               
              </View>
            );
          })}

          <View style={{marginTop: 20}}>
            <TouchableHighlight onPress={()=>navigation.navigate('Contact')}>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: '#00adef',
                  color: '#fff',
                  fontWeight: 'normal',
                  // width:100
                  fontSize: 15,
                }}>
                Yes, I Want To Book This Tour!
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <Contact />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  text: {
    color: '#213e9a',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  descriptionContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    lineHeight: 35,
    textAlign: 'justify',
    color: '#999',
    fontWeight: 'bold',
  },
});

export default UdaipurDay;
