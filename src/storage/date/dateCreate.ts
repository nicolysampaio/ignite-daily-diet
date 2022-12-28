import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATE_COLLECTION } from "@storage/storageConfig";

import { datesGetAll } from "./datesGetAll";

export async function dateCreate(newDate: string) {
  try {
    const storedDates = await datesGetAll();

    const stored = JSON.stringify([...storedDates, newDate]);

    await AsyncStorage.setItem(DATE_COLLECTION, stored);
  } catch (error) {
    console.log(error);
  }
}
