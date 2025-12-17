import React from "react"
import Recipie from "./Recipie.jsx"
import Ingredients from "./Ingredients.jsx"


export default function Main() {

    
    const [ingredientsList, setIngredientsList] = React.useState([])
        
    const ingredientsListItems = ingredientsList.map(ingredientList => (
        <li key={ingredientList}>{ingredientList}</li>
    ))


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredientsList(prevIngredient => [...prevIngredient,newIngredient]) 
    }
    
    const [recipeShown,setRecipeShown] = React.useState(false)

    function showRecipie (){
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

            <Ingredients ingredientsListItems={ingredientsListItems}  showRecipie = {showRecipie}/>

            <Recipie recipieShown={recipeShown}/>

        </main>
    )
}