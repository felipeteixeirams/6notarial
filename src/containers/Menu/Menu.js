import './Menu.css';
import '@/_assents/css/responsive.css';
import '@/_assents/icons/themify/themify-icons.css';

/** Imports components */
import NavItem from './NavItem/NavItem';
import DropMenuItem from './DropMenu/DropMenuItem';
import Modal from '@/components/Modal/Modal';
import servicesData from '@/constants/servicesData';

export default function Menu () {
    return (
        <>
            <div className="main-navigation" id="mainmenu-area">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark main-nav navbar-togglable">
                        <span className="navbar-brand d-lg-none d-block">
                            <p className='h4 text-white'>6º Serviço Notarial</p>
                        </span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="ti-view-list"></span>
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
                                            content= {<>Busca de Testamento <i className='ti-new-window'></i></>}
                                        />
                                        <DropMenuItem 
                                            href = "https://www.tjms.jus.br/corregedoria/pesquisa-selo"
                                            target="true"
                                            content= {<>Consulta de Selo - TJMS <i className='ti-new-window'></i></>}
                                        />
                                        <DropMenuItem 
                                            href = "https://www2.detran.ms.gov.br/detranet/pserv/veiculo/consCV/index.asp"
                                            target="true"
                                            content= {<>Consulta de Alegação de Venda Detran/MS <i className='ti-new-window'></i></>}
                                        />
                                        <DropMenuItem
                                            href= "https://www.e-notariado.org.br/"
                                            target = "true"
                                            content = {<>Atos Eletrônicos <i className='ti-new-window'></i></>}
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
                title={servicesData.privacidade.title}
                content={servicesData.privacidade.content}
            />
        </>
    )
}