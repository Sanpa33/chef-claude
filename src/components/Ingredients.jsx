export default function Ingredients(props){

    const ingredientsListItems = props.ingredientsList.map(ingredientList => (
        <li key={ingredientList}>{ingredientList}</li>
    ))    
    
    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>
            {props.ingredientsList.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.showRecipie}> Get a recipe</button>
            </div>}
        </section>
    )
}