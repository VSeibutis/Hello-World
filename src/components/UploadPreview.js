import React from 'react';

function UploadPreview({title, photos, ingredients, preparation}) {
    return (
        <div>
            <h3>{title}</h3>
            <div className="previewPhotos">
                {photos.map((item, index) => <img key={index} src={item} alt=""/> )}
            </div>
            <div>
                {ingredients.map((item, index) => <div key={index}>
                    {item.value}: {item.quantity}
                </div>)}
            </div>
            <div>
                {preparation.map((item, index) => <div key={index}>{item}</div>)}
            </div>
        </div>
    );
}

export default UploadPreview;