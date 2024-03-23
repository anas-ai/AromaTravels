import {View, Text} from 'react-native';
import React from 'react';

const Map = () => {
  return (
    <View>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7256.559199150958!2d73.66824657514259!3d24.579545078113767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e54f799d4845%3A0xf0d79f998048b31b!2sTravel%20Aroma%20%7C%20Taxi%20Service%20Udaipur%20%7C%20Car%20Rental%20Udaipur%20%7C%20Airport%20Taxi%20Udaipur%20%7C%20Sightseeing%20Taxi%20Udaipur!5e0!3m2!1sen!2sin!4v1710918680823!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>{' '}
    </View>
  );
};

export default Map;
