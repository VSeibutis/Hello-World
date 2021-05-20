import {useRef as ref} from 'react';

function UploadForm({titleSet, addPhoto, setIngredients, setPreparation, upload}) {
    const photo = ref()
    const ingredient = {
        value: ref(),
        quantity: ref()
    }
    const preparation = ref()

    function refVal(val, clear) {
        if(clear) {
            return val.current.value = ""
        }
        return val.current.value
    }

    const events = {
        addPhoto: () => {
            addPhoto(refVal(photo))
            refVal(photo, true)
        },
        addIngredient: () => {
            setIngredients({
                value: refVal(ingredient.value),
                quantity: refVal(ingredient.quantity)
            })
            refVal(ingredient.value, true)
            refVal(ingredient.quantity, true)
        },
        addPreparation: () => {
            setPreparation(refVal(preparation))
            refVal(preparation, true)
        }
    }

    return (
        <div className="uploadForm">
            <input type="text" onChange={(e) => titleSet(e.target.value)} placeholder="title"/>
            <input ref={photo} type="text" placeholder="photos"/>
            <button onClick={events.addPhoto}>Add photo</button>
            <div className="ingr">
                <input ref={ingredient.value} type="text" placeholder="ingredient"/>
                <div className="empty"> </div>
                <input ref={ingredient.quantity} type="text" placeholder="quantity"/>
            </div>
            <button onClick={events.addIngredient}>Add ingredient</button>
            <input ref={preparation} type="text" placeholder="preparation"/>
            <button onClick={events.addPreparation}>Add preparation step</button>

            <div className="largeButton" onClick={upload}>UPLOAD RECIPE</div>

        </div>
    );
}

export default UploadForm;