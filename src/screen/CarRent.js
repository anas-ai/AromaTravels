import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import FontIcon from 'react-native-vector-icons/Ionicons';
import LuxuryCars from '../components/LuxuryCars';
import EconomyCars from '../components/EconomyCars';
import MidSizeCars from '../components/MidSizeCars';
import Deluxe from '../components/Deluxe';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const CarRent = () => {
  return (
    <ScrollView>
      <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground
          source={require('../images/fleet-banner.jpg')}
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
            Car Services in Udaipur
          </Text>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Car Services in Udaipur</Text>
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
          <FontIcon name="car-sport" color={'#213e9a'} size={25} />
          <View>
            <Text style={{paddingLeft: 8, fontWeight: 'bold', marginBottom: 5}}>
              _
            </Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Our services are available for 24 hours a day. The pickups are done
            without any delay. You can easily hire a taxi at your desired place
            by just making a call to us. Taxi Travels is a leading reputed
            company providing best services at attractive cost. Our booking and
            client care staffs are committed to the great services. Our experts
            guarantee to give these services to the correct area defined by the
            customers within a stipulated time span. We render these car rental
            services in Udaipur, Rajasthan continuously with global quality
            standards and accomplish maximum satisfaction level of customers.
            These services are offered at the most ideal cost to the customers.
            We offer a wide variety of cars to pick from and its luxurious
            interiors guarantee esteemed feel. Get set to experience the luxury
            and comfort together while traveling.
          </Text>
        </View>
        <EconomyCars/>
        <MidSizeCars/>
        <LuxuryCars/>
        <Deluxe/>
      </View>
        <Contact/>
      <Footer/>
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
    lineHeight:22 ,
    textAlign: 'justify',
    color: '#999',
    fontWeight: 'bold',
  },
});
export default CarRent;
