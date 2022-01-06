import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataLocalStorage = async (value: string | null) => {
  try {
    if (value !== null) await AsyncStorage.setItem('emailToSignIn', value);
  } catch (error) {
    throw error;
  }
};

export const retrieveDataLocalStorage = async (key: string) => {
  try {
    let data = await AsyncStorage.getItem(key);

    return data;
  } catch (err) {
    throw err;
  }
};
