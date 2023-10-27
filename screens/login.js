import React from "react";
import {
  Pressable,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import LoginButton from "./components/continueButton";

const projectId = "fb7c5ced72715a3faaf680c5396c8c3f";
const providerMetadata = {
  name: "jeKT",
  description: "jeKT",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const LoginScreen = ({ navigation }) => {
  const { open, isConnected, address, provider } = useWalletConnectModal();

 
  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  };

  let [fontsLoaded] = useFonts({
    Karma: require("./assets/Karma-Future.otf"),
    Karma2: require("./assets/Karma-Suture.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginScreen}>
        <Text style={styles.heading}>login/signup</Text>
        <View style={{ paddingTop: 100 }}>
          <Text
            style={{
              fontFamily: "Karma",
              color: "#fff",
              fontSize: 35,
              
            }}
          >
            {isConnected ? "conneted :)" : "not connected :("}
          </Text>
          <Pressable onPress={handleButtonPress} style={styles.pressableMargin}>
            <View
              style={{
                borderRadius: 100,
                backgroundColor: "#e5e5e5",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                width: 150,
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontFamily: "Karma2", color: "#000", fontSize: 20 }}
              >
                {isConnected ? "disconnect?" : "connect?"  }
              </Text>
            </View>
          </Pressable>

          <WalletConnectModal
            projectId={projectId}
            providerMetadata={providerMetadata}
          />
        </View>
      </View>
      
      <View style={styles.btn}>
        <Text>
        {isConnected ? <LoginButton/> : 1}
        </Text>
        
      </View>
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  btn : {
    flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: "#3a86ff",
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
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  loginScreen: {
    paddingTop: 100,
    paddingLeft: 20,
  },
  heading: {
    fontSize: 70,
    paddingBottom: 16,
    color: "#724cf9",
    fontFamily: "Karma",
  },
  pressableMargin: {
    paddingTop: 16,
  },
});

export default LoginScreen;
