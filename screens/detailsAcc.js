import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard } from 'react-native';
import { firebase } from '../config';
export default function AnonAcc() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const todoRef = firebase.firestore().collection('newData');
  const [addData, setAddData] = useState('')
  const addField = () => {
    if (addData && addData.length > 0) {
      const timestamp =firebase.firestore.FieldValue.serverTimestamp()
      const data = {
        heading: addData,
        createdAt: timestamp
      }
      todoRef.add(data).then(() => {
        setAddData('')
        Keyboard.dismiss()
      })
      .catch(() => {
        alert(error)
      })
    }
  }
  const handleSignup = () => {
    // Handle user signup logic here
    // You can send the email, password, and username to your server for authentication
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(heading) => setAddData(heading)}
        value={addData}
        
      />
      <Button title="Sign Up" onPress={addField} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
