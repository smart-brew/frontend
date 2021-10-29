
import RecipeListItemType from "../types/RecipeListItemType"

function RecipeList(recipe:RecipeListItemType) {
    return (
        <div className='chamber w-1/4 content-center  border-2 border-gray-300 rounded-3xl '>
            <button>{recipe.name}</button>
        </div>
    )
}

export default RecipeList
