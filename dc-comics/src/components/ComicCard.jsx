import React from 'react';

const ComicCard = ({ comic }) => {
    return (
        <div className='col-6 col-md-4 col-lg-2 mb-4'>
            <div className="card-img">
                <img src={comic.thumb} alt={comic.title} className='img' />
            </div>
            <h6 className='text-light'>{comic.series}</h6>
        </div>
    );
};

export default ComicCard;