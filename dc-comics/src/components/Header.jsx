import React from 'react';

const Header = () => {
    return (
        <header>
            {/* intestazione */}
            <div className="container d-flex justify-content-between">
                <img src="../public/img/dc-logo.png" alt="logo" className="my-3" />
                <div className="fw-bold mt-5">
                    <a href="" className='me-3 text-dark-emphasis'>CHARACTERS</a>
                    <a href="" className='me-3 text-primary bottom-bar'>COMICS</a>
                    <a href="" className='me-3 text-dark-emphasis'>MOVIES</a>
                    <a href="" className='me-3 text-dark-emphasis'>TV</a>
                    <a href="" className='me-3 text-dark-emphasis'>GAMES</a>
                    <a href="" className='me-3 text-dark-emphasis'>COLLECTIBLES</a>
                    <a href="" className='me-3 text-dark-emphasis'>VIDEOS</a>
                    <a href="" className='me-3 text-dark-emphasis'>FANS</a>
                    <a href="" className='me-3 text-dark-emphasis'>NEWS</a>
                    <a href="" className='me-3 text-dark-emphasis'>SHOP</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
