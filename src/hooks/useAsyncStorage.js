import React, { useEffect, useState } from 'react';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default key => {
    const [storageItem, setStorageItem] = useState(null);

    async function getStorageItem() {
        let data = await AsyncStorage.getItem(key);
        setStorageItem(data);
    }

    function updateStorageItem(data) {
        if (typeof data === 'string') {
            AsyncStorage.setItem(key, data);
            setStorageItem(data);
        }
        return data;
    }

    function clearStorageItem() {
        AsyncStorage.removeItem(key);
        setStorageItem(null);
    }

    useEffect(() => {
        getStorageItem();
    });

    return [storageItem, updateStorageItem, clearStorageItem];
};

// hdsd
// const [storageItem, updateStorageItem, clearStorageItem] = useAsyncStorage(key);
// ${storageItem}`, updateStorageItem('Test String'), clearStorageItem()