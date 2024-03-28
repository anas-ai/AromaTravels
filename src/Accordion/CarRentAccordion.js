import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const CarRentAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title
              style={{
                fontSize: responsiveFontSize(1.7),
                color: '#707070',
                fontWeight: '700',
                marginLeft: responsiveScreenWidth(0.5)
              }}>
              Car Rent
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Economy')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{ fontSize: responsiveFontSize(1.5), marginLeft: '5%', marginVertical:responsiveScreenWidth(-4), }}>Economy Cars</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MidSize')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{ fontSize: responsiveFontSize(1.5), marginLeft: '5%' ,marginVertical:responsiveScreenWidth(-4)}}>Mid-Size Cars</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Luxury')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{ fontSize: responsiveFontSize(1.5), marginLeft: '5%',marginVertical:responsiveScreenWidth(-4) }}>Luxury Cars</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DeluxeCar')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{ fontSize: responsiveFontSize(1.5), marginLeft: '5%',marginVertical:responsiveScreenWidth(-4) }}>Deluxe Coach </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </ListItem.Accordion>
    </>
  );
}

export default CarRentAccordion;
