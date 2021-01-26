import React from 'react';
import banner_1 from '../../_assents/img/banner/banner_2.jpg';

const Carousel = () => {
    return (
        <div id="carousel-main-banners" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-main-banners" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-main-banners" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={banner_1} alt="Primeiro Slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h4 className="text-white">Precisa ir ao cartório?</h4>
                        <p>Evite aglomerações e use máscaras.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={banner_1} alt="Segundo Slide" />
                    <div className="carousel-caption d-none d-dm-block">
                        <h4 className="text-white">Atos notariais eletrônicos</h4>
                        <p>Acesse o portal do E-notarial e fique por dentro dessa novidade.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-main-banners" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carousel-main-banners" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Próximo</span>
            </a>
        </div>
    );
}

export default Carousel;