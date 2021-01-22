import '../responsive.css';

function Menu() {
    return (
        <div className="main-navigation" id="mainmenu-area">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary main-nav navbar-togglable">
                    <a className="navbar-brand d-lg-none d-block" href="">
                        <h4>6º Serviço Notarial</h4>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <a href="#sobre" className="nav-link js-scroll-trigger">
                                    Sobre
                            </a>
                            </li>
                            <li className="nav-item ">
                                <a href="#services" className="nav-link js-scroll-trigger">
                                    Serviços
                            </a>
                            </li>
                            <li className="nav-item ">
                                <a href="#blog" className="nav-link js-scroll-trigger">
                                    Informativos
                            </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarWelcome" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Links úteis
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarWelcome">
                                    <a className="dropdown-item " href="https://buscatestamento.org.br/" target="_blank" rel="noreferrer">
                                        Busca de Testamento (<abbr title="Colégio Notarial do Brasil">CNB</abbr>)
                                </a>
                                    <a className="dropdown-item " href="" data-toggle="modal" data-target="#modalConsultaAlegacao">
                                        Consultar Comunicação de Venda (<abbr title="Departamento Estadual de Trânsito do MS">DETRAN/MS</abbr>)
                                </a>
                                    <a className="dropdown-item " href="" data-toggle="modal" data-target="#modalConsultaFirma">
                                        Consultar Firma Aberta (<abbr title="Corregedoria Geral do MS">SIGEX</abbr>)
                                </a>
                                    <a className="dropdown-item " href="" data-toggle="modal" data-target="#modalConsultaSelo">
                                        Consultar Selo de Autenticidade (<abbr title="Corregedoria Geral do MS">SIGEX</abbr>)
                                </a>
                                    <a className="dropdown-item " href="https://www.e-notariado.org.br/" target="_blank" rel="noreferrer">
                                        E-notariado (<abbr title="Colégio Notarial do Brasil">CNB</abbr>)
                                </a>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link js-scroll-trigger" href="https://www.tjms.jus.br/legislacao/visualizar.php?lei=21119" target="_blank" rel="noreferrer">
                                    Preços&nbsp;<span className="ti-download"></span>
                                </a>
                            </li>
                        </ul>

                        <ul className="ml-lg-auto list-unstyled m-0">
                            <li><a href="http://whats.link/sextooficio" target="_blank" className="btn btn-white btn-circled" rel="noreferrer"><i className=""></i>Envie uma mensagem</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Menu;