
    export type RemoteKeys = 'store/transactionsStore';
    type PackageType<T> = T extends 'store/transactionsStore' ? typeof import('store/transactionsStore') :any;