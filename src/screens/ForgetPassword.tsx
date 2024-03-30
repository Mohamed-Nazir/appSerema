import React, { Component } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export class ForgetPassword extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text> Forget Password </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default ForgetPassword;
