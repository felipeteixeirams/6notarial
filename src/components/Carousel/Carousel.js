import React from 'react';
import banner_1 from '@/_assents/img/banner/banner_1.jpg';
import './Carousel.css';
import '@/_assents/css/responsive.css';


const Carousel = (props) => {
    return (
        <div id="carouselMainBanner" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselMainBanner" data-slide-to="0" className="active"></li>
            </ol>
            <div className="carousel-inner" id="innerCarousel">
                <div className="carousel-item active">
                    <figure>
                        <img className="d-block h-100" src={banner_1} alt="Primeiro Slide" />
                        <figcaption><h1>COMO E ONDE OBTER UM CERTIFICADO NOTARIAL?</h1> <p>Dirija-se a um Tabelionato de Notas mais próximo e solicite a expedição do seu certificado notarial. É gratuito!</p></figcaption>
                    </figure>
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