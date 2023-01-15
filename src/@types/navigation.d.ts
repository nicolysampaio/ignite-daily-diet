import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      meal: {
        id: string;
      };
      createOrEditMeal: {
        type: "add" | "edit";
        meal?: MealStorageDTO;
      };
      feedback: {
        withinDiet?: boolean;
      };
    }
  }
}
