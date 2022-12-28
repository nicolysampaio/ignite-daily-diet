import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealStorageDto } from "./MealStorageDTO";

export async function mealCreate(newMeal: string) {
  try {
    await AsyncStorage.setItem(MEAL_COLLECTION, newMeal);
  } catch (error) {
    console.log(error);
  }
}
