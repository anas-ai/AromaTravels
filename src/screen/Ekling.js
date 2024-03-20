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
    label: 'Eklingji',
    image: require('../images/ExcursionImg/temples-around-udaipur.jpg'),
    text: 'Visit Eklingji, a little village with a number of ancient temples situated 22 kilometers away from Udaipur, and discover the Siva Temple that was built in 734. The walled complex includes an elaborately pillared hall under a large pyramidal roof and features a four faced Siva image of black marble.  ',
    btnText: 'Book Now',
  },
  {
    label: 'Nathdwara',
    image: require('../images/ExcursionImg/udaipur-full-day-excursion-3.jpg'),
    text: 'Built in the early 18th century, this is the most celebrated of the Vaishnava shrine of Shri Nathji or Lord Krishna. Thousands of pilgrims from all parts of India visit this shrine everday, and the member exceed a lakh during Diwali, Holi and Janmashtami, Foreign visitors ae not permitted inside and no photography of this monument is allowed.     btnText: Book Now.',
    btnText: 'Book Now',
  },
  {
    label: 'Haldighati',
    image: require('../images/ExcursionImg/haldighati.jpg'),
    text: ' The extensive terra firma, towards the south west of Nathdwara, this historical site witnessed the great legendry battle fought between Maharana Pratap and the Mughal Emperor -Akbar in 1576 AD. The vast terrain that was supposedly covered with blood (the sand turned Red in colour) evokes a chill in the spine till date and envelopes a feel of nostalgia, this was the place where the heroic Chetak the gallant charger with his dedicated loyalty towards his chivalrous master (the Maharana Pratap) proved his worth by co-operating till his last breath. A Chhatri with delicate white marble is dedicated both to the indomitable hero and his loyal charger, is note worthy. A jeep drive to this place is rather interesting.',
    btnText: 'Book Now',
  },
];

const Ekling = () => {
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
            Eklingji Nathdwara Haldighati Tour
          </Text>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Eklingji Nathdwara Haldighati Tour » Day 1
          </Text>
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

export default Ekling;
