import React from 'react';
import './Carousel.css';


export default function Carousel (props) {
    return (
        <div id="carouselMainBanner" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselMainBanner" data-slide-to="0" className="active"></li>
            </ol>
            <div className="carousel-inner" id="innerCarousel">
                <div className="carousel-item active">
                    <center>
                        <img height="100%" src={props.banner} alt="..." />
                    </center>
                    <div className="carousel-caption d-md-block text-left">
                        <p className='d-inline-flex h1'>{props.title}</p>
                        <p className='d-inline-flex h4'>{props.description}</p>
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