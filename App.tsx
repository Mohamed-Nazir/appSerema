import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import fonts from "./src/config/fonts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
