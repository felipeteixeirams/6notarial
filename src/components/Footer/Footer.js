const Footer = () => {
   return (
        <footer class="section" id="footer">
            <div class="overlay footer-overlay">
            </div>
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg-4 col-sm-6">
                    <div class="footer-widget">
                        <h3 class="footer-brand text-white">6º Serviço Notarial</h3>
                        <ul class="footer-links-2">
                            <li><i class="fa fa-map-marker"></i>&nbsp;&nbsp;15 de Novembro, 428, Centro, Campo Grande/MS
                            </li>
                            <li><i class="fa fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:atendimento@6notarial.com.br">atendimento@6notarial.com.br</a></li>
                            <li><i class="fa fa-phone"></i>&nbsp;&nbsp;<a href="tel:6733822590">(67)3382-2590</a> / <a href="tel:67999196848">(67)99919-6848</a></li>
                            <li><i class="fa fa-clock">&nbsp;&nbsp;</i>Seg-Sex <time>8:00</time>-<time>17:00</time></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-sm-3">
                    <div class="footer-widget">
                        <h3 class="smallTitle">Mapa do site</h3>
                        <ul class="footer-links ">
                            <li>
                                <a class="js-scroll-trigger" href="#top-bar">
                                    Ínicio
                                </a>
                            </li>
                            <li>
                                <a class="js-scroll-trigger" href="#sobre">
                                    Quem Somos
                                </a>
                            </li>
                            <li>
                                <a class="js-scroll-trigger" href="#services">
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a class="js-scroll-trigger" href="#blog">
                                    Informativos
                                </a>
                            </li>
                            <li>
                                <a class="js-scroll-trigger" href="https://www.tjms.jus.br/legislacao/visualizar.php?lei=21119" target="_black" rel="noreferrer">
                                    Tabela de Preços
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-sm-3">
                    <div class="footer-widget">
                        <h3 class="smallTitle">Siga-nos!</h3>
                        <ul class="list-unstyled footer-links">
                            <li><a href="https://www.facebook.com/6oficio/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i>Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/6oficio/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i>Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://g.page/6oficio?share" target="_blank" rel="noreferrer"><i class="fab fa-google"></i>Google
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-12 pr-4">
                    <div class="footer-widget" id="map"></div>
                </div>

            </div>

            <div class="row text-center pt-5">

               <div class="col-lg-12">
                  <p class="footer-copy ">
                     <br />Copyright &copy; 2020 6&#186; Serviço Notarial. Todos os direitos reservados | hospedado por <span class="current-year"><a href="http://www.avianti.com.br/" target="_blank" rel="noreferrer">Avianti</a></span> | Consultoria &#38; Assessoria <span class="current-year"><a href="http://www.cidcastello.com.br/quem/" target="_blank" rel="noreferrer">Cid Castello</a></span>
                  </p>
               </div>

            </div>

        </div>
    </footer>
   )
}

export default Footer;