import { categories } from "../constants/categories"
import { colors } from "../constants/colors"
import { MaterialIcons, MaterialIconsIconName } from "@react-native-vector-icons/material-icons"
import { StyleSheet, View } from "react-native"

interface CategoryItemProps {
  category: keyof typeof categories
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <View style={styles({ category }).background}>
      <MaterialIcons
        name={categories[category].icon as MaterialIconsIconName}
        size={24}
        color={colors.primaryContrast}
      />
    </View>
  )
}

interface CategoryItemStyles {
  category: keyof typeof categories
}

const styles = ({ category }: CategoryItemStyles) =>
  StyleSheet.create({
    background: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: categories[category].background
    }
  })