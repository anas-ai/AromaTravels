// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { useFormik } from 'formik';

// const Contact = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       email: '',
//       phoneNumber: '',
//       country: '',
//       travelDate: '',
//       duration: '',
//       adultCount: '',
//       childrenCount: '',
//       message: '',
//     },
//     onSubmit: values => {
//       console.log(values);
//     },
//     validate: values => {
//       const errors = {};
//       if (!values.firstName) {
//         errors.firstName = 'Required';
//       }
//       if (!values.email) {
//         errors.email = 'Required';
//       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//       }
//       if (!values.phoneNumber) {
//         errors.phoneNumber = 'Required';
//       } else if (!/^\d{10}$/i.test(values.phoneNumber)) {
//         errors.phoneNumber = 'Invalid phone number';
//       }
//       if (!values.country) {
//         errors.country = 'Required';
//       }
//       if (!values.travelDate) {
//         errors.travelDate = 'Required';
//       } else {
//         const currentDate = new Date();
//         const selectedDate = new Date(values.travelDate);
//         if (selectedDate <= currentDate) {
//           errors.travelDate = 'Travel date must be in the future';
//         }
//       }
//       if (!values.duration) {
//         errors.duration = 'Required';
//       }
//       if (!values.adultCount) {
//         errors.adultCount = 'Required';
//       }
//       if (!values.childrenCount) {
//         errors.childrenCount = 'Required';
//       }
//       if (!values.message) {
//         errors.message = 'Required';
//       }

//       return errors;
//     }
//   });

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.formContainer}>
//         <Text style={styles.formHeading}>Travel Aroma Enquiry Form</Text>

//         <TextInput
//           style={styles.input}
//           onChangeText={formik.handleChange('firstName')}
//           onBlur={formik.handleBlur('firstName')}
//           value={formik.values.firstName}
//           placeholder="First Name"
//           placeholderTextColor="#000"
//         />
//         {formik.errors.firstName && <Text style={styles.errorText}>{formik.errors.firstName}</Text>}

//         <TextInput
//           style={styles.input}
//           onChangeText={formik.handleChange('email')}
//           onBlur={formik.handleBlur('email')}
//           value={formik.values.email}
//           placeholder="Email"
//           placeholderTextColor="#000"
//         />
//         {formik.errors.email && <Text style={styles.errorText}>{formik.errors.email}</Text>}

//         <TextInput
//           style={styles.input}
//           onChangeText={formik.handleChange('phoneNumber')}
//           onBlur={formik.handleBlur('phoneNumber')}
//           value={formik.values.phoneNumber}
//           placeholder="Phone Number"
//           placeholderTextColor="#000"
//         />
//         {formik.errors.phoneNumber && <Text style={styles.errorText}>{formik.errors.phoneNumber}</Text>}

//         <TextInput
//           style={styles.input}
//           onChangeText={formik.handleChange('country')}
//           onBlur={formik.handleBlur('country')}
//           value={formik.values.country}
//           placeholder="Country"
//           placeholderTextColor="#000"
//         />
//         {formik.errors.country && <Text style={styles.errorText}>{formik.errors.country}</Text>}

//         <TextInput
//           style={styles.input}
//           onChangeText={formik.handleChange('travelDate')}
//           onBlur={formik.handleBlur('travelDate')}
//           value={formik.values.travelDate}
//           placeholder="Travel Date"
//           placeholderTextColor="#000"
//         />
//         {formik.errors.travelDate && <Text style={styles.errorText}>{formik.errors.travelDate}</Text>}

//         <TextInput
//           style={styles.input}
//           onChangeText={formik.handleChange('duration')}
//           onBlur={formik.handleBlur('duration')}
//           value={formik.values.duration}
//           placeholder="Duration"
//           placeholderTextColor="#000"
//         />
//         {formik.errors.duration && <Text style={styles.errorText}>{formik.errors.duration}</Text>}

//         <TextInput
//           style={styles.input}
//           onChangeText={formik.handleChange('adultCount')}
//           onBlur={formik.handleBlur('adultCount')}
//           value={formik.values.adultCount}
//           placeholder="Adult Count"
//           placeholderTextColor="#000"
//         />
//         {formik.errors.adultCount && <Text style={styles.errorText}>{formik.errors.adultCount}</Text>}

