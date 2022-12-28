import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATE_COLLECTION } from "@storage/storageConfig";
import { DateStorageDto } from './DateStorageDTO';

export async function datesGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DATE_COLLECTION);

    const dates: DateStorageDto[] = storage ? JSON.parse(storage) : [];

    return dates;
  } catch (error) {
    throw error;
  }
}
