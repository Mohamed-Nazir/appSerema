import { Ionicons } from "@expo/vector-icons";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import Spacing from "../constants/Spacing";
import Color from "../constants/Color";
import FontSize from "../constants/FontSize";
import Fonts from "../constants/Fonts";
import MyTextInput from "../components/UI/InputText";
import CustomButton from "../components/UI/Button";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.iconsStyle}>
          <Ionicons
            name="arrow-back"
            size={Spacing * 3}
            color={Color.primary}
            onPress={() => navigation.navigate("home")}
          />
        </View>
        <View style={styles.welcomeLogin}>
          <Text style={styles.loginText}>Login here</Text>
          <Text style={styles.welcomeLoginText}>
            {" "}
            Welcome you've been missed !{" "}
          </Text>
        </View>
        <View style={styles.inputView}>
          <MyTextInput placeholder="Email" />
          <MyTextInput placeholder="Password" secureTextEntry={true} />
        </View>
      </View>
      <View>
        <Text style={styles.forgetPasswordText}>Forget Password ? </Text>
      </View>
      <View
        style={{
          marginVertical: Spacing * 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomButton
          title="Sign In"
          width="90%"
          color={Color.onPrimary}
          backgroundColor={Color.primary}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  iconsStyle: {
    backgroundColor: "black",
    paddingVertical: Spacing,
    paddingHorizontal: Spacing,
    marginHorizontal: Spacing * 2,
    borderRadius: 100,
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeLogin: {
    paddingHorizontal: Spacing * 2,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: FontSize.xLarge,
    color: Color.primary,
    paddingVertical: Spacing * 2,
    fontFamily: Fonts["poppins-bold"],
  },
  welcomeLoginText: {
    fontSize: FontSize.large,
    color: Color.text,
    fontFamily: Fonts["poppins-semiBold"],
    width: "60%",
    textAlign: "center",
  },
  inputView: {
    paddingTop: Spacing * 5,
  },
  forgetPasswordText: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-semiBold"],
    color: Color.primary,
    alignSelf: "flex-end",
    marginHorizontal: Spacing * 2,
  },
});
