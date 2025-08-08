import { StoreApi } from 'zustand';
interface MoneyStore {
    transactions: any[];
    setTransactions: (tx: any[]) => void;
}
export declare const useMoneyStore: import("zustand").UseBoundStore<StoreApi<MoneyStore>>;
export {};
