import {useState as state} from 'react';
import UploadForm from "../components/UploadForm";
import UploadPreview from "../components/UploadPreview";
import http from "../plugins/Fetch"

function Upload() {
    const [title, setTitle] = state('')
    const [photos, setPhotos] = state([])
    const [ingredients, setIngredients] = state([])
    const [preparation, setPreparation] = state([])

    function upload() {
        const recipe = {
            title,
            photos,
            ingredients,
            preparation
        }
        http.post('/addrecipe', recipe).then(res => {
            console.log(res)
        })
    }

    return <div className="d-flex">
        <UploadForm
            titleSet={setTitle}
            addPhoto={(e) => setPhotos([...photos, e])}
            setIngredients={(e) => setIngredients([...ingredients, e])}
            setPreparation={(e) => setPreparation([...preparation, e])}
            upload={upload}
        />
        <UploadPreview
            title={title}
            photos={photos}
            ingredients={ingredients}
            preparation={preparation}
        />
    </div>
}

export default Upload;