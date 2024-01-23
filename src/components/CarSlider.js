import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView,StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import FontIcon from 'react-native-vector-icons/FontAwesome';

const CarSliderImg = [
  {
    one: [
      {
        id: 1,
        image: require('../images/CarSliderImg/taxi-01.jpg'),
        title: 'Toyota Etios',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
      {
        id: 2,
        image: require('../images/CarSliderImg/taxi-02.jpg'),
        title: 'Maruti Swift Dzire',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
      {
        id: 3,
        image: require('../images/CarSliderImg/taxi-03.jpg'),
        title: 'Hyundai Xcent',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
      {
        id: 4,
        image: require('../images/CarSliderImg/taxi-04.jpg'),
        title: 'Toyota Innova Crysta',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
    ],
  },
  {
    two: [
      {
        id: 5,
        image: require('../images/CarSliderImg/taxi-05.jpg'),
        title: 'Toyota Etios',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
      {
        id: 6,
        image: require('../images/CarSliderImg/taxi-06.jpg'),
        title: 'Maruti Swift Dzire',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
      {
        id: 7,
        image: require('../images/CarSliderImg/taxi-07.jpg'),
        title: 'Hyundai Xcent',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
      {
        id: 8,
        image: require('../images/CarSliderImg/taxi-08.jpg'),
        title: 'Toyota Innova Crysta',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
    ],
  },
  {
    three: [
      {
        id: 9,
        image: require('../images/CarSliderImg/taxi-09.jpg'),
        title: 'Toyota Etios',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
      {
        id: 10,
        image: require('../images/CarSliderImg/taxi-10.jpg'),
        title: 'Maruti Swift Dzire',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
      {
        id: 11,
        image: require('../images/CarSliderImg/taxi-11.jpg'),
        title: 'Hyundai Xcent',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
      {
        id: 12,
        image: require('../images/CarSliderImg/taxi-12.jpg'),
        title: 'Toyota Innova Crysta',
        text1: 'Air Conditoned',
        text2: 'Passengers: 4 (including Driver)',
        btnTxt: 'Book Now',
      },
    ],
  },
];

const CarSlider = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      }}>
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <Text style={{color: '#213e9a', fontSize: 30, fontWeight: '500'}}>
            Car Services in Udaipur
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: -15,
            flexDirection: 'row',
            margin: 10,
          }}>
          <View style={{paddingHorizontal: 12}}>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>___</Text>
          </View>
          <FontIcon name="car" color={'#213e9a'} size={25} />
          <View>
            <Text style={{paddingLeft: 8, fontWeight: 'bold', marginBottom: 5}}>
              ___
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              lineHeight: 15,
              textAlign: 'justify',
              color: '#999',
              fontWeight: 500,
            }}>
            Why do 96% of our customer keep coming back to us?
          </Text>
        </View>
      </View>
      
      
      
      <ScrollView  showsVerticalScrollIndicator={false} style={{flex:1,flexGrow:1,flexDirection:'row',flexWrap:'wrap'}}>
      <SliderBox
        resizeMode="cover"
        images={CarSliderImg}
        dotcolor="#213e9a"
        inactiveDotColor="#213e9a"
        dotStyle={{
          height: 10,
          width: 10,
          borderRadius: 50,
          marginTop: 10,
        }}
        autoplay={true}
        autoplayInterval={3000}
        circleLoop={false}
        sliderBoxHeight={200}
        imageLoadingColor="#fff"
        style={{width: '100%', height: 250}}
        animateTransitions={true}
        duration={1000}
        slideBoxHeight={250}
        disableOnPress={true}
        data={CarSliderImg}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={styles.container}>
            {item?.one?.map((elem, index) => (
              <View key={index} style={styles.itemContainer}>
                <Image source={elem.image} style={styles.image} />
                <View style={styles.itemContent}>
                  <Text style={styles.title}>{elem.title}</Text>
                  <Text style={styles.text}>{elem.text1}</Text>
                  <Text style={styles.text2}>{elem.text2}</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{elem.btnTxt}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          
            {item?.two?.map((subElem, index) => (
              <View key={index} style={styles.itemContainer}>
                <Image source={subElem.image} style={styles.image} />
                <View style={styles.itemContent}>
                  <Text style={styles.title}>{subElem.title}</Text>
                  <Text style={styles.text}>{subElem.text1}</Text>
                  <Text style={styles.text2}>{subElem.text2}</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{subElem.btnTxt}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          
            {item?.three?.map((subElem2, index) => (
              <View key={index} style={styles.itemContainer}>
                <Image source={subElem2.image} style={styles.image} />
                <View style={styles.itemContent}>
                  <Text style={styles.title}>{subElem2.title}</Text>
                  <Text style={styles.text}>{subElem2.text1}</Text>
                  <Text style={styles.text2}>{subElem2.text2}</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{subElem2.btnTxt}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
          );
        }}
      />
      </ScrollView>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    borderWidth: 0.5,
    borderColor: '#252525',
    borderRadius: 10,
    height: 230,
    width: 180,
    overflow: 'hidden',
    position: 'relative',
    marginBottom:30
  },
  itemContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    position:'absolute',
    bottom:90
  },
  text: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    position:'absolute',
    bottom:35
  },
  text2:{
    color: 'gray',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    position:'absolute',
    lineHeight:15,
    letterSpacing:0.5,
    bottom:55,
  },
  button: {
    backgroundColor: '#00adef',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 30,
    borderRadius: 10,
    marginBottom:50,
    top:42,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});




export default CarSlider;
