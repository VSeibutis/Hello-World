import {useHistory} from "react-router-dom";

function SinglePost({recipe, showReviews}) {
    const history = useHistory()

    function changeRoute() {
        history.push('/recipe/'+recipe._id)
    }

    let reviews
    if(showReviews) {
        reviews = recipe.reviews.map((item, index) => <div key={index} className="review">
            <div>{item.email}</div>
            <div>{item.points}</div>
            <div>{item.review}</div>
        </div>)
    }

    return (
        <div className="recipeCard" onClick={changeRoute}>
            <div>
                <img src={recipe.photos[0]} alt=""/>
            </div>
            <div>
                {recipe.title}
            </div>
            <div>
                {recipe.ingredients.map((item, index) => <div key={index}>
                    {item.value}:{item.quantity}
                </div>)}
            </div>
            <div>
                {recipe.preparation.map((item, index) => <div key={index}>{index+1}. {item}</div>)}
            </div>
            <div>
                {reviews}
            </div>
        </div>
    );
}

export default SinglePost;