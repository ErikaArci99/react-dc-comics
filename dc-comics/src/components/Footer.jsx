import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-background">
                <div className="container d-flex justify-content-between align-items-start py-5">
                    <div className="d-flex flex-column me-2">
                        <h5 className="text-light">DC COMICS</h5>
                        <ul className="list-unstyled text-light">
                            <li className='text-secondary'>Characters</li>
                            <li className='text-secondary'>Comics</li>
                            <li className='text-secondary'>Movies</li>
                            <li className='text-secondary'>TV</li>
                            <li className='text-secondary'>Games</li>
                            <li className='text-secondary'>Videos</li>
                            <li className='text-secondary'>News</li>
                        </ul>
                        <h5 className="text-light">SHOP</h5>
                        <li className='text-secondary'>Shop DC</li>
                        <li className='text-secondary'>Shop DC Collectibles</li>

                    </div>
                    <div className="d-flex flex-column me-2">
                        <h5 className="text-light">DC</h5>
                        <ul className="list-unstyled text-light">
                            <li className='text-secondary'>Terms Of Use</li>
                            <li className='text-secondary'>Privacy polict NEW</li>
                            <li className='text-secondary'>AD Choices</li>
                            <li className='text-secondary'>Advertising</li>
                            <li className='text-secondary'>Jobs</li>
                            <li className='text-secondary'>Subscriptions</li>
                            <li className='text-secondary'>Talent Workshops</li>
                            <li className='text-secondary'>CPSC Certificates</li>
                            <li className='text-secondary'>Ratings</li>
                            <li className='text-secondary'>Shop Help</li>
                            <li className='text-secondary'>Contact Us</li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="text-light">SITIES</h5>
                        <ul className="list-unstyled text-light">
                            <li className='text-secondary'>DC</li>
                            <li className='text-secondary'>MAD Magazine</li>
                            <li className='text-secondary'>DC Kids</li>
                            <li className='text-secondary'>DC Universe</li>
                            <li className='text-secondary'>DC Power Visa</li>
                        </ul>
                    </div>
                    <div>
                        <img className="img-footer" src="../public/img/dc-logo-bg.png" alt="DC Logo" />
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
