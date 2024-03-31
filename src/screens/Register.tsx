import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Spacing from "../constants/Spacing";
import Color from "../constants/Color";
import FontSize from "../constants/FontSize";
import Fonts from "../constants/Fonts";
import MyTextInput from "../components/UI/InputText";
import CustomButton from "../components/UI/Button";
import CustomIcon from "../components/UI/Icon";

const Register = ({ navigation }) => {
  const backOnPress = () => {
    navigation.navigate("home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.registerContainer}>
        <View style={styles.iconsStyle}>
          <CustomIcon
            name="arrow-back"
            size={Spacing * 2}
            color={Color.primary}
            onPress={backOnPress}
          />
        </View>
        <View style={styles.welcomeRegister}>
          <Text style={styles.registerText}>Create account</Text>
          <Text style={styles.welcomeRegisterText}>
            Create new account so you can explore all mobile money services
          </Text>
        </View>
        <View style={styles.inputView}>
          <MyTextInput placeholder="Email" />
          <MyTextInput placeholder="Password" secureTextEntry={true} />
          <MyTextInput placeholder="Confirm Password" secureTextEntry={true} />
        </View>
      </View>
      <View
        style={{
          marginTop: Spacing,
          marginBottom: Spacing * 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomButton
          title="Sign Up"
          width="90%"
          color={Color.onPrimary}
          backgroundColor={Color.primary}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.createAccountText}>Already have an account</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: Spacing * 2,
        }}
      >
        <View style={{ marginRight: Spacing * 2 }}>
          <CustomIcon
            name="logo-google"
            size={Spacing * 3}
            color={Color.text}
          />
        </View>
        <View style={{ marginRight: Spacing * 2 }}>
          <CustomIcon name="logo-apple" size={Spacing * 3} color={Color.text} />
        </View>
        <CustomIcon
          name="logo-linkedin"
          size={Spacing * 3}
          color={Color.text}
        />
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
  registerContainer: {
    marginVertical: Spacing * 2,
  },
  iconsStyle: {
    backgroundColor: "black",
    paddingVertical: Spacing,
    paddingHorizontal: Spacing,
    marginHorizontal: Spacing * 2,
    borderRadius: 100,
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeRegister: {
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    fontSize: FontSize.xLarge,
    color: Color.primary,
    paddingVertical: Spacing * 2,
    fontFamily: Fonts["poppins-bold"],
  },
  welcomeRegisterText: {
    fontSize: FontSize.small,
    fontFamily: Fonts["poppins-semiBold"],
    width: "80%",
    textAlign: "center",
  },
  inputView: {
    paddingTop: Spacing * 3,
  },
  createAccountText: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-semiBold"],
    color: Color.text,
  },
});
