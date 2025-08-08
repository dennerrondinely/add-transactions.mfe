import { Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface DescriptionInputProps {
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

export default function DescriptionInput({ form, setForm, valueInputRef }: DescriptionInputProps) {
  return (
    <View>
      <Text style={globalStyles.inputLabel}>Descrição</Text>
      <TextInput
        value={form.description}
        returnKeyType="next"
        onChangeText={(text) => setForm({ ...form, description: text })}
        onSubmitEditing={() => valueInputRef.current?.focus()}
        style={globalStyles.input}
      />
    </View>
  )
}