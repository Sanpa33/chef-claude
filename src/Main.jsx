import React from "react"
import Recipie from "./components/Recipe.jsx"
import Ingredients from "./components/Ingredients.jsx"


export default function Main() {

    
    const [ingredientsList, setIngredientsList] = React.useState([])
        
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredientsList(prevIngredient => [...prevIngredient,newIngredient]) 
    }
    
    const [isRecipeShown,setRecipeShown] = React.useState(false)

    function showRecipe (){
        setRecipeShown(prevShown => !prevShown)
    }

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

            {ingredientsList.length > 0 && 
            <Ingredients ingredientsList={ingredientsList}  showRecipie = {showRecipe}/>}

            {isRecipeShown && <Recipie/>}

        </main>
    )
}