import React from 'react';
import banner_0 from '@/_assents/img/banner/banner_1.png';
//import banner_1 from '@/_assents/img/banner/banner_1.jpg';
import './Carousel.css';
import '@/_assents/css/responsive.css';


export default function Carousel () {
    return (
        <div id="carouselMainBanner" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselMainBanner" data-slide-to="0" className="active"></li>
            </ol>
            <div className="carousel-inner" id="innerCarousel">
                <div className="carousel-item active">
                    <img height="100%" src={banner_0} alt="..." />
                    <div className="carousel-caption d-md-block">
                        <p className='d-inline-flex h3 text-muted bg-white'>Onde obter um certificado digital notarializado?</p>
                        <p className='d-inline-flex h4 text-muted bg-white'>Dirija-se a um Tabelionato de Notas mais próximo e solicite a expedição do seu certificado notarial. É gratuito!</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselMainBanner" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </a>
            <a className="carousel-control-next" href="#carouselMainBanner" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </a>
        </div>
    );
}