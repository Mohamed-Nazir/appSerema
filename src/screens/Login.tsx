import { Ionicons } from "@expo/vector-icons";
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

const Login = ({ navigation }) => {
  const backOnPress = () => {
    navigation.navigate("home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.iconsStyle}>
          <CustomIcon
            name="arrow-back"
            size={Spacing * 2}
            color={Color.primary}
            onPress={backOnPress}
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
        <TouchableOpacity onPress={() => navigation.navigate("forgetPassword")}>
          <Text style={styles.forgetPasswordText}>Forget Password ? </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: Spacing * 6,
          marginBottom: Spacing * 3,
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
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.push("register")}>
          <Text style={styles.createAccountText}>Create new account</Text>
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

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  loginContainer: {
    marginVertical: Spacing * 3,
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
  createAccountText: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-semiBold"],
    color: Color.text,
  },
});
