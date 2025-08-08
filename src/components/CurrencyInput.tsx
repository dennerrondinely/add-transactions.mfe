import { Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface CurrencyInputProps {
  form: {
    description: string;
    value: number;
    date: Date;
    category: string;
  };
  setForm: React.Dispatch<React.SetStateAction<{
    description: string;
    value: number;
    date: Date;
    category: string;
  }>>;
  valueInputRef: React.RefObject<TextInput | null>;
}

export default function CurrencyInput({ form, setForm, valueInputRef }: CurrencyInputProps) {
  const handleCurrencyChange = (text: string) => {
    const formattedValue = text.replace(/\D/g, "");
    const numberValue = formattedValue ? parseFloat(formattedValue) / 100 : 0;

    setForm({ ...form, value: numberValue });
  };

  return (
    <View>
      <Text style={globalStyles.inputLabel}>Valor</Text>
      <TextInput
        ref={valueInputRef}
        value={form.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}
        onChangeText={handleCurrencyChange}
        keyboardType="numeric"
        style={globalStyles.input}
      />
    </View>
  )
}