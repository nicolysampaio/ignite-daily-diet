import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

export interface DateStorageDTO {
  id: string;
  title: string;
  description: string;
  withinDiet: boolean;
  date: string;
  time: string
}