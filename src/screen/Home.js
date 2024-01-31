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
import { SliderBox } from 'react-native-image-slider-box';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import Welcome from '../components/Welcome';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MultiSlider from '../components/MultiSlider';
import CarSlider from '../components/CarSlider';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

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
        <SliderBox
          resizeMode="cover"
          images={images}
          dotcolor="red"
          inactiveDotColor="#fff"
          dotStyle={{ height: 10, width: 10, borderRadius: 50 }}
          autoplay={true}
          autoplayInterval={5000}
          circleLoop={true}
          SliderBoxHeight={heightPercentageToDP('30%')}
          imageLoadingColor="#fff"
          style={{ width: '100%', height: heightPercentageToDP('30%') }}
          animateTransitions={true}
          duration={1000}
          slideBoxHeight={heightPercentageToDP('30%')}
          disableOnPress={true}
        />

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
        
      
          

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {HomeImages.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <ImageBackground source={item.image} style={styles.image}>
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
        <CarSlider/>
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
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
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
    margin:10
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
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: heightPercentageToDP('2%'),
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: heightPercentageToDP('2%'),
    borderWidth: 0.5,
    borderColor: '#252525',
    borderRadius: 10,
  },
  image: {
    height: heightPercentageToDP('30%'),
    width: heightPercentageToDP('35%'),
    resizeMode: 'contain',
    margin:responsiveWidth(1),
    position:'relative'

  },
  imageTextContainer: {
    alignItems: 'center',
    marginVertical: heightPercentageToDP('2%'),
  },
  imageText: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: RFPercentage(2),
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
  name:{
    color:'#fff',
    fontWeight:'600',
    position:'absolute',
    top:responsiveWidth(55),
    left:responsiveWidth(13),
    fontSize:responsiveFontSize(2.5),
    textShadowColor:'#252525',
    backgroundColor:'#00adef',
    textAlign:'center',
    width:'70%',
    borderRadius:responsiveWidth(50)
  }
});

export default Home;
