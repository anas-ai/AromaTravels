import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import FontIcon from 'react-native-vector-icons/AntDesign';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CarBooking = [
  {
    label: 'Car Rental Services',
    image: require('../images/serviceImg/tata-indigo.jpg'),
    text: 'Our services offer a latest brand of Car including Luxury, Hatchbacks, Sedans, SUVs and 8 seat MPVs. In our Luxury fleet we have Imported & super luxury Minivan with brand names Mercedes, Toyota, Volkswagen, Fiat, Nissan, Mitsubishi and Force Tempo Travelers for rent.',
    btnText: 'Book Now',
  },
  {
    label: 'Flight Tickets',
    image: require('../images/serviceImg/flight.jpg'),
    text: 'Welcome to Travel Aroma Flight Tickets services section.We provide Air ticketing services as per availability.',
    btnText: 'Book Now',
  },
  {
    label: 'Train Ticketing',
    image: require('../images/serviceImg/train.jpg'),
    text: 'Welcome to Travel Aroma Train Tickets services section. We provide train ticketing services as per availability.',
    btnText: 'Book Now',
  },
  {
    label: 'Cooking Demonstration',
    image: require('../images/serviceImg/cocking.jpg'),
    text: 'COOKING LESSONS WITH DEMONSTRATION OF INDIAN DISHES. Its is about typical home-style Indian cooking where you can choose to Participate in the cooking or merely watch and learn. You have chance to visit local market and buy your choice of food and get it cook by yourself.',
    btnText: 'Book Now',
  },
  {
    label: 'Tour Package Services',
    image: require('../images/serviceImg/tour.jpg'),
    text: 'Travel Aroma offer a complete tour Rajasthan Tour, Udaipur Sightseeing, Taxi Services in udaipur and event plan of some of the most desired destinations in Rajasthan, we ensure that your tour of rajasthan will be a truly memorable vacation in Udaipur Rajasthan India',
    btnText: 'Book Now',
  },
  {
    label: 'Event Management',
    image: require('../images/serviceImg/event.jpg'),
    text: 'Travel Aroma Management has come a long way in the field of Event Management. Formed by young and dedicated team of enthusiasts; Who believe in giving their best shot in doing things differently and in a very professional way. We offer full Event Management, Corporate Event, Catering & more services from initial strategy development, through to event execution, performance monitoring and analysis of results. Our objective is to develop innovative and cost effective services that offer expanding business the means to organize successful marketing and corporate communications programmes.',
    btnText: 'Book Now',
  },
  {
    label: 'Hotel Accommodation',
    image: require('../images/serviceImg/hotel.jpg'),
    text: 'We provide hotel accommodation not only with best deals but also with great comfort where you feel like home away from home.',
    btnText: 'View More',
  },
  {
    label: 'Stay With Indian Family',
    image: require('../images/serviceImg/indian.jpg'),
    text: 'The "Samay" is situated in the surroundings of nature provides guests with a unique opportunity to experience real Indian life and culture. Come stay for some time and experience the true colors of rich cultural heritage and feel the warmth of homely love and affection to cherish for lifetime.',
    btnText: 'Book Now',
  },
];

const Services = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground
          source={require('../images/aboutImg/about-banner.jpg')}
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
            Services
          </Text>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Our services</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: responsiveScreenHeight(0.1),
            flexDirection: 'row',
          }}>
          <View style={{paddingHorizontal: 12}}>
            <Text
              style={{
                fontWeight: 'bold',
                marginHorizontal: responsiveScreenWidth(0.1),
              }}>
              _
            </Text>
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
                    height: responsiveHeight(25),
                    width: responsiveHeight(46),
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
                      fontSize: responsiveFontSize(1.5),
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
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: '#00adef',
                  color: '#fff',
                  fontWeight: 'normal',
                  // width:100
                  fontSize: 15,
                }}>
                Yes, I Want To Book This Service!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <Contact/> */}
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
    marginVertical: 5,
  },
  text: {
    color: '#213e9a',
    fontSize: responsiveFontSize(4),
    fontWeight: '500',
  },
  descriptionContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    lineHeight: responsiveScreenHeight(3),
    letterSpacing:responsiveScreenHeight(0.01),
    width: responsiveScreenWidth(90),
    textAlign: 'justify',
    color: '#999',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.6), // 
  },
});

export default Services;
