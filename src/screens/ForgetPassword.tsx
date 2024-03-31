import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyTextInput from "../components/UI/InputText";
import Spacing from "../constants/Spacing";
import Color from "../constants/Color";
import CustomButton from "../components/UI/Button";
import CustomIcon from "../components/UI/Icon";
import FontSize from "../constants/FontSize";
import Fonts from "../constants/Fonts";

const ForgetPassword = ({ navigation }) => {
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.forgetPasswordContainer}>
        <View style={styles.iconsStyle}>
          <CustomIcon
            name="arrow-back"
            size={Spacing * 2}
            color={Color.primary}
            onPress={onPressBack}
          />
        </View>
        <Text style={styles.welcomeRegisterText}>
          Create new account so you can explore all mobile money services
        </Text>
        <View style={styles.inputView}>
          <MyTextInput placeholder="Enter your Email" />
          <View>
            <CustomButton
              title="Submit"
              width="90%"
              color={Color.onPrimary}
              backgroundColor={Color.primary}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  forgetPasswordContainer: {
    marginVertical: Spacing * 2,
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
  welcomeRegisterText: {
    fontSize: FontSize.small,
    fontFamily: Fonts["poppins-semiBold"],
    width: "80%",
    textAlign: "center",
  },
});
