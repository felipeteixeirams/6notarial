import '@/_assents/css/all.css';
import '@/_assents/css/responsive.css';
import '@/_assents/fonts/themify/themify-icons.css';
import './Menu.css';
import NavItem from './NavItem/NavItem';
import DropMenuItem from './DropMenu/DropMenuItem';
import Modal from '@/components/Modal/Modal';

export default function Menu () {
    return (
        <>
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
                                        <DropMenuItem
                                            href= "https://www.e-notariado.org.br/"
                                            target = "true"
                                            content = {<>E-notariado (<abbr title="Colégio Notarial do Brasil">CNB</abbr>)</>}
                                        />
                                    </div>
                                </li>
                                <NavItem 
                                    name="Preços"
                                    href="https://www.tjms.jus.br/legislacao/visualizar.php?lei=21119"
                                    target="true"
                                />
                                <li className="nav-item ">
                                    <a className="nav-link js-scroll-trigger" href="#navbarCollapse" data-toggle="modal" data-target="#modalPrivacidade">Privacidade</a>
                                </li>
                            </ul>

                            <ul className="ml-lg-auto list-unstyled m-0">
                                <li><a href="https://api.whatsapp.com/send?phone=5567999196848" target="_blank" className="btn btn-white btn-circled" rel="noreferrer"><i className=""></i>Envie uma mensagem</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <Modal
                modalId="Privacidade"
                title="Lei Geral de Proteção de Dados"
                content={<><h5>Encarregado de dados do 6ºServiço Notarial</h5><blockquote cite="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Em seu Art. 5º, inciso VIII, a Lei o conceitua como “pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD)”.</blockquote><br /><strong>Encarregado</strong><h5>Ariovaldo Pereira Rodrigues Neto</h5><br /><br /><h5>Informações de Contato:</h5><em><a href="mailto:privacidade@6notarial.com.br">E-mail: privacidade@6notarial.com.br</a></em><br /><br /><h5>Atribuições</h5><ul><li>Item 01</li><li>Item 01</li><li>Item 01</li><li>Item 01</li><li>Item 01</li></ul></>}
            />
        </>
    )
}