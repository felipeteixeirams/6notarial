/* Imports extras*/
import React from 'react';
import './Footer.css';
import '@/_assents/css/responsive.css';
import '@/_assents/icons/themify/themify-icons.css';
import Facebook from '@/components/Icons/Facebook/Facebook';
import Instagram from '@/components/Icons/Instagram/Instagram';
import Google from '@/components/Icons/Google/Google';
import Time from '@/utils/time';

/** Imports components */
import Map from '@/components/Map/Map';

export default function Footer () {
     return (
        <footer className="section" id="footer">
            <div className="overlay footer-overlay">
            </div>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-4 col-11">
                    <div className="footer-widget">
                        <h1 className="h3 text-white">Fale conosco</h1>
                        <ul className="footer-links-contact-us">
                            <li><i className="ti-location-pin pr-2"></i>Rua 15 de Novembro, 428, Centro, Campo Grande/MS</li>
                            <li><i className="ti-email pr-2"></i><a href="mailto:atendimento@6notarial.com.br">atendimento@6notarial.com.br</a></li>
                            <li><i className="ti-mobile pr-2"></i><a href="tel:6733822590">(67)3382-2590</a> / <a href="tel:67999196848">(67)99919-6848</a></li>
                            <li><i className="ti-time pr-2"></i>Seg-Sex <time>8:00</time>-<time>17:00</time></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-6">
                    <div className="footer-widget">
                        <h1 className="h4 text-white">Mapa do site</h1>
                        <ul className="footer-links-site-map">
                            <li>
                                <a className="js-scroll-trigger" href="#top-bar">
                                    Ínicio
                                </a>
                            </li>
                            <li>
                                <a className="js-scroll-trigger" href="#sobre">
                                    Quem Somos
                                </a>
                            </li>
                            <li>
                                <a className="js-scroll-trigger" href="#services">
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a className="js-scroll-trigger" href="https://www.tjms.jus.br/legislacao/visualizar.php?lei=21119" target="_black" rel="noreferrer">
                                    Tabela de Preços
                                </a>
                            </li>
                            <li>
                                <a className="js-scroll-trigger" href="#navbarCollapse" data-toggle="modal" data-target="#modalPrivacidade">Privacidade</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-4">
                    <div className="footer-widget">
                        <h1 className="h4 text-white">Siga-nos!</h1>
                        <ul className="list-unstyled footer-links-site-map">
                            <li>
                                <a href="https://www.facebook.com/6oficio/" target="_blank" rel="noreferrer">< Facebook />Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/6oficio/" target="_blank" rel="noreferrer">< Instagram />Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://g.page/6oficio?share" target="_blank" rel="noreferrer">< Google/>Google
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="footer-widget">
                        <Map />
                    </div>
                </div>

            </div>

            <div className='container footer-copy'>

                    <div className="d-flex justify-content-center col pt-2">
                        <p>&copy; {Time.getFullYear()} 6&#186; Serviço Notarial - hospedado por <a href="http://www.avianti.com.br/" target="_blank" rel="noreferrer">Avianti</a></p>
                   </div>

            </div>


        </div>
    </footer>
   )
}