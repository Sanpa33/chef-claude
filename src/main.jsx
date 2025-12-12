import React from "react"


export default function Main() {

    
    const [ingredientsList, setIngredientsList] = React.useState([])
    
    console.log(ingredientsList)
    
    const ingredientsListItems = ingredientsList.map(ingredientList => (
        <li key={ingredientList}>{ingredientList}</li>
    ))


    function addIngredient (newIngredient){
        setIngredientsList(prevIngredient => [...prevIngredient,newIngredient]) 
    }


    function handleSubmit(event) {

        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        addIngredient(newIngredient)
    }
    


    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
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