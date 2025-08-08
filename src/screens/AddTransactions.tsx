import Button from '../components/Button';
import CategoryPicker from '../components/CategoryPicker';
import CurrencyInput from '../components/CurrencyInput';
import DatePicker from '../components/DatePicker';
import DescriptionInput from '../components/DescriptionInput';
import { categories } from '../constants/categories';
import { globalStyles } from '../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useRef, useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useMoneyStore } from 'store/transactionsStore';

const initialForm = {
  description: '',
  value: 0,
  date: new Date(),
  category: categories.income.name,
};

export default function AddTransactions() {
  const [form, setForm] = useState(initialForm);
  const { transactions, setTransactions } = useMoneyStore();
  const valueInputRef = useRef<TextInput>(null);

  const setAsyncStorage = async (data: any) => {
    try {
      await AsyncStorage.setItem('transactions', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  const addTransaction = async () => {
    const newTransaction = { id: transactions.length + 1, ...form };
    const updatedTransactions = [...transactions, newTransaction];

    setTransactions(updatedTransactions);
    setForm(initialForm);
    await setAsyncStorage(updatedTransactions);

    Alert.alert('Transação adicionada com sucesso!');
  };

  return (
    <KeyboardAvoidingView style={globalStyles.screenContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={globalStyles.content}>
          <View style={styles.form}>
            <DescriptionInput
              form={form}
              setForm={setForm}
              valueInputRef={valueInputRef}
            />

            <CurrencyInput
              form={form}
              setForm={setForm}
              valueInputRef={valueInputRef}
            />

            <DatePicker form={form} setForm={setForm} />

            <CategoryPicker form={form} setForm={setForm} />
          </View>

          <Button onPress={addTransaction}>Adicionar</Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 12,
    marginBottom: 40,
    marginTop: 10,
  },
});
