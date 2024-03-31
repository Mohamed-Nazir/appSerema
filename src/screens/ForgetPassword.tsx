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
        <Text style={styles.welcomeForgetText}>
          Entrer votre E-mail, un e-mail de rénitialisation vous sera envoyé
        </Text>
        <View style={styles.inputView}>
          <MyTextInput placeholder="Enter your Email" />
          <View
            style={{ marginHorizontal: Spacing * 1.75, marginTop: Spacing * 2 }}
          >
            <CustomButton
              title="Submit"
              width="100%"
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
    marginHorizontal: Spacing * 2,
    marginTop: Spacing * 2,
    borderRadius: 100,
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    backgroundColor: "#fff",
  },
  welcomeForgetText: {
    fontSize: FontSize.small,
    fontFamily: Fonts["poppins-semiBold"],
    width: "90%",
    marginHorizontal: Spacing * 3,
    marginTop: Spacing * 6,
  },
});
