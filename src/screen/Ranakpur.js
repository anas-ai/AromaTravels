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

const CarBooking = [
  {
    label: 'Ranakpur',
    image: require('../images/ExcursionImg/Ranakpur-2.jpg'),
    text: 'The JainTemple of Ranakpurdecorated with tricky Deepak nalinitribhuvanvicar, dharmavicaretc. is famous in world for its exquisitessculpreandarchitecture sanghvidharnashaprowl the then minister of maharanakumbha got this grandchaumukhjain temple constructed in the country on thebanks of river maghin the beautiful hill range of aravli valleys in the paildisliked in (Rajasthan) ii the area of 48 thousand sq. feet and height102 feet talltitemshe three stories grand temple took over so years of construction by craftsman dipa and his colleagues had with an untiringlabor this lallation of the deityhad been done by the acahariyasounderjiinvikramsavant 1446 thistemple is unique and rare pierce of archived with artistic [illers of 84 dev.kalian and the high. rising ritika (in wish nine cellars are believed) about 50 feethigh 4 meghmandap and 20 rang man dap divinity is manifested inarchitectural medieval work through art items of poses of goddesses sahastraand parshwanathnagdamanshastrakul and kalptaruchaukar is with theharmony of natural light dir. d weather the design of the pillars and dev. kulikus are such that them to be similar scene from all sides surrounding themain temple there are beautiful artistic temple of parshwanathnaminathsuriyanarayana.  ',
    btnText: 'Book Now',
  },
  {
    label: 'Haldighati',
    image: require('../images/ExcursionImg/haldighati.jpg'),
    text: 'The famed battle field which saw the historic battle fought between Rana Pratap, the brave Rajput leader and son of Udai Singh and the Mughal Emperor Akbar in 1576. Rana Pratap is regarded as the local hero who fought valorously till the end and a memorial cenotaph or Chattri stands on the battle field, a true testimony of the love of his subjects for whom he waged the war. Another chattri has been erected nearby in honor of Chetak, the loyal horse of Rana Pratap which carried its wounded master away from the enemys clutches and is said to have galloped across the valleys and hills till it dropped dead. ',
    btnText: 'Book Now',
  },
 
  
  
];

const Ranakpur = () => {
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
            Ranakpur Kumbhalgarh day tour
          </Text>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Ranakpur Kumbhalgarh day tour » Day 1 </Text>
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

                <View>
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
                </View>
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

export default Ranakpur;
