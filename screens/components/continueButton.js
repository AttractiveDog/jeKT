import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginButton = () => {
    const navigation = useNavigation();
    return (
    <View style={styles.buttonArea}>
      <TouchableOpacity onPress={() => navigation.navigate("Other")}>
        <View style={[styles.button]}>
          <Text style={styles.buttonText}>=></Text>
        </View>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 150,
        backgroundColor: "#724cf9",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#fff",
        borderWidth:10,
    
      },
      buttonArea: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
        padding: 20,
      },
      buttonText: {
        color: "#000",
        fontFamily: "Karma",
        fontSize: 70,
      },
});

export default LoginButton;
