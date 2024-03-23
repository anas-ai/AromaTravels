// // import { View, Text ,Image,TouchableOpacity} from 'react-native'
// // import React from 'react'
// // import {SliderBox} from 'react-native-image-slider-box';

// // const MultiSlider = () => {

// // const multiSlider = [
// //   {
// //     imageOne: [
// //       {
// //         id: 1,
// //         title: 'Udaipur Sightseeing Tour',
// //         images: require('../images/udaipur.jpg'),
// //         btnText: 'view Package',
// //       },
// //       {
// //         id: 2,
// //         title: 'Eklingji-Nathdwara-Haldighati Tour',
// //         images: require('../images/Eklingji-Nathdwara.jpg'),
// //         btnText: 'view Package',
// //       },
// //       {
// //         id: 3,
// //         title: 'Kumbhalgarh-Haldighati Tour',
// //         images: require('../images/Kumbhalgarh-Fort-Udaipur.png'),
// //         btnText: 'view Package',
// //       },
// //     ],
// //   },
// //   {
// //     two: [
// //       {
// //         id: 4,
// //         title: 'Ranakpur-Kumbhalgarh tour',
// //         images: require('../images/Ranakpur.jpg'),
// //         btnText: 'view Package',
// //       },
// //       {
// //         id: 5,
// //         title: 'Chittorgarh Tour',
// //         images: require('../images/Chittorgarh-Fort-Chittorgarh.png'),
// //         btnText: 'view Package',
// //       },
// //       {
// //         id: 6,
// //         title: 'Mount Abu Tour',
// //         images: require('../images/mount-abu.jpg'),
// //         btnText: 'view Package',
// //       },
// //     ],
// //   },
// // ];

// //   return (
// //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
// //     <SliderBox
// //       resizeMode="cover"
// //       images={multiSlider}
// //       dotcolor="#213e9a"
// //       inactiveDotColor="#213e9a"
// //       dotStyle={{
// //         height: 10,
// //         width: 10,
// //         borderRadius: 50,
// //         marginBottom: 5,
// //       }}
// //       autoplay={true}
// //       autoplayInterval={3000}
// //       circleLoop={true}
// //       SliderBoxHeight={200}
// //       imageLoadingColor="#fff"
// //       style={{width: '100%', height: 250}}
// //       animateTransitions={true}
// //       duration={1000}
// //       slideBoxHeight={250}
// //       disableOnPress={true}
// //       data={multiSlider}

// //       renderItem={({item, index}) => {
// //         return (
// //           <View key={index} style={{flex:1}}>
// //             {item &&item?.imageOne?.length > 0 &&item?.imageOne?.map((elem, index) => {
// //                 return (
// //                   <View
// //                     key={index}
// //                     style={{
// //                       alignItems: 'center',
// //                       justifyContent: 'center',
// //                       margin: 10,
// //                       borderWidth: .5,
// //                       borderColor: '#252525',
// //                       borderRadius: 10,
// //                       flex:1
// //                     }}>
// //                     <Image
// //                       source={elem.images}
// //                       style={{
// //                         width: '100%',
// //                         height: 200,
// //                         resizeMode: 'cover',
// //                       }}
// //                     />
// //                     <Text
// //                       style={{
// //                         color: '#252525',
// //                         fontWeight: 'bold',
// //                         fontSize: 20,
// //                         marginBottom: 10,
// //                         marginTop:5
// //                       }}>
// //                       {elem.title}
// //                     </Text>
// //                     <TouchableOpacity style={{margin: 10}}>
// //                       <Text
// //                         style={{
// //                           backgroundColor: '#00adef',
// //                           color: '#fff',
// //                           padding: 10,
// //                           fontSize: 18,
// //                         }}>
// //                         {elem.btnText}
// //                       </Text>
// //                     </TouchableOpacity>
// //                   </View>
// //                 );
// //               })}

