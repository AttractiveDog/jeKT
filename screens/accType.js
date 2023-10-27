import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AccountType = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("AnonAcc")}>
        <Text style={styles.buttonText1}>create an anonymous account.</Text>
        <Text style={styles.buttonText1}>-_=</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("DetScreen")}>
        <Text style={styles.buttonText}>create a detailed account.</Text>
        <Text style={styles.buttonText}>._.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  button1: {
    width: '100%', // Set the button width to 100% of the parent container
    height: '53%',  // Set the button height to 50% of the parent container
    backgroundColor: '#000',
    paddingTop: 100,
    paddingLeft: 10
  },
  button2: {
    width: '100%', // Set the button width to 100% of the parent container
    height: '50%',  // Set the button height to 50% of the parent container
    backgroundColor: '#724cf9',
    paddingTop: 100,
    paddingLeft: 10
  },
  buttonText: {
    color: '#000',
    fontSize: 50,
    fontFamily: "Karma"
  },
  buttonText1: {
    color: '#fff',
    fontSize: 50,
    fontFamily: "Karma"
  }
});

export default AccountType;