import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyTextInput from "../components/UI/InputText";
import Spacing from "../constants/Spacing";
import Color from "../constants/Color";
import CustomButton from "../components/UI/Button";
import CustomIcon from "../components/UI/Icon";

const ForgetPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconsStyle}>
        <CustomIcon
          name="arrow-back"
          size={Spacing * 2}
          color={Color.primary}
        />
      </View>
      <View style={styles.inputView}>
        <MyTextInput placeholder="Email" />
        <CustomButton
          title="Submit"
          width="48%"
          color={Color.onPrimary}
          backgroundColor={Color.primary}
        />
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
