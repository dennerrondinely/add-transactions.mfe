import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { colors } from "../constants/colors";

interface ButtonProps {
  children: string;
  onPress: () => void;
}

export default function Button({ children, onPress }: ButtonProps) {
  return (
    <TouchableHighlight style={style.background} onPress={onPress}>
      <Text style={style.text}>{children}</Text>
    </TouchableHighlight>
  )
}

const style = StyleSheet.create({
  background: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.primary
  },
  text: {
    color: colors.primaryContrast,
    fontSize: 18,
    fontWeight: 600
  }
})