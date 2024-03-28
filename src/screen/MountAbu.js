import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import FontIcon from 'react-native-vector-icons/Foundation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, useResponsiveScreenWidth } from 'react-native-responsive-dimensions';


const CarBooking = [
  {
    label: 'The Nakki Lake',
    image: require('../images/ExcursionImg/mount-abu.jpg'),
    text:'On the way to the market from sunset point is the Nakki Lake. This artificial lake at the heart of the city and surrounded by hills has a few islets emerging from water. As per legend it was dug out by Gods with their nails. The lake is focul point of tourists. Tourists can enjoy boating here. ',
       btnText: 'Book Now',
  },
  {
    label: 'Toad Rock',
    image: require('../images/ExcursionImg/Toad-Rock.jpg'),
   text:' It is a toad shaped rock stands over hanging in the south of the Nakki Lake. Nun Rock, near the tennis court of Rajputana Club is another attractive rock seems like a valid nun. The beautiful park is called Gandhi Park, other parks are Ashok Vatika, Municipal Park, Shaitan Singh Park and Terrace Garden.',
      btnText: 'Book Now',
  },
  {
    label: 'Adhar Devi Temple',
    image: require('../images/ExcursionImg/Adhar-Devi-Temple.jpg'),
   text:' It is situated 3 km away on the way to Kodarma Dam. A flight of 220 steps leads to the entrance gate carved out a hill. The deity is Durga, worshiped as Adhardevi or Arbudadevi. The temple ofters a beautiful view of the city. ',
        btnText: 'Book Now',
  },
  {
    label: 'Achalgarh Fort',
    image: require('../images/ExcursionImg/Achalgarh-Fort.jpg'),
  text:'  (10 km) Fort was built by Rana Kumbha in the 14th Century is connected by road from Mt. Abu. Beautiful temples of Achleshwar Maharaj, Kantinath Jain Temple and Mandakini kund, Meera & Chamundi are worth seeing. ',
         btnText: 'Book Now',
  },
  {
    label: 'Sunset Point',
    image: require('../images/ExcursionImg/Sunset-Point.jpg'),
   text:' Situated in the west of city, within walking distance towards Rest House is Sunset Point, Where plateform is constructed to view the sunset. The tourists can enjoy to see the sun going down in a colourful manner. ',
           btnText: 'Book Now',
  },
  {
    label: 'Guru Shikar',
    image: require('../images/ExcursionImg/Guru-Shikar.jpg'),
  text: '  The highest peak (1722 m) in Rajasthan is 15 km away from the city. There is a temple of Brahma-Vishnu-Maheshwar here. A top is Atri Rishi Temple, which preserves the foot print of Guru Dattatreya. You can see a beautiful view of the Mount Abu and its surroundings from here. ',
         btnText: 'Book Now',
  },
  ,
];

const MountAbu = () => {
  const navigation = useNavigation();
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
            Mount Abu Tour
          </Text>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Mount Abu Tour day tour » Day 1 </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: -15,
            flexDirection: 'row',
          }}>
         <View style={{paddingHorizontal: 12}}>
            <Text style={{fontWeight: 'bold', marginBottom: 5,color:'#213e9a'}}>_</Text>
          </View>
          <FontIcon name="map" color={'#213e9a'} size={25} />
          <View>
            <Text style={{paddingLeft: 8, fontWeight: 'bold', marginBottom: 5,color:'#213e9a'}}>
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
                    height: responsiveScreenHeight(25),
                    width: responsiveScreenHeight(45),
                    resizeMode: 'contain',
                    marginTop: 15,
                  }}>
                <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      position: 'absolute',
                      top: responsiveWidth(0.1),
                      left: responsiveWidth(10),
                      fontSize: responsiveFontSize(1.8),
                      padding: responsiveWidth(1),
                      textShadowColor: '#252525',
                      textShadowOffset: {width: 3, height: 2},
                      textShadowRadius: 5,
                      textAlign: 'center',
                      marginLeft: responsiveFontSize(-5),
                      // borderRadius: responsiveWidth(10),
                      backgroundColor: '#00adef',
                    }}>
                    {data.label}
                  </Text>
                </ImageBackground>
                <View>
                  <Text
                    style={{textAlign: 'justify', margin: 10, color: 'gray',letterSpacing:.2}}>
                    {data.text}
                  </Text>
                </View>

                {/* <View>
                  <TouchableOpacity>
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
                  </TouchableOpacity>
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
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    textAlign: 'center',
  },
  descriptionContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description:{
    lineHeight: responsiveScreenHeight(3),
    letterSpacing:responsiveScreenHeight(0.01),
    width: responsiveScreenWidth(90),
    textAlign: 'justify',
    color: '#999',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.6), // 
  },
});

export default MountAbu;
