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
                content={<><h4>Encarregado de dados do 6º Serviço Notarial</h4><blockquote cite="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Segundo a LGPD em seu Art. 5º, inciso VIII, o encarregado é a “pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD)”.</blockquote><br /><h5>Encarregado</h5><p>Ariovaldo Pereira Rodrigues Neto</p><br /><h5>Informações de Contato:</h5><em><a href="mailto:privacidade@6notarial.com.br">E-mail: privacidade@6notarial.com.br</a></em><br /><br /><h5>Atribuições do encarregado</h5><p>Art. 41 da lei, § 2º As atividades do encarregado consistem em:</p><ul><li>I - aceitar reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências;</li><li>II - receber comunicações da autoridade nacional e adotar providências;</li><li>III - orientar os funcionários e os contratados da entidade a respeito das práticas a serem tomadas em relação à proteção de dados pessoais; e</li><li>IV - executar as demais atribuições determinadas pelo controlador ou estabelecidas em normas complementares.</li></ul><br/><br/><h4>Solicitações</h4><p>As solicitações poderão ser realizadas por e-mail ou presencialmente nesta serventia, sendo que solicitações por e-mail deverão acompanhar o Nome, E-mail, CPF e Telefone para contato, além de para garantir a autenticidade a solicitação deverá ser assinada digitalmente com certifiado de acordo com o padrão ICP-Brasil.</p></>}
            />
        </>
    )
}