// //             {item?.two?.map((subElem, index) => {
// //               return (
// //                 <View
// //                   key={index}
// //                   style={{
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     margin: 10,
// //                     borderWidth: .5,
// //                     borderColor: '#252525',
// //                     borderRadius: 10,
// //                   }}>
// //                   <Image
// //                     source={subElem.images}
// //                     style={{
// //                       width: '100%',
// //                       height: 200,
// //                       resizeMode: 'cover',
// //                     }}
// //                   />
// //                   <Text
// //                     style={{
// //                       color: '#252525',
// //                       fontWeight: 'bold',
// //                       fontSize: 20,
// //                       marginBottom: 10,
// //                     }}>
// //                     {subElem.title}
// //                   </Text>
// //                   <TouchableOpacity style={{margin: 10}}>
// //                     <Text
// //                       style={{
// //                         backgroundColor: '#00adef',
// //                         color: '#fff',
// //                         padding: 10,
// //                         fontSize: 18,
// //                         margin:15,
// //                         fontWeight:'normal'
// //                       }}>
// //                       {subElem.btnText}
// //                     </Text>
// //                   </TouchableOpacity>
// //                 </View>
// //               );
// //             })}
// //           </View>
// //         );
// //       }}
// //     />
// //   </View>
// // )
// // }

// // export default MultiSlider
// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';

// const MultiSlider = () => {
//   const item = [
//     [{
//       id: 1,
//       title: 'Udaipur Sightseeing Tour',
//       images: require('../images/udaipur.jpg'),
//       btnText: 'view Package',
//     }],
//     [{
//       id: 2,
//       title: 'Eklingji-Nathdwara-Haldighati Tour',
//       images: require('../images/Eklingji-Nathdwara.jpg'),
//       btnText: 'view Package',
//     }],
//     [{
//       id: 3,
//       title: 'Kumbhalgarh-Haldighati Tour',
//       images: require('../images/Kumbhalgarh-Fort-Udaipur.png'),
//       btnText: 'view Package',
//     }],
//     [{
//       id: 4,
//       title: 'Ranakpur-Kumbhalgarh tour',
//       images: require('../images/Ranakpur.jpg'),
//       btnText: 'view Package',
//     }],
//     [{
//       id: 5,
//       title: 'Chittorgarh Tour',
//       images: require('../images/Chittorgarh-Fort-Chittorgarh.png'),
//       btnText: 'view Package',
//     }],
//     [{
//       id: 6,
//       title: 'Mount Abu Tour',
//       images: require('../images/mount-abu.jpg'),
//       btnText: 'view Package',
//     }],
//   ];

//   const midpointIndex = Math.ceil(item.length / 2);

//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {/* first array */}
//       <View style={{ flex: 1 }}>
//         {item.slice(0, midpointIndex).map((subElem, index) => (
//           <View
//             key={index}
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               margin: 10,
//               borderWidth: 0.5,
//               borderColor: '#252525',
//               borderRadius: 10,
//             }}
//           >
//             <Image
//               source={subElem.images}
//               style={{
//                 width: '100%',
//                 height: 200,
//                 resizeMode: 'cover',
//               }}
//             />
//             <Text
//               style={{
//                 color: '#252525',
//                 fontWeight: 'bold',
//                 fontSize: 20,
//                 marginBottom: 10,
//               }}
//             >
//               {subElem.title}
//             </Text>
//             <TouchableOpacity style={{ margin: 10 }}>
//               <Text
//                 style={{
//                   backgroundColor: '#00adef',
//                   color: '#fff',
//                   padding: 10,
//                   fontSize: 18,
//                   margin: 15,
//                   fontWeight: 'normal',
//                 }}
//               >
//                 {subElem.btnText}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>

//       {/* second */}
//       <View style={{ flex: 1 }}>
//         {item.slice(midpointIndex).map((subElem, index) => (
//           <View
//             key={index + midpointIndex}
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               margin: 10,
//               borderWidth: 0.5,
//               borderColor: '#252525',
//               borderRadius: 10,
//             }}
//           >
//             <Image
//               source={subElem.images}
//               style={{
//                 width: '100%',
//                 height: 200,
//                 resizeMode: 'cover',
//               }}
//             />
//             <Text
//               style={{
//                 color: '#252525',
//                 fontWeight: 'bold',
//                 fontSize: 20,
//                 marginBottom: 10,
//               }}
//             >
//               {subElem.title}
//             </Text>
//             <TouchableOpacity style={{ margin: 10 }}>
//               <Text
//                 style={{
//                   backgroundColor: '#00adef',
//                   color: '#fff',
//                   padding: 10,
//                   fontSize: 18,
//                   margin: 15,
//                   fontWeight: 'normal',
//                 }}
//               >
//                 {subElem.btnText}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// }

