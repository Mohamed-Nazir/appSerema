import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Spacing from "../../constants/Spacing";

interface CustomIconProps {
  name: any;
  size: number;
  color: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default CustomIcon;
