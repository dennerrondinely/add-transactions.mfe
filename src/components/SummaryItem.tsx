import { StyleSheet, Text, View } from "react-native"

import { categories } from "../constants/categories"
import { globalStyles } from "../styles/globalStyles"
import CategoryItem from "./CategoryItem"

interface SummaryItemProps {
  category: keyof typeof categories
  value: number
}

export default function SummaryItem({ category, value }: SummaryItemProps) {
  const valueStyle =
    category === categories.income.name
      ? globalStyles.positiveText
      : globalStyles.negativeText

  return (
    <View style={styles.itemContainer}>
      <CategoryItem category={category} />
      <View style={styles.textContainer}>
        <Text style={globalStyles.primaryText}>{categories[category].displayName}</Text>
        <Text style={valueStyle}>
          {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 4
  },
  textContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 12
  }
})