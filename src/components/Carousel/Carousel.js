import React from 'react';
import banner_1 from '../../_assents/img/banner/banner_1.png';

const Carousel = () => {
    return (
        <div id="carouselMainBanner" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselMainBanner" data-slide-to="0" class="active"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={banner_1 + '?auto=yes&bg=777&fg=555&text=Primeiro Slide'} alt="Primeiro Slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselMainBanner" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#carouselMainBanner" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Próximo</span>
            </a>
        </div>
    );
}

export default Carousel;