//         <TextInput
//           style={styles.input}
//           onChangeText={formik.handleChange('childrenCount')}
//           onBlur={formik.handleBlur('childrenCount')}
//           value={formik.values.childrenCount}
//           placeholder="Children Count"
//           placeholderTextColor="#000"
//         />
//         {formik.errors.childrenCount && <Text style={styles.errorText}>{formik.errors.childrenCount}</Text>}

//         <TextInput
//           style={styles.input}
//           onChangeText={formik.handleChange('message')}
//           onBlur={formik.handleBlur('message')}
//           value={formik.values.message}
//           placeholder="Message"
//           placeholderTextColor="#000"
//         />
//         {formik.errors.message && <Text style={styles.errorText}>{formik.errors.message}</Text>}

//         <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
//           <Text style={styles.buttonText}>Send Message</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//   },
//   formContainer: {
//     alignItems: 'center',
//     margin: 20,
//   },
//   formHeading: {
//     color: '#213e9a',
//     fontSize: 27,
//     fontWeight: 'normal',
//     marginVertical: 20,
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     color: '#000',
//   },
//   button: {
//     backgroundColor: '#000',
//     borderRadius: 8,
//     padding: 12,
//     marginTop: 20,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: ('1.5%'),
//     marginRight:('80%'),
//     marginTop:('-1%'),
//     flexDirection:'row',
//     flexWrap:'wrap'
//   },
// });

