import '@/_assents/css/all.css';
import '@/_assents/css/responsive.css';
import '@/_assents/fonts/themify/themify-icons.css';
import './Menu.css';
import NavItem from './NavItem/NavItem';
import DropMenuItem from './DropMenu/DropMenuItem/DropMenuItem';

export default function Menu () {
    return (
        <div className="main-navigation" id="mainmenu-area">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary main-nav navbar-togglable">
                    <span className="navbar-brand d-lg-none d-block">
                        <h4>6º Serviço Notarial</h4>
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ">
                            <NavItem 
                                name="Sobre"
                                href="#sobre"
                            />
                            <NavItem 
                                name="Serviços"
                                href="#services"
                            />
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#navbarCollapse" id="navbarWelcome" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Links úteis
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarWelcome">
                                    <DropMenuItem 
                                        href = "https://buscatestamento.org.br/"
                                        target="true"
                                        content= {<div>Busca de Testamento (<abbr title="Colégio Notarial do Brasil">CNB</abbr>)</div>}
                                    />
                                    <a className="dropdown-item " href="#navbarCollapse" data-toggle="modal" data-target="#modalConsultaAlegacao">
                                        Consultar Comunicação de Venda (<abbr title="Departamento Estadual de Trânsito do MS">DETRAN/MS</abbr>)
                                    </a>
                                    <a className="dropdown-item " href="#navbarCollapse" data-toggle="modal" data-target="#modalConsultaSelo">
                                        Consultar Selo de Autenticidade (<abbr title="Corregedoria Geral do MS">SIGEX</abbr>)
                                    </a>
                                    <a className="dropdown-item " href="https://www.e-notariado.org.br/" target="_blank" rel="noopener noreferrer">
                                        E-notariado (<abbr title="Colégio Notarial do Brasil">CNB</abbr>)
                                    </a>
                                </div>
                            </li>
                            <NavItem 
                                name="Preços"
                                href="https://www.tjms.jus.br/legislacao/visualizar.php?lei=21119"
                                target="true"
                            />
                            <NavItem 
                                name="Privacidade"
                                href="#"
                            />
                        </ul>

                        <ul className="ml-lg-auto list-unstyled m-0">
                            <li><a href="https://api.whatsapp.com/send?phone=5567999196848" target="_blank" className="btn btn-white btn-circled" rel="noreferrer"><i className=""></i>Envie uma mensagem</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}