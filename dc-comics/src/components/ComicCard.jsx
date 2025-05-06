import React from 'react';

const ComicCard = ({ comic }) => {
    return (
        <div className='col-6 col-md-4 col-lg-2'>
            <img src={comic.thumb} alt={comic.title} className='card-img' />
            <h3>{comic.series}</h3>
        </div>
    );
};

export default ComicCard;