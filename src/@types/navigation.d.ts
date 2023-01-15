export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      meal: {
        id: string;
      };
      createMeal: undefined;
      editMeal: {
        id: string;
      }
      feedback: {
        withinDiet?: boolean;
      };
    }
  }
}
