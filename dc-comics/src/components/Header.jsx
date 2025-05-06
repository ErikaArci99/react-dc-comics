import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">

                    {/* Logo */}
                    <div className="col-6">
                        <img src="../public/img/dc-logo.png" alt="logo" className="my-3" />
                    </div>

                    {/* Hamburger button - visibile su sm e md */}
                    <div className="col-6 d-flex justify-content-end d-lg-none">
                        <button
                            className="btn btn-outline-secondary mt-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mobileMenu"
                            aria-controls="mobileMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            &#9776;
                        </button>
                    </div>

                    {/* Menu links - collapse per sm e md, visibili da lg in poi */}
                    <div className="fw-bold mt-5 col-12 col-lg-6 collapse d-lg-flex justify-content-lg-end text-uppercase" id="mobileMenu">
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
            </div>
        </header>
    );
};

export default Header;
