import React, { useState } from "react";
import { TextInput, View, StyleSheet, TextInputProps } from "react-native";
import Fonts from "../../constants/Fonts";
import FontSize from "../../constants/FontSize";
import Spacing from "../../constants/Spacing";
import Color from "../../constants/Color";

interface MyTextInputProps extends TextInputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  maxLength?: number;
  multiline?: boolean;
}

const MyTextInput: React.FC<MyTextInputProps> = ({
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  autoCapitalize,
  autoCorrect,
  maxLength,
  multiline,
  ...rest
}) => {
  const [text, setText] = useState("");

  const handleChangeText = (inputText: string) => {
    setText(inputText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Color.darkText}
        onChangeText={handleChangeText}
        value={text}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={true}
        maxLength={maxLength}
        multiline={multiline}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    height: 60,
    fontFamily: Fonts["poppins-regular"],
    fontSize: FontSize.small,
    padding: Spacing,
    backgroundColor: Color.lightPrimary,
    borderRadius: Spacing,
  },
});

export default MyTextInput;
