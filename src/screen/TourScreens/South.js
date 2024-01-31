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
  import Contact from '../../components/Contact';
  import Footer from '../../components/Footer';
  import { SliderBox } from 'react-native-image-slider-box';
  import { responsiveHeight,responsiveFontSize,responsiveScreenWidth } from 'react-native-responsive-dimensions';  
  
  
  
  
  
  const CarBooking = [
    {
      label: 'Mumbai',
      image:require('../../images/TourImg/south-banner-1.jpg'),
      text: 'Mumbai, formerly Bombay, is big. It’s full of dreamers and hard-labourers, starlets and gangsters, stray dogs and exotic birds, artists and servants, fisherfolk and crorepatis (millionaires), and lots and lots of people. It has India’s most prolific film industry, some of Asia’s biggest slums (as well as the world’s most expensive home) and the largest tropical forest in an urban zone. Mumbai is India’s financial powerhouse, fashion epicentre and a pulse point of religious tension. '
      },
    {
      label: 'Kerala',
      image:require('../../images/TourImg/south-banner-2.jpg'),
    text: ' For many travellers, Kerala is South India s most serenely beautiful state. A slender coastal strip is shaped by its layered landscape: almost 600km of glorious Arabian Sea coast and beaches; a languid network of glistening backwaters; and the spice- and tea-covered hills of the Western Ghats. Just setting foot on this swath of soul-quenching, palm-shaded green will slow your subcontinental stride to a blissed-out amble. Kerala is a world away from the frenzy of elsewhere, as if India had passed through the Looking Glass and become an altogether more laid-back place.'   },
    {
      label: 'Goa',
      image:require('../../images/TourImg/south-banner-3.jpg'),
    text: ' Pint-sized Goa is more than beaches and trance parties. A kaleidoscopic blend of Indian and Portuguese cultures, sweetened with sun, sea, sand, seafood and spirituality, there s nowhere in India quite like it. ',
    },
    
   
    
  ];
  
  const South = () => {
    return (
      <ScrollView>
        
        <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
        
          <ImageBackground
            source={require('../../images/TourImg/tour_package.jpg')}
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
              North Tours » Golden Triangle
            </Text>
            
            
          </ImageBackground>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              CarBooking.map((data, index)=>((
                <View key={index}>
                  <Image source={data.image} style={{height:responsiveHeight(20),width:responsiveScreenWidth(100),margin:responsiveScreenWidth(1),resizeMode:'contain'}}/>
                </View>
              )))
            }
            
          </ScrollView>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            {CarBooking.map((data, index) => {
              return (
                <View key={index}>
                  <Text style={{
                        backgroundColor: '#00adef',
                        width: 220,
                        borderRadius: 50,
                        color: '#fff',
                        textAlign: 'center',
                        marginLeft: 0,
                        justifyContent: 'center',
                        marginTop: 20,
                        fontSize: 18,
                        padding: 8,
                        fontWeight: '500',
                      }}>{data.label}</Text>
                  <Text style={{textAlign: 'justify', margin: 10, color: 'gray'}}>{data.text}</Text>
                </View>
              );
            })}
  
  
  
            <View style={{marginTop: 20}}>
              <TouchableOpacity>
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
              </TouchableOpacity>
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
  
  export default South;
  