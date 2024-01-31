import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {ListItem, Avatar} from '@rneui/themed';

const TourAccordin = () => {
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigation();

  return (
    <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title>Tour</ListItem.Title>
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
              <ListItem.Title>North Tours</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('South')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>South Tours</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('GoldenLeaf')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Golden Leaf</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RoyalRajasthan')}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Royal Rajasthan</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </ListItem.Accordion>
    </>
  );
};


export default TourAccordin