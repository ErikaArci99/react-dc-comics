import React from 'react';

const links = [
    {
        id: 1,
        href: "#",
        label: "Characters",
        current: false,
    },
    {
        id: 2,
        href: "#",
        label: "Comics",
        current: true,
    },
    {
        id: 3,
        href: "#",
        label: "Movies",
        current: false,
    },
    {
        id: 4,
        href: "#",
        label: "TV",
        current: false,
    },
    {
        id: 5,
        href: "#",
        label: "Games",
        current: false,
    },
    {
        id: 6,
        href: "#",
        label: "Collectibles",
        current: false,
    },
    {
        id: 7,
        href: "#",
        label: "Videos",
        current: false,
    },
    {
        id: 8,
        href: "#",
        label: "Fans",
        current: false,
    },
    {
        id: 9,
        href: "#",
        label: "News",
        current: false,
    },
    {
        id: 10,
        href: "#",
        label: "Shop",
        current: false,
    }
]

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
                        {links.map((link) => (
                            <a key={`link-${link.id}`} href={link.href} className='me-3 text-dark-emphasis bottom-bar'>{link.label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
