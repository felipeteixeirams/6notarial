import React from 'react';
import '@/index.css';
import '@/_assents/css/responsive.css';
import Map from '../Map/Map';
import Facebook from '@/components/Icons/Facebook/Facebook';
import Instagram from '@/components/Icons/Instagram/Instagram';
import Google from '@/components/Icons/Google/Google';

var dataAtual = new Date();


const Footer = () => {
    
     return (
        <footer className="section pl-3" id="footer">
            <div className="overlay footer-overlay">
            </div>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-4 col-sm-6">
                    <div className="footer-widget">
                        <h3 className="footer-brand text-white">6º Serviço Notarial</h3>
                        <ul className="footer-links-2">
                            <li><i className="fa fa-map-marker pr-2"></i>15 de Novembro, 428, Centro, Campo Grande/MS
                            </li>
                            <li><i className="fa fa-envelope pr-2"></i><a href="mailto:atendimento@6notarial.com.br">atendimento@6notarial.com.br</a></li>
                            <li><i className="fa fa-phone pr-2"></i><a href="tel:6733822590">(67)3382-2590</a> / <a href="tel:67999196848">(67)99919-6848</a></li>
                            <li><i className="fa fa-clock pr-2"></i>Seg-Sex <time>8:00</time>-<time>17:00</time></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-3">
                    <div className="footer-widget">
                        <h3 className="smallTitle">Mapa do site</h3>
                        <ul className="footer-links ">
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
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-3">
                    <div className="footer-widget">
                        <h3 className="smallTitle">Siga-nos!</h3>
                        <ul className="list-unstyled footer-links">
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

                <div className="col-lg-4 col-sm-12 pr-4">
                    <div className="footer-widget">
                        <Map />
                    </div>
                </div>

            </div>

            <div className="row text-center pt-5">

               <div className="col-lg-12">
                  <p className="footer-copy ">
                     <br />&copy; {dataAtual.getFullYear()} 6&#186; Serviço Notarial, Todos os direitos reservados &nbsp; <i className="fas fa-circle ponto"></i> &nbsp; &nbsp; hospedado por <span className="current-year"><a href="http://www.avianti.com.br/" target="_blank" rel="noreferrer">Avianti</a></span>
                  </p>
               </div>

            </div>
        </div>
    </footer>
   )
}

export default Footer;