// export default MultiSlider;

// 6 ek sath ate h
// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { responsiveWidth } from 'react-native-responsive-dimensions';

// const MultiSlider = () => {
//   const items = [
//     {
//       id: 1,
//       title: 'Udaipur Sightseeing ',
//       text1: 'Tour',
//       image: require('../images/udaipur.jpg'),
//       btnText: 'view Package',
//       btnlink: 'UdaipurDay',

//     },
//     {
//       id: 2,
//       title: 'Eklingji Nathdwara ',
//       text1: ' HaldighatiTour',
//       image: require('../images/Eklingji-Nathdwara.jpg'),
//       btnText: 'view Package',
//       btnlink: 'Ekling',

//     },
//     {
//       id: 3,
//       title: 'Kumbhalgarh ',
//       text1: 'Haldighati',
//       text2: 'Tour',
//       image: require('../images/Kumbhalgarh-Fort-Udaipur.png'),
//       btnText: 'view Package',
//       btnlink: 'Kumbhalgarh',

//     },
//     {
//       id: 4,
//       title: 'Ranakpur ',
//       text1: 'Kumbhalgarh',
//       text2: 'Tour',
//       image: require('../images/Ranakpur.jpg'),
//       btnText: 'view Package',
//       btnlink: 'Ranakpur',

//     },
//     {
//       id: 5,
//       title: 'Chittorgarh',
//       text1: 'Tour',
//       image: require('../images/Chittorgarh-Fort-Chittorgarh.png'),
//       btnText: 'view Package',
//       btnlink: 'Chittorgarh',

//     },
//     {
//       id: 6,
//       title: 'Mount Abu',
//       text1: 'Tour',
//       image: require('../images/mount-abu.jpg'),
//       btnText: 'view Package',
//       btnlink: 'MountAbu',

//     },
//   ];
//   const navigation = useNavigation()
//   const handlePress = (btnlink) => {
//     if (btnlink) {
//       navigation.navigate(btnlink);
//     }
//   };

//   return (
//     <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//       {items.map(item => (
//         <View
//           key={item.id}
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             margin: 10,
//             borderWidth: 0.5,
//             borderColor: '#252525',
//             borderRadius: 10,
//             width: responsiveWidth(45),
//           }}
//         >
//           <Image
//             source={item.image}
//             style={{
//               width: '100%',
//               height: 200,
//               resizeMode: 'cover',
//               borderRadius: 10,
//             }}
//           />
//           <Text
//             style={{
//               color: '#252525',
//               fontWeight: 'bold',
//               fontSize: 19,
//               top: 20,
//               textAlign: 'justify',
//               // marginBottom: 10,
//               // marginTop: 5,
//             }}
//           >
//             {item.title}
//           </Text>
//           <Text
//             style={{
//               color: '#252525',
//               fontWeight: 'bold',
//               fontSize: 19,
//               top: 20,
//               textAlign: 'justify',
//               // marginBottom: 10,
//               // marginTop: 5,
//             }}
//           >
//             {item.text1}
//           </Text>
//           <Text
//             style={{
//               color: '#252525',
//               fontWeight: 'bold',
//               fontSize: 19,
//               top: 20,
//               textAlign: 'justify',
//               // marginBottom: 10,
//               // marginTop: 5,
//             }}
//           >
//             {item.text2}
//           </Text>
//           <TouchableOpacity
//            onPress={()=>handlePress(item.btnlink)} style={{ margin: 10 }}>
//             <Text
//               style={{
//                 backgroundColor: '#00adef',
//                 color: '#fff',
//                 padding: 10,
//                 fontSize: 18,
//                 margin: 15,
//                 fontWeight: 'normal',
//               }}
//             >
//               {item.btnText}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </View>
//   );
// }

