import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface DatePickerProps {
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
}

export default function DatePicker({ form, setForm }: DatePickerProps) {
  const [showPicker, setShowPicker] = useState(false)

  const handleDateChange = (_: any, selectDate: Date | undefined) => {
    setShowPicker(false)

    if (selectDate) {
      setForm({ ...form, date: selectDate })
    }
  }

  return (
    <View>
      <Text style={globalStyles.inputLabel}>Data</Text>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <TextInput
          value={form.date.toLocaleDateString("pt-BR")}
          onChangeText={(text) => setForm({ ...form, date: new Date(text) })}
          style={globalStyles.input}
          editable={false}
        />
      </TouchableOpacity>

      {showPicker && (
        <RNDateTimePicker
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "default"}
          value={form.date}
          onChange={handleDateChange}
        />
      )}
    </View>
  )
}