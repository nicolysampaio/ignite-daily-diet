import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATE_COLLECTION } from "@storage/storageConfig";
import { DateStorageDTO } from './DateStorageDTO';

export async function datesGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DATE_COLLECTION);

    const dates: DateStorageDTO[] = storage ? JSON.parse(storage) : [];

    return dates;
  } catch (error) {
    throw error;
  }
}
