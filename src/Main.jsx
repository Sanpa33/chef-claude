import React from "react";
import Recipie from "./components/Recipe.jsx";
import Ingredients from "./components/Ingredients.jsx";
import { getRecipeFromChefClaude } from "./ai";

export default function Main() {
  const [ingredientsList, setIngredientsList] = React.useState([]);
  const recipeSection = React.useRef(null)

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredientsList((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  const [recipe, setRecipe] = React.useState("");

  async function showRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredientsList);
    setRecipe(recipeMarkdown);
  }

      /**
     * Challenge:
     * Add a new effect that calls `recipeSection.current.scrollIntoView()`
     * only if recipe is not an empty string and recipeSection.current is not null.
     * Think carefully about what value(s) you would want to include in
     * the dependencies array.
     */

  React.useEffect(() => { 
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({behavior: "smooth"})
    }
  }, [recipe ]);



  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredientsList.length > 0 && (
        <Ingredients
          ref = {recipeSection}
          ingredientsList ={ingredientsList}
          showRecipie={showRecipe}
        />
      )}

      {recipe && <Recipie recipe={recipe} />}
    </main>
  );
}
