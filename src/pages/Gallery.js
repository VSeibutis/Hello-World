import {useState as state, useEffect} from 'react';
import {useParams} from "react-router-dom";


import http from "../plugins/Fetch";
import SinglePost from "../components/SinglePost";

function Gallery({favorites}) {
    let param = useParams()
    const [recipes, setRecipes] = state([])

    useEffect(() => {
        let link = favorites ? "/getfavorites" : "/getrecipes"
        http.get(link).then(res => {
            setRecipes(res.recipes)
        })
    }, [param])


    return (
        <div className="d-flex flex-wrap">
            {recipes.map((item, index) => <SinglePost showReviews={false} key={index} recipe={item}/>)}
        </div>
    );
}

export default Gallery;