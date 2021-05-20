import {useState as state, useEffect} from 'react';
import SinglePost from "../components/SinglePost";
import Review from "../components/Review";
import {useParams} from "react-router-dom";
import http from "../plugins/Fetch";

function Recipe() {
    const {id} = useParams()
    const [recipe, setRecipe] = state(null)

    useEffect(() => {
        http.get('/singleRecipe/' + id).then(res => {
            setRecipe(res.recipe)
        })
    }, [])

    function addFavorite() {
        http.get('/favorite/' + id).then(res => {
            console.log(res)
            setRecipe(res.recipe)
        })
    }

    return (
        !!recipe ? <div className="d-flex">
            <SinglePost recipe={recipe} showReviews={true}/>
            <div className="fav" onClick={addFavorite}>
                {recipe.favorite ?
                    <i className="fas fa-star"></i>:
                    <i className="far fa-star"></i>
                }
            </div>
            <Review id={recipe._id} updateRecipe={(rec) => setRecipe(rec)}/>
        </div> : null
    );
}

export default Recipe;