import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import Welcome from '../components/Welcome';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MultiSlider from '../components/MultiSlider';
import CarSlider from '../components/CarSlider';

const Home = () => {
  const images = [
    require('../images/banner1.jpg'),
    require('../images/banner3.jpg'),
    require('../images/banner6.jpg'),
    require('../images/banner7.jpg'),
  ];

  const HomeImages = [
    {
      name: 'CITY PALACE',
      image: require('../images/City-Palace.jpg'),
    },
    {
      name: 'JAG MANDIR',
      image: require('../images/Jag-Mandir.jpg'),
    },
    {
      name: 'LAKE PICHOLA',
      image: require('../images/Lake-Pichola.jpg'),
    },
    {
      name: 'VINTAGE CAR',
      image: require('../images/Vintage-Car.jpg'),
    },
    {
      name: 'SAHELIYON BADI',
      image: require('../images/Saheliyon-Badi.jpg'),
    },
    {
      name: 'FATEH SAGAR',
      image: require('../images/udaipur-fullday-sightseeing-tour-5.jpg'),
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          dotColor={'gray'}
          activeDotColor={'#fff'}
          paginationStyle={styles.pagination}
          style={styles.swiper}
          dotStyle={{}}
        >
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </Swiper>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Udaipur Sightseeing!</Text>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <FontIcon name="camera-retro" color={'#213e9a'} size={RFPercentage(4)} />
          <View style={styles.line} />
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Travel Aroma offers exclusive Rajasthan and Udaipur Package Tours
            specially designed for individual travelers.
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} autoplayInterval={true} duration={1000}>
      {HomeImages.map((item, index) => (
        <View key={index} style={styles.imageContainer}>
          <ImageBackground source={item.image} style={styles.images}>
            <Text style={styles.name}>
              {item.name}
            </Text>
          </ImageBackground>

          
          
        </View>
      ))}
    </ScrollView>

        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreButtonText}>View More This Sightseeing!</Text>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Udaipur Tour Packages</Text>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <FontIcon name="camera-retro" color={'#213e9a'} size={RFPercentage(4)} />
          <View style={styles.line} />
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Why do 96% of our customers keep coming back to us?
          </Text>
        </View>

        <MultiSlider />
        <Welcome />
        <Contact />
        <CarSlider />
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: heightPercentageToDP('3%'),
  },
  text: {
    color: '#213e9a',
    fontSize: RFPercentage(4),
    fontWeight: '500',
  },
  lineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -heightPercentageToDP('1%'),
    flexDirection: 'row',
  },
  line: {
    paddingHorizontal: widthPercentageToDP('3%'),
    height: 3,
    width: 3,
    backgroundColor: '#213e9a',
    margin: 10,
  },
  descriptionContainer: {
    marginTop: heightPercentageToDP('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP('5%'),
  },
  description: {
    lineHeight: RFPercentage(4.5),
    textAlign: 'justify',
    color: '#999',
    fontWeight: 'bold',
  },
  swiper: {
    height: heightPercentageToDP('30%'),
    marginVertical: heightPercentageToDP('-1%'),
  },
  slide: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  pagination: {
    bottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: heightPercentageToDP('2%'),
    borderRadius:responsiveHeight(8),
    borderRadius:responsiveWidth(8),
    overflow:'hidden'
  },
  images:{
    height: heightPercentageToDP('30%'),
    width: heightPercentageToDP('35%'),
    resizeMode: 'contain',
    margin:responsiveWidth(1),
    position:'relative',
  },
  viewMoreButton: {
    backgroundColor: '#00adef',
    justifyContent: 'center',
    alignItems: 'center',
    margin: heightPercentageToDP('3%'),
    padding: heightPercentageToDP('2%'),
    borderRadius: 10,
  },
  viewMoreButtonText: {
    fontSize: RFPercentage(2),
    color: '#fff',
    fontWeight: 'normal',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    top: responsiveWidth(55),
    left: responsiveWidth(13),
    fontSize: responsiveFontSize(2.5),
    textShadowColor: '#252525',
    textShadowOffset: { width: 3, height: 2 },
    textShadowRadius: 5,
    textAlign: 'justify',
    marginLeft: responsiveFontSize(-5),
    borderRadius: responsiveWidth(10),
  },
});

export default Home;
