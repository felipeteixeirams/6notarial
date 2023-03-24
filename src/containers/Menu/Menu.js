import '@/_assents/css/responsive.css';
import './Menu.css';
import '@/_assents/icons/themify/themify-icons.css';
import Modal from '@/components/Modal/Modal';
import NavItem from './NavItem/NavItem';
import DropMenuItem from './DropMenu/DropMenuItem';
import servicesData from '@/constants/services';

export default function Menu () {
    return (
        <>
            <div className="main-navigation" id="mainmenu-area">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-nav navbar-togglable">
                        <span className="navbar-brand d-lg-none d-block">
                            <h4>6º Serviço Notarial</h4>
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
                                        <a className="dropdown-item " href="#navbarCollapse" data-toggle="modal" data-target="#modalConsultaAlegacao">
                                            Consultar Comunicação de Venda (<abbr title="Departamento Estadual de Trânsito do MS" className="initialism">DETRAN/MS</abbr>)
                                        </a>
                                        <a className="dropdown-item " href="#navbarCollapse" data-toggle="modal" data-target="#modalConsultaSelo">
                                            Consultar Selo de Autenticidade (<abbr title="Corregedoria Geral do MS" className="initialism">SIGEX</abbr>)
                                        </a>
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

            <Modal
                modalId="ConsultaSelo"
                title="Consulta de Selo Eletrônico"
                content={<iframe src="https://www.tjms.jus.br/sig-ex/pesquisaSelo.xhtml" min-height="400px" height="400px" width="100%" title="consulta selo"></iframe>}
            />

            <Modal
                modalId="ConsultaAlegacao"
                title="Consulta Detran (MS)"
                content={<iframe src="https://www2.detran.ms.gov.br/detranet/pserv/veiculo/consCV/index.asp" height="70vh" width="100%" title="consulta alegação de venda"></iframe>}
            />
        </>
    )
}