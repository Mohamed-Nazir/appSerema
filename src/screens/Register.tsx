import { Text, View, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacing from "../constants/Spacing";
import Color from "../constants/Color";
import { Ionicons } from "@expo/vector-icons";
import MyTextInput from "../components/UI/InputText";

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconsStyle}>
        <Ionicons
          name="arrow-back"
          size={Spacing * 2}
          color={Color.primary}
          onPress={() => navigation.navigate("home")}
        />
      </View>
      <View style={styles.inputView}>
        <MyTextInput placeholder="Email" />
        <MyTextInput placeholder="Password" secureTextEntry={true} />
        <Text> Register Page </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  iconsStyle: {
    backgroundColor: "black",
    paddingVertical: Spacing,
    paddingHorizontal: Spacing,
    marginHorizontal: Spacing * 3,
    marginTop: Spacing * 2,
    borderRadius: 100,
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    paddingVertical: Spacing * 5,
    backgroundColor: "#fff",
  },
});
