import React from 'react';
import banner_1 from '@/_assents/img/banner/banner_1-alterado.png';

const Carousel = (props) => {
    return (
        <div id="carouselMainBanner" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselMainBanner" data-slide-to="0" className="active"></li>
            </ol>
            <div className="carousel-inner" id="innerCarousel">
                <div className="carousel-item active">
                    <img className="d-block h-100" src={banner_1 + '?auto=yes&bg=777&fg=555&text=Primeiro Slide'} alt="Primeiro Slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselMainBanner" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carouselMainBanner" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Próximo</span>
            </a>
        </div>
    );
}

export default Carousel;