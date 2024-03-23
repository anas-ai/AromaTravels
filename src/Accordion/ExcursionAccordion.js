import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const ExcursionAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title
              style={{
                fontSize: RFPercentage(1.7),
                color: 'gray',
                fontWeight:'700',
                marginLeft:responsiveScreenWidth(.5)
              }}>
              Udaipur Excursion
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('UdaipurDay')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Udaipur Day Tour</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Kumbhalgarh')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Kumbhalgarh-Haldighati Tour</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Ranakpur')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Ranakpur Kumbhalgarh day tour</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Ekling')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>
                Eklingji Nathdwara Haldighati Tour{' '}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chittorgarh')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Chittorgarh Fort day tour</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MountAbu')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontSize:responsiveFontSize(1.5),marginLeft:'5%'}}>Mount Abu Tour</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </ListItem.Accordion>
    </>
  );
}

export default ExcursionAccordion;
