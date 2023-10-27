import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OtherScreen = () => {
  const [userInput, setUserInput] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const handleInputChange = (text) => {
    setUserInput(text);
  };

  const handleSubmit = () => {
    setDisplayedText(userInput);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter something:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={userInput}
        placeholder="Type here"
      />
      <Button title="Submit" onPress={handleSubmit} />

      {displayedText ? (
        <Text style={styles.displayedText}>You entered: {displayedText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000'
  },
  label: {
    fontSize: 18,
    color
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 10,
    paddingLeft: 10,
  },
  displayedText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default OtherScreen;