// export default Contact;

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useFormik} from 'formik';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      phoneNumber: '',
      country: '',
      travelDate: '',
      duration: '',
      adultCount: '',
      childrenCount: '',
      message: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validate: values => {
      const errors = {};
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      if (!values.firstName) {
        errors.firstName = 'Required';
      } else if (!/^[A-Z][a-zA-Z]*$/.test(values.firstName)) {
        errors.firstName =
          'First name must start with an uppercase letter and contain only letters';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!emailRegex.test(values.email)) {
        errors.email =
          'Please enter a valid email address in the format example@example.com';
      }

      if (!values.phoneNumber) {
        errors.phoneNumber = 'Required';
      } else if (!/^\d{10}$/i.test(values.phoneNumber)) {
        errors.email = 'Please enter a valid 10-digit phone number';
      }

      if (!values.country) {
        errors.country = 'Required';
      } else if (!isValidCountry(values.country)) {
        errors.country = 'Invalid country';
      }

      if (!values.travelDate) {
        errors.travelDate = 'Required';
      } else {
        const currentDate = new Date();
        const selectedDate = new Date(values.travelDate);

        if (isNaN(selectedDate) || selectedDate <= currentDate) {
          errors.travelDate = 'Date must be in (YYYY-MM-DD) format ';
        }
      }

      if (!values.duration) {
        errors.duration = 'Required';
      }

      if (!values.adultCount) {
        errors.adultCount = 'Required';
      }

      if (!values.childrenCount) {
        errors.childrenCount = 'Required';
      }

      if (!values.message) {
        errors.message = 'Required';
      } else if (values.message.length < 50){
        errors.message= `Must be at least ${50} charactors`
      }
      return errors;
    },
    
  });

  // country logic start
  const isValidCountry = country => {
    const ValidCountry = ['USA', 'India', 'Australia', 'UK'];
    return ValidCountry.includes(country);
  }; //end

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.formContainer}>
        <Text style={Styles.formHeading}>Travel Aroma Enquiry Form</Text>

        <TextInput
          style={Styles.input}
          onChangeText={formik.handleChange('firstName')}
          onBlur={formik.handleBlur('firstName')}
          value={formik.values.firstName}
          placeholder="First Name"
          placeholderTextColor={'#252525'}
        />
        {formik.errors.firstName ? (
          <Text
            style={
              formik.errors.firstName === 'Required'
                ? Styles.requiredErrorText
                : Styles.errorText
            }>
            {formik.errors.firstName}
          </Text>
        ) : null}

        <TextInput
          style={Styles.input}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          placeholder="Email"
          placeholderTextColor={'#252525'}
        />
        {formik.errors.email ? (
          <Text
            style={
              formik.errors.email === 'Required'
                ? Styles.requiredErrorText
                : Styles.errorText
            }>
            {formik.errors.email}
          </Text>
        ) : null}

        <TextInput
          style={Styles.input}
          onChangeText={formik.handleChange('phoneNumber')}
          onBlur={formik.handleBlur('phoneNumber')}
          value={formik.values.phoneNumber}
          placeholder="Phone Number"
          placeholderTextColor={'#252525'}
        />
        {formik.errors.phoneNumber ? (
          <Text
            style={
              formik.errors.phoneNumber === 'Required'
                ? Styles.requiredErrorText
                : Styles.errorText
            }>
            {formik.errors.phoneNumber}
          </Text>
        ) : null}

        <TextInput
          style={Styles.input}
          onChangeText={formik.handleChange('country')}
          onBlur={formik.handleBlur('country')}
          value={formik.values.country}
          placeholder="Country"
          placeholderTextColor={'#252525'}
        />
        {formik.errors.country ? (
          <Text
            style={
              formik.errors.country === 'Required'
                ? Styles.requiredErrorText
                : Styles.errorText
            }>
            {formik.errors.country}
          </Text>
        ) : null}

        <TextInput
          style={Styles.input}
          onChangeText={formik.handleChange('travelDate')}
          onBlur={formik.handleBlur('travelDate')}
          value={formik.values.travelDate}
          placeholder="travelDate"
          placeholderTextColor={'#252525'}
        />
        {formik.errors.travelDate ? (
          <Text
            style={
              formik.errors.travelDate === 'Required'
                ? Styles.requiredErrorText
                : Styles.errorText
            }>
            {formik.errors.travelDate}
          </Text>
        ) : null}

        <TextInput
          style={Styles.input}
          onChangeText={formik.handleChange('duration')}
          onBlur={formik.handleBlur('duration')}
          value={formik.values.duration}
          placeholder="duration"
          placeholderTextColor={'#252525'}
        />
        {formik.errors.duration ? (
          <Text
            style={
              formik.errors.duration === 'Required'
                ? Styles.requiredErrorText
                : Styles.errorText
            }>
            {formik.errors.duration}
          </Text>
        ) : null}

        <TextInput
          style={Styles.input}
          onChangeText={formik.handleChange('adultCount')}
          onBlur={formik.handleBlur('adultCount')}
          value={formik.values.adultCount}
          placeholder="adult Count"
          placeholderTextColor={'#000'}
        />
        {formik.errors.adultCount ? (
          <Text
            style={
              formik.errors.adultCount === 'Required'
                ? Styles.requiredErrorText
                : Styles.errorText
            }>
            {formik.errors.adultCount}
          </Text>
        ) : null}

        <TextInput
          style={Styles.input}
          onChangeText={formik.handleChange('childrenCount')}
          onBlur={formik.handleBlur('childrenCount')}
          value={formik.values.childrenCount}
          placeholder="children Count"
          placeholderTextColor={'#000'}
        />
        {formik.errors.childrenCount ? (
          <Text
            style={
              formik.errors.childrenCount === 'Required'
                ? Styles.requiredErrorText
                : Styles.errorText
            }>
            {formik.errors.childrenCount}
          </Text>
        ) : null}

        <TextInput
          style={Styles.input}
          onChangeText={formik.handleChange('message')}
          onBlur={formik.handleBlur('message')}
          value={formik.values.message}
          placeholder="Message"
          placeholderTextColor={'#000'}
        />

        {formik.errors.message ? (
          <Text
            style={
              formik.errors.message === 'Required'
                ? Styles.requiredErrorText
                : Styles.errorText
            }>
            {formik.errors.message}
          </Text>
        ) : null}

        <TouchableOpacity style={Styles.button} onPress={formik.handleSubmit}>
          <Text style={Styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  formContainer: {
    alignItems: 'center',
    margin: 15,
  },
  formHeading: {
    color: '#213e9a',
    fontSize: 27,
    fontWeight: 'normal',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    color: '#000',
  },
  errorText: {
    color: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
    width: '100%',
  },
  requiredErrorText: {
    color: 'red',
    marginBottom: '1.5%',
    marginRight: '80%',
    marginTop: '-1%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Contact;
