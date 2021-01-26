import React from 'react';
import banner_1 from '../../_assents/img/banner/banner_1.jpg';
import banner_2 from '../../_assents/img/banner/banner_2.jpg';

function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner_1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={banner_2} className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Próximo</span>
            </a>
        </div>
    );
}

export default Carousel;