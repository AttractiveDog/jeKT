import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login";
import AccountType from "./screens/accType";
import AnonAcc from "./screens/anonAcc";
import DetScreen from "./screens/detailsAcc";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Other"
            component={AccountType}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AnonAcc"
            component={AnonAcc}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetScreen"
            component={DetScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  loginScreen: {
    marginTop: 100,
    marginLeft: 20,
  },
  heading: {
    fontSize: 70,
    color: "#fca311",
    marginBottom: 16,
    fontFamily: "Karma",
  },
  pressableMargin: {
    marginTop: 16,
  },
});
