import React from "react"


export default function Main() {

    
    const [ingredientsList, setIngredientsList] = React.useState([])
    
    console.log(ingredientsList)
    
    const ingredientsListItems = ingredientsList.map(ingredientList => (
        <li key={ingredientList}>{ingredientList}</li>
    ))


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredientsList(prevIngredient => [...prevIngredient,newIngredient]) 
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
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}