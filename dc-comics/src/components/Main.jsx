import React from 'react';

const Main = () => {
    return (
        <main>
            <div className="bg-dark py-5">
                <div className="container">
                    <h2 className="text-light">--&gt;Content goes here&lt;--</h2>
                </div>
            </div>
            <div className="bg-primary py-3">
                <div className="container">
                    <div className="row text-light text-center py-4 justify-content-between ms-2">
                        <div className="col-12 col-md d-flex align-items-center justify-content-center mb-2">
                            <img src="../public/img/buy-comics-digital-comics.png" className="icon-main me-2" alt="" />
                            <h6 className="mb-0 ms-1">DIGITAL COMICS</h6>
                        </div>
                        <div className="col-12 col-md d-flex align-items-center justify-content-center mb-2">
                            <img src="../public/img/buy-comics-merchandise.png" className="icon-main me-2" alt="" />
                            <h6 className="mb-0 ms-1">DC MERCHANDISE</h6>
                        </div>
                        <div className="col-12 col-md d-flex align-items-center justify-content-center mb-2">
                            <img src="../public/img/buy-comics-subscriptions.png" className="icon-main me-2" alt="" />
                            <h6 className="mb-0 ms-1">SUBSCRIPTIONS</h6>
                        </div>
                        <div className="col-12 col-md d-flex align-items-center justify-content-center mb-2">
                            <img src="../public/img/buy-comics-shop-locator.png" className="icon-main-big me-2" alt="" />
                            <h6 className="mb-0 ms-1">COMIC SHOP LOCATOR</h6>
                        </div>
                        <div className="col-12 col-md d-flex align-items-center justify-content-center mb-2">
                            <img src="../public/img/buy-dc-power-visa.svg" className="icon-main me-2" alt="" />
                            <h6 className="mb-0 ms-1">DC POWER VISA</h6>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Main;
