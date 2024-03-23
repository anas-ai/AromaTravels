import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  TouchableHighlight
} from 'react-native';
import { useFormik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
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
      const nameRegex = /^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/; 

      if (!values.firstName) {
        errors.firstName = 'First name is required';
      } else if (!nameRegex.test(values.firstName)) {
        errors.firstName = 'First name must start with an uppercase letter and contain only letters';
       }

      if (!values.lastName) {
        errors.lastName = 'Last name is required';
      } else if (!/^[A-Z][a-zA-Z]*$/.test(values.lastName)) {
        errors.lastName = 'Last name must start with an uppercase letter and contain only letters';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!emailRegex.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone number is required';
      } else if (!/^\d{10}$/i.test(values.phoneNumber)) {
        errors.phoneNumber = 'Invalid phone number';
      }

      if (!values.country) {
        errors.country = 'Country is required';
      }

      if (!values.travelDate) {
        errors.travelDate = 'Travel date is required';
      } else if (!/^\d{4}-\d{2}-\d{2}$/i.test(values.travelDate)) {
        errors.travelDate = 'Invalid date format (YYYY-MM-DD)';
      }
      

      
      
      if (!values.childrenCount) {
        errors.childrenCount = 'Number of children is required';
      }

      if (!values.message) {
        errors.message = 'Message is required';
      } else if (values.message.length < 50) {
        errors.message = 'Message must be at least 50 characters';
      }
      
      return errors;
    },
  });

  // Dropdown state and data
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'India', value: 'India' },
    { label: 'USA', value: 'USA' },
    { label: 'Australia', value: 'Australia' },
    { label: 'UK', value: 'UK' },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Travel Aroma Enquiry Form</Text>

        <TextInput
          style={styles.input}
          onChangeText={formik.handleChange('firstName')}
          onBlur={formik.handleBlur('firstName')}
          value={formik.values.firstName}
          placeholder="Full Name"
          placeholderTextColor={'gray'}
        />
        {formik.errors.firstName ? (
          <Text
            style={
              formik.errors.firstName === 'Required'
                ? styles.requiredErrorText
                : styles.errorText
            }>
            {formik.errors.firstName}
          </Text>
        ) : null}

        {/* <TextInput
          style={styles.input}
          onChangeText={formik.handleChange('lastName')}
          onBlur={formik.handleBlur('lastName')}
          value={formik.values.lastName}
          placeholder="Last Name"
        />
        {formik.errors.lastName && <Text style={styles.errorText}>{formik.errors.lastName}</Text>} */}

        <TextInput
          style={styles.input}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={'gray'}
        />
        {formik.errors.email && <Text style={styles.errorText}>{formik.errors.email}</Text>}

        <TextInput
          style={styles.input}
          onChangeText={formik.handleChange('phoneNumber')}
          onBlur={formik.handleBlur('phoneNumber')}
          value={formik.values.phoneNumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          placeholderTextColor={'gray'}
        />
        {formik.errors.phoneNumber && <Text style={styles.errorText}>{formik.errors.phoneNumber}</Text>}

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select Country"
          style={styles.dropDownPicker}
          textStyle={styles.dropDownPickerText}
          containerStyle={styles.dropDownPickerContainer}
          onChangeValue={val => formik.setFieldValue('country', val)}
          placeholderTextColor={'gray'}
        />
        {formik.errors.country && <Text style={styles.errorText}>{formik.errors.country}</Text>}

        <TextInput
          style={styles.input}
          onChangeText={formik.handleChange('travelDate')}
          onBlur={formik.handleBlur('travelDate')}
          value={formik.values.travelDate}
          placeholder="Travel Date (YYYY-MM-DD)"
          keyboardType="numeric"
          placeholderTextColor={'gray'}
        />
        {formik.errors.travelDate && <Text style={styles.errorText}>{formik.errors.travelDate}</Text>}

        <TextInput
          style={styles.input}
          onChangeText={formik.handleChange('duration')}
          onBlur={formik.handleBlur('duration')}
          value={formik.values.duration}
          placeholder="Duration of Travel eg 2N-3D"
          placeholderTextColor={'gray'}
        />
        {formik.errors.duration && <Text style={styles.errorText}>{formik.errors.duration}</Text>}

        <TextInput
          style={styles.input}
          onChangeText={formik.handleChange('adultCount')}
          onBlur={formik.handleBlur('adultCount')}
          value={formik.values.adultCount}
          placeholder="Number of Adults"
          keyboardType="numeric"
          placeholderTextColor={'gray'}
        />
        {formik.errors.adultCount && <Text style={styles.errorText}>{formik.errors.adultCount}</Text>}

        <TextInput
          style={styles.input}
          onChangeText={formik.handleChange('childrenCount')}
          onBlur={formik.handleBlur('childrenCount')}
          value={formik.values.childrenCount}
          placeholder="Number of Children"
          keyboardType="numeric"
          placeholderTextColor={'gray'}
        />
        {formik.errors.childrenCount && <Text style={styles.errorText}>{formik.errors.childrenCount}</Text>}

        <TextInput
          style={[styles.input, styles.messageInput]}
          onChangeText={formik.handleChange('message')}
          onBlur={formik.handleBlur('message')}
          value={formik.values.message}
          placeholder="Message (at least 50 characters)"
          multiline
          placeholderTextColor={'gray'}
        />
        {formik.errors.message && <Text style={styles.errorText}>{formik.errors.message}</Text>}

        <TouchableHighlight style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  formContainer: {
    alignItems: 'center',
  },
  formHeading: {
    color: '#213e9a',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    color: '#333',
    backgroundColor: '#fff',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  dropDownPicker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  dropDownPickerText: {
    color: '#333',
  },
  dropDownPickerContainer: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#00adef',
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
  errorText: {
    color: 'red',
    marginBottom: 8,
    marginRight: '15%', 
    width:'80%'
  },
  requiredErrorText: {
    color: 'red',
    marginBottom: 5,
    marginRight: 40, 
    fontWeight: 'bold',
  },
});

export default ContactForm;
