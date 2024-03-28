import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {ListItem, Avatar} from '@rneui/themed';
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { RFPercentage } from 'react-native-responsive-fontsize';

const TourAccordin = () => {
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigation();

  return (
    <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title  style={{
                fontSize: responsiveFontSize(1.7),
                color: '#787878',
                fontWeight: '700',
                marginLeft: responsiveScreenWidth(0.5)
              }}>Tour</ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('North')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%',marginVertical:responsiveScreenWidth(-4)}}>North Tours</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('South')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%',marginVertical:responsiveScreenWidth(-4)}}>South Tours</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('GoldenLeaf')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%',marginVertical:responsiveScreenWidth(-4)}}>Golden Leaf</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RoyalRajasthan')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%',marginVertical:responsiveScreenWidth(-4)}}>Royal Rajasthan</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </ListItem.Accordion>
    </>
  );
};


export default TourAccordin