import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box';
import { useNavigation } from '@react-navigation/native';



const MultiSlider = () => {
  
    const multiSlider = [
        {
          imageOne: [
            {
              id: 1,
              title: 'Udaipur Sightseeing Tour',
              images: require('../images/udaipur.jpg'),
              btnText: 'view Package',
            },
            {
              id: 2,
              title: 'Eklingji-Nathdwara-Haldighati Tour',
              images: require('../images/Eklingji-Nathdwara.jpg'),
              btnText: 'view Package',
            },
            {
              id: 3,
              title: 'Kumbhalgarh-Haldighati Tour',
              images: require('../images/Kumbhalgarh-Fort-Udaipur.png'),
              btnText: 'view Package',
            },
          ],
        },
        {
          two: [
            {
              id: 4,
              title: 'Ranakpur-Kumbhalgarh tour',
              images: require('../images/Ranakpur.jpg'),
              btnText: 'view Package',
            },
            {
              id: 5,
              title: 'Chittorgarh Tour',
              images: require('../images/Chittorgarh-Fort-Chittorgarh.png'),
              btnText: 'view Package',
            },
            {
              id: 6,
              title: 'Mount Abu Tour',
              images: require('../images/mount-abu.jpg'),
              btnText: 'view Package',
            },
          ],
        },
      ];
    
   const navigation = useNavigation();   
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <SliderBox
      resizeMode="cover"
      images={multiSlider}
      dotcolor="#213e9a"
      inactiveDotColor="#213e9a"
      dotStyle={{
        height: 10,
        width: 10,
        borderRadius: 50,
        marginBottom: 5,
      }}
      autoplay={true}
      autoplayInterval={3000}
      circleLoop={true}
      SliderBoxHeight={200}
      imageLoadingColor="#fff"
      style={{width: '100%', height: 250}}
      animateTransitions={true}
      duration={1000}
      slideBoxHeight={250}
      disableOnPress={true}
      data={multiSlider}
      
      renderItem={({item, index}) => {
        return (
          <View key={index} style={{flex:1}}>
            {item &&item?.imageOne?.length > 0 &&item?.imageOne?.map((elem, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 10,
                      borderWidth: .5,
                      borderColor: '#252525',
                      borderRadius: 10,
                      flex:1
                    }}>
                    <Image
                      source={elem.images}
                      style={{
                        width: '100%',
                        height: 200,
                        resizeMode: 'cover',
                      }}
                    />
                    <Text
                      style={{
                        color: '#252525',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginBottom: 10,
                      }}>
                      {elem.title}
                    </Text>
                    <TouchableOpacity style={{margin: 10}} onPress={()=>navigation.navigate('UdaipurDay')}>
                      <Text
                        style={{
                          backgroundColor: '#00adef',
                          color: '#fff',
                          padding: 10,
                          fontSize: 18,
                        }}>
                        {elem.btnText}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}

            {item?.two?.map((subElem, index) => {
              return (
                <View
                  key={index}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10,
                    borderWidth: .5,
                    borderColor: '#252525',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={subElem.images}
                    style={{
                      width: '100%',
                      height: 200,
                      resizeMode: 'cover',
                    }}
                  />
                  <Text
                    style={{
                      color: '#252525',
                      fontWeight: 'bold',
                      fontSize: 20,
                      marginBottom: 10,
                    }}>
                    {subElem.title}
                  </Text>
                  <TouchableOpacity style={{margin: 10}} onPress={()=>navigation.navigate('UdaipurDay')}>
                    <Text
                      style={{
                        backgroundColor: '#00adef',
                        color: '#fff',
                        padding: 10,
                        fontSize: 18,
                        margin:15,
                        fontWeight:'normal'
                      }}>
                      {subElem.btnText}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        );
      }}
    />
  </View>
)
}

export default MultiSlider