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
import FontIcon from 'react-native-vector-icons/AntDesign';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { useNavigation } from '@react-navigation/native';

const CarBooking = [
  {
    label: 'The Fort',
    image: require('../images/ExcursionImg/Chittorgarh-Fort-Chittorgarh.png'),
   text:' While it is difficult to arrive at the exact date the fort was established, legend has it that the construction of the Chittorgarh Fort was initiated by Bhim, a Pandava hero from the mythological epic Mahabharata. The fort houses several magnificent monuments, some unfortunately ravaged by time.' ,
   btnText: 'Book Now',
  },
  {
    label: 'Vijay Stambh (Victory Tower)',
    image: require('../images/ExcursionImg/Vijay-Stambh.jpg'),
   text: ' Vijay Stambh (the Tower of Victory) was built by Maharana Kumbha between 1440 AD and 1448 AD to immortalise his triumph of defeating the Muslim rulers of Malwa and Gujarat. Built partly from red sandstone and partly white marble, this architectural wonder is nine-storey tower decorated with detailed sculptures of Hindu gods and goddesses. Narrow steps lead to the terrace where one can catch a spectacular view of the entire town from the balconies.' ,
  btnText: 'Book Now',
  },
  {
    label: 'Padmini Palace',
    image: require('../images/ExcursionImg/Padmini-Palace.jpg'),
  text: 'This palace is of immense historical importance in the history of mewar associated with rani padmini, this beautiful building stands in the northern margin of padmini lake it is said that here rana rattan Singh showed a glimpse of legendary beauty of his wifepadmini to ala-ud-din khalji through a mirror after which ala-ud-din khalji went to the extent of ravaging chittaur in order to posses her. In the middle of the lake there is a three stored structure with arched openings locally known as Tajmahal.'   ,
    btnText: 'Book Now',
  },
  {
    label: 'Rana Kumbha Palace',
    image: require('../images/ExcursionImg/Rana-Kumbha-Palace.jpg'),
  text: ' This magnificent palace provides faint glimpses of glory of typical domestic architecture of the Rajput’s. maharanakumbha (ad 1433-68) several additions in earlier pslsce. the palace is approached through tow gateways to the east-badi pole and Tripoli. These gates lead into open space to the south of the palace and to darikhana.a small doorway on the back of arikhana gives access to main apartment, the sueyagokhra, zananamahal, kanwarpadekamahal, other residential structures and open courts, built of dressed stones, the exterior all have decorations include sculptured bands serving as string course and head bosses. '   ,
    btnText: 'Book Now',
  },
  {
    label: 'Merra & Kumbha Shyam Temple',
    image: require('../images/ExcursionImg/Merra-Kumbha-Shyam-Temple.jpg'),
   text: 'This temple is accocited with peotess and great devotee of lord Krishna – Meerabai. She was the wife of Ram Bhojraj nand is set to have consumed poison sent by Rana ,but servived because of lord Krishna’ s blessing. ' ,
       btnText: 'Book Now',
  },
  {
    label: 'Kalka Mata Temple ',
    image: require('../images/ExcursionImg/Kalka-Mata-Temple.jpg'),
   text: ' A temple of mother Goodness Kali is the symbol of power and valour. It was built a sun Temple in the 8th century and was converted into kali mata temple in 14th century .A gret fair is held during navratri.',
     btnText: 'Book Now',
  },
  ,
];

const Chittorgarh = () => {
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
            Chittorgarh Fort day tour
          </Text>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Chittorgarh Fort day tour » Day 1 </Text>
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
                    height: 300,
                    width: 450,
                    resizeMode: 'contain',
                    marginTop: 40,
                  }}>
                  <Text
                    style={{
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
                    }}>
                    {data.label}
                  </Text>
                </ImageBackground>
                <View>
                  <Text
                    style={{textAlign: 'justify', margin: 10, color: 'gray'}}>
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
            <TouchableHighlight onPress={()=>navigation.navigate('Contact')} >
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

export default Chittorgarh;
