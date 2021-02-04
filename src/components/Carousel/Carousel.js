import React from 'react';
import banner1 from '../../_assents/img/banner/banner_1.jpg';
import banner2 from '../../_assents/img/banner/banner_2.jpg';

const Carousel = () => {
    return (
        <div id="carousel-main-banners" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carousel-main-banners" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carousel-main-banners" data-bs-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="Primeiro Slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h4 className="text-white">Precisa ir ao cartório?</h4>
                        <p>Evite aglomerações e use máscaras.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="Segundo Slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h4 className="text-white">Precisa ir ao cartório?</h4>
                        <p>Evite aglomerações e use máscaras.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-main-banners" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carousel-main-banners" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Próximo</span>
            </a>
        </div>
    );
}

export default Carousel;