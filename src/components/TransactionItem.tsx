import { globalStyles } from "../styles/globalStyles"
import { StyleSheet, Text, View } from "react-native"
import { categories } from "../constants/categories"
import CategoryItem from "./CategoryItem"

interface TransactionItemProps {
  category: keyof typeof categories
  date: string
  description: string
  value: number
}

export default function TransactionItem({ category, date, description, value }: TransactionItemProps) {
  const valueStyle =
    category === categories.income.name
      ? globalStyles.positiveText
      : globalStyles.negativeText

  return (
    <>
      <View style={styles.itemContainer}>
        <CategoryItem category={category} />
        <View style={styles.textContainer}>
          <Text style={globalStyles.secondaryText}>
            {new Date(date).toLocaleDateString("pt-BR")}
          </Text>
          <View style={styles.bottomLineContainer}>
            <Text style={globalStyles.primaryText}>{description}</Text>
            <Text style={valueStyle}>
              {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.line} />
    </>
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
    flexDirection: "column",
    marginLeft: 12,
    paddingVertical: 8
  },
  bottomLineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})