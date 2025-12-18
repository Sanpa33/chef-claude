export default function Ingredients(props){
    console.log(props.ingredientsListItems)
    return(
        props.ingredientsListItems.length > 0 && <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {props.ingredientsListItems}
            </ul>
            {props.ingredientsListItems.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.showRecipie}> Get a recipe</button>
            </div>}
        </section>
    )
}