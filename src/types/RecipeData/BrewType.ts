export interface BrewSimple {
  id: number;
  recipeId: number;
  name: string | undefined;
  notes: null | string;
  evaluation: null | string;
  createdAt: Date;
}

type BrewType = {
  // id: number;
  // name: string;
  // description: string;
  // locked: boolean;
  // createdAt?: Date | null;
  // updatedAt?: Date | null;
  // deletedAt?: Date | null;
  // Ingredients: Array<IngredientType>;
  // Instructions: Array<InstructionType>;
};

export default BrewType;
