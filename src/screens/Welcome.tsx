import {
  Dimensions,
  Image,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Spacing from "../constants/Spacing";
import fontSize from "../constants/FontSize";
import Fonts from "../constants/Fonts";
import color from "../constants/Color";
import Color from "../constants/Color";

const { height } = Dimensions.get("window");

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentImage}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../../assets/images/welcome.png")}
        />
      </View>
      <View style={{ paddingTop: Spacing }}>
        <Text style={styles.welcomeText}>Welcome to Serema</Text>
        <Text style={styles.sloganText}>
          Vos services à la portée de TOUS !
        </Text>
      </View>
      <View style={styles.containerLogin}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.push("login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  contentImage: {
    alignItems: "center",
    justifyContent: "center",
  },

  welcomeImage: {
    height: height / 3,
    marginTop: Spacing * 15,
  },
  welcomeText: {
    fontSize: fontSize.xxLarge,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
    color: color.primary,
  },
  sloganText: {
    fontSize: fontSize.large,
    color: color.text,
    fontFamily: Fonts["poppins-regular"],
    textAlign: "center",
  },
  containerLogin: {
    paddingHorizontal: Spacing * 2,
    paddingTop: Spacing * 6,
    flexDirection: "row",
  },

  loginButton: {
    backgroundColor: color.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    shadowColor: color.primary,
    borderRadius: Spacing,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  loginText: {
    fontFamily: Fonts["poppins-bold"],
    color: color.onPrimary,
    fontSize: fontSize.large,
    textAlign: "center",
  },
  registerButton: {
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    borderRadius: Spacing,
  },
  registerText: {
    fontFamily: Fonts["poppins-bold"],
    color: color.text,
    fontSize: fontSize.large,
    textAlign: "center",
  },
});
