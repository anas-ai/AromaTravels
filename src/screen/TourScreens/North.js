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
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';


const images = [
  require('../../images/TourImg/delhi-arrival.jpg'),
  require('../../images/TourImg/jaipur-6.jpg'),
  require('../../images/TourImg/agra.jpg'),
];


const CarBooking = [
  {
    label: 'Delhi',
   text:' Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.'
    },
  {
    label: 'Agra',
text:'This is an area of Uttar Pradesh that roughly 1,400,000 people reside in. This destination lies 110 miles southeast of the national capital of New Delhi. Its also approximately 30 miles east of Bharatpur. Taj Mahal is a world-famous attraction. Patna Bird Sanctuary and Sur Sarovar Bird Sanctuary are fun-filled and engaging attractions, offering hours worth of entertainment for the entire family. Take five from the stress of traveling at one of the alluring parks and gardens. Flip through a magazine or just watch the birds bicker in the trees at the Ram Bagh and the Mehtab Bagh. Motilal Nehru Park is also enjoyed by the locals. Skim some stones along the calm water, discover the local birdlife and have a bite to eat at Keetham Lake. Haveli Nadine Prince is a popular place where the curious go to challenge themselves. Take in the quiet atmosphere, ask the staff about guided tours and pick up a souvenir at the gift shop on your way out. Fascinating displays and objects await art aficionados at the Agra Art Gallery. The Fatehpur Sikri and the Tomb of Mariam Zamani are certainly worth looking into, even if you re not a passionate history buff. More stories from a bygone era await at the Jahangir Mahal and Shah Burj. Those interested in military history should enjoy touring Agra Fort and Panch Mahal - Agra, two examples of the region s fortifications and defenses. You can also examine the unique design of Musamman Burj and Moti Masjid. The spiritual side of the area is on display at the Jama Masjid and the Soami Bagh Temple. You may also like to go for a stroll around the Mankameshwar Temple and the Mosque and the Jawab. Immerse yourself in the colorful sights and sounds of Anguri Bagh, a bustling public square. One of the most photographed local landmarks, Chhatri of Raja Jaswant Singh is an essential stop. To learn more about the history of this community, allow some time to visit some of its quiet monuments and memorial plaques, such as Sikandra and Chini ka Rauza. If you d like to continue your journey down memory lane, you should also have a look at Tomb of Akbar the Great and Itmad-ud-Daulah s Tomb. Sadar Bazar and Kinari Bazar are the places to go to stock up on essentials or indulge in some luxury purchases.'
  },
  {
    label: 'JAIPUR THE PINK CITY',
    text: 'Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned city of India. Renowned globally for its coloured gems, the capital city of Rajasthan combines the allure of its ancient history with all the advantages of a metropolis. The bustling modern city is one of the three corners of the golden triangle that includes Delhi, Agra and Jaipur. The story goes that in 1876, the Prince of Wales visited India on a tour. Since the colour pink was symbolic of hospitality, Maharaja Ram Singh of Jaipur painted the entire city pink. The pink that colours the city makes for a marvellous spectacle to behold. Jaipur rises up majestically against the backdrop of the forts Nahargarh, Jaigarh and Garh Ganesh Temple. Jaipur traces back its origins to 1727 when it was established by Jai Singh II, the Raja of Amber. He shifted his capital from Amber to the new city because of the rapidly-growing population and an increasing water scarcity. Noted architect Vidyadhar Bhattacharya used the established principles of Vastu Shastra to build the city. ',
  },
  
  
];

const North = () => {
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
        {/* <SliderBox
          resizeMode='contain'
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
        /> */}
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

export default North;
