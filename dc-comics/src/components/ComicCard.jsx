import React from 'react';

const ComicCard = (props) => {
    return (
        <div className='col-6 col-md-4 col-lg-2 mb-4'>
            <div className="card-img">
                <img src={props.comic.thumb} alt={props.comic.title} className='img' />
            </div>
            <h6 className='text-light'>{props.comic.series}</h6>
        </div>
    );
};

export default ComicCard;