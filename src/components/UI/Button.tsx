import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Spacing from "../../constants/Spacing";
import Fonts from "../../constants/Fonts";
import Color from "../../constants/Color";
import FontSize from "../../constants/FontSize";

interface CustomButtonProps {
  title: string;
  width: string | number;
  backgroundColor: string;
  color: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  width,
  backgroundColor,
  color,
}) => {
  const Spacing = 10; // Vous devez définir votre propre valeur de Spacing

  return (
    <TouchableOpacity
      style={[
        styles.loginButton,
        { width: width, backgroundColor: backgroundColor },
      ]}
    >
      <Text style={[styles.buttonText, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    paddingVertical: Spacing * 1.75,
    paddingHorizontal: Spacing * 2,
    borderRadius: Spacing,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.15,
    shadowRadius: Spacing,
  },
  buttonText: {
    fontFamily: Fonts["poppins-bold"],
    color: Color.onPrimary,
    fontSize: FontSize.large,
    textAlign: "center",
  },
});

export default CustomButton;
