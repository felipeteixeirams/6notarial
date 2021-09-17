import React, { useEffect, useState } from 'react';
/*** Components ***/
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/Menu/Menu';
import Carousel from '@/components/Carousel/Carousel';
import Section from '@/components/Section/Section';
import About from '@/components/About/About';
import SectionTitle from '@/components/Section/Title/Title';
import Card from '@/components/Card/Card';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';
import IconBlock from '@/components/TopBar/IconBlock/IconBlock';
import InfoBlock from '@/components/TopBar/InfoBlock/InfoBlock';
import Clock from '@/components/Icons/Clock/Clock';
import Mail from '@/components/Icons/Mail/Mail';
import Mobile from '@/components/Icons/Mobile/Mobile';

const loading = document.getElementById('load');
setTimeout(() => loading.style = 'display: none', 4500);

const App = () => {
    
    const [ services, setServices ] = useState([]);
    
    useEffect(() => {
        fetch('./services.json',{
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
        .then(res => setServices(res.data))
    },[]);

    return (
        <>
            <TopBar
                information={<div><div className="top-info-block d-inline-flex">{<IconBlock Icon={< Mobile />} />}{<InfoBlock Title={"(67) 3382-2590 (67)99919-6848"} Description={"Contate-nos"} />}</div><div className="top-info-block d-inline-flex">{<IconBlock Icon={< Mail />} />}{<InfoBlock Title={"atendimento@6notarial.com.br"} Description={"Envie um e-mail"} />}</div><div className="top-info-block d-inline-flex">{<IconBlock Icon={< Clock />} />}{<InfoBlock Title={"Seg-Sex 8:00-17:00"} Description={"Funcionamento"} />}</div></div>}
            />

            <Menu />

            <Carousel />

            <Section 
                bgColor="bg-grey" 
                id="sobre" 
                content={<About />} 
            />

            <Section
                bgColor={" "}
                id="services"
                head={
                    <SectionTitle
                        title="Serviços"
                        description="Conheça mais sobre os principais serviços oferecidos por nós."
                        color="text-white"
                    />
                }
                content={
                    [
                        <Card
                            modalId="Autenticacao"
                            icon="ti-stamp"
                            content="Autenticação de cópia"
                        />,
                        <Card
                            modalId="Reconhecimento"
                            icon="ti-id-badge"
                            content="Abertura e Reconhecimento de Firma"
                        ></Card>,
                        <Card
                            modalId="Apostila"
                            icon="ti-world"
                            content="Convenção da Apostila da Haia"
                        />,
                        <Card
                            modalId="Escritura"
                            icon="ti-home"
                            content="Escrituras"
                        />,
                        <Card
                            modalId="Procuracao"
                            icon="ti-id-badge"
                            content="Procuração, Substabelecimento e Revogação"
                        />,
                        <Card
                            modalId="Testamento"
                            icon="ti-pencil-alt"
                            content="Testamento"
                        />,
                        <Card
                            modalId="Alegacao"
                            icon="ti-car"
                            content="Alegação de Venda de Veículo (Detran/MS)"
                        />,
                        <Card
                            modalId="Certidao"
                            icon="ti-files"
                            content="Certidões"
                        />
                    ]
                }
            />

            <Footer />

            <Modal
                modalId="ConsultaSelo"
                title={"Consulta de Selo Eletrônico"}
                content={<iframe src="https://www.tjms.jus.br/sig-ex/pesquisaSelo.xhtml" frameBorder="0" height="400px" width="100%" title="consulta selo"></iframe>}
            />

            <Modal
                modalId="ConsultaAlegacao"
                content={<iframe frameBorder="0" hspace="0" vspace="0" marginHeight="0" marginWidth="0" src="https://www2.detran.ms.gov.br/detranet/pserv/veiculo/consCV/index.asp" title="consulta alegação de venda"></iframe>}
            />

            <Modal
                modalId="Autenticacao"
                title={services[0].title}
                content={services[0].content}
            />

            {console.log(services)}

            <Modal
                modalId="Reconhecimento"
                title={services[1].title}
                content={services[1].content}
            />
            <Modal
                modalId="Apostila"
                title={services[2].title}
                content={services[1].content}
            />
            <Modal
                modalId="Escritura"
                title={services[3].title}
                content={services[1].content}
            />
            <Modal
                modalId="Procuracao"
                title={services[4].title}
                content={services[1].content}
            />
            <Modal
                modalId="Testamento"
                title={services[5].title}
                content={services[1].content}
            />
            <Modal
                modalId="Alegacao"
                title={services[6].title}
                content={services[7].content}
            />
            <Modal
                modalId="Certidao"
                title={services[7].title}
                content={services[7].content}
            />
        </>
    );
}

export default App;