// export default MultiSlider;

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const CarSliderImg = [
  {
    one: [
      {
        id: 1,
        title: 'Udaipur Sightseeing ',
        text1: 'Tour',
        image: require('../images/udaipur.jpg'),
        btnTxt: 'view Package',
        btnlink: 'UdaipurDay',
      },
      {
        id: 2,
        title: 'Eklingji Nathdwara ',
        text1: ' HaldighatiTour',
        image: require('../images/Eklingji-Nathdwara.jpg'),
        btnTxt: 'view Package',
        btnlink: 'Ekling',
      },
      {
        id: 3,
        title: 'Kumbhalgarh ',
        text1: 'Haldighati',
        text2: 'Tour',
        image: require('../images/Kumbhalgarh-Fort-Udaipur.png'),
        btnTxt: 'view Package',
        btnlink: 'Kumbhalgarh',
      },
      {
        id: 4,
        title: 'Ranakpur ',
        text1: 'Kumbhalgarh',
        text2: 'Tour',
        image: require('../images/Ranakpur.jpg'),
        btnTxt: 'view Package',
        btnlink: 'Ranakpur',
      },
    ],
  },
  {
    two: [
      {
        id: 5,
        title: 'Chittorgarh',
        text1: 'Tour',
        image: require('../images/Chittorgarh-Fort-Chittorgarh.png'),
        btnTxt: 'view Package',
        btnlink: 'Chittorgarh',
      },
      {
        id: 6,
        title: 'Mount Abu',
        text1: 'Tour',
        image: require('../images/mount-abu.jpg'),
        btnTxt: 'view Package',
        btnlink: 'MountAbu',
      },
    ],
  },
];

const MultiSlider = () => {
  const navigation = useNavigation();
  const handlePress = btnlink => {
    if (btnlink) {
      navigation.navigate(btnlink);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SliderBox
          resizeMode="cover"
          images={CarSliderImg}
          dotcolor="#213e9a"
          inactiveDotColor="#213e9a"
          dotStyle={{
            height: responsiveHeight(0.8),
            width: responsiveHeight(0.8),
            borderRadius: responsiveHeight(0.4),
            marginTop: responsiveHeight(1),
          }}
          autoplay={true}
          autoplayInterval={3000}
          circleLoop={false}
          sliderBoxHeight={responsiveHeight(30)}
          imageLoadingColor="#fff"
          style={{width: '100%', height: responsiveHeight(37)}}
          animateTransitions={true}
          duration={1000}
          slideBoxHeight={responsiveHeight(37)}
          disableOnPress={true}
          data={CarSliderImg}
          renderItem={({item, index}) => {
            return (
              <View key={index} style={styles.sliderItemContainer}>
                {item?.one?.map((elem, index) => (
                  <View key={index} style={styles.itemContainer}>
                    <Image source={elem.image} style={styles.image} />
                    <View style={styles.itemContent}>
                      <Text style={styles.title}>{elem.title}</Text>
                      <Text style={styles.text}>{elem.text1}</Text>
                      <Text style={styles.text}>{elem.text2}</Text>
                      <TouchableOpacity
                        onPress={() => handlePress(elem.btnlink)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>{elem.btnTxt}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
                {item?.two?.map((subElem, index) => (
                  <View key={index} style={styles.itemContainer2}>
                    <Image source={subElem.image} style={styles.image} />
                    <View style={styles.itemContent}>
                      <Text style={styles.title}>{subElem.title}</Text>
                      <Text style={styles.text}>{subElem.text1}</Text>
                      <Text style={styles.text}>{subElem.text2}</Text>
                      <TouchableOpacity
                        onPress={() => handlePress(subElem.btnlink)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>{subElem.btnTxt}</Text>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1),
  },
  sliderItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveHeight(1),
    borderWidth: 0.5,
    borderColor: '#252525',
    borderRadius: responsiveHeight(2),
    height: responsiveHeight(30),
    width: responsiveWidth(44),
    overflow: 'hidden',
    position: 'relative',
    marginBottom: responsiveHeight(5),
    margin:10
  },
  itemContainer2:{
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveHeight(1),
    borderWidth: 0.5,
    borderColor: '#252525',
    borderRadius: responsiveHeight(2),
    height: responsiveHeight(30),
    width: responsiveWidth(45),
    overflow: 'hidden',
    position: 'relative',
    marginBottom: responsiveHeight(5),
    margin:responsiveHeight(1.5)
  },

  itemContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: responsiveHeight(18),
    resizeMode: 'cover',
    borderRadius: responsiveHeight(2),
  },
  title: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    marginVertical: responsiveHeight(1),
    textAlign: 'center',
  },
  text: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
    marginBottom: responsiveHeight(1),
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00adef',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(50),
    height: responsiveHeight(5),
    borderRadius: responsiveHeight(2),
    marginBottom: responsiveHeight(4),
  },
  buttonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MultiSlider;
