import React, {useRef as ref} from 'react';
import http from "../plugins/Fetch";

function Review({id, updateRecipe}) {
    const email = ref()
    const range = ref()
    const review = ref()

    function makeReview() {
        const reviewData = {
            id,
            email: email.current.value,
            points: range.current.value,
            review: review.current.value
        }

        http.post('/makeReview', reviewData).then(res => {
            if(!res.success) {
                return console.log(res.message)
            }
            updateRecipe(res.recipe)
        })
    }

    return (
        <div className="uploadForm">
            <input ref={email} type="text" placeholder="email"/>
            <input ref={range} type="range" min="1" max="5"/>
            <textarea ref={review} placeholder="Review text"/>
            <div className="largeButton" onClick={makeReview}>REVIEW</div>
        </div>
    );
}

export default Review;