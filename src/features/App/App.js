/*** Imports components ***/
import TopBar from '@/containers/TopBar/TopBar';
import Menu from '@/containers/Menu/Menu';
import Main from '@/containers/Main/Main';
import About from '@/containers/About/About';
import Services from '@/containers/Services/Services';
import Footer from '@/containers/Footer/Footer';

import Section from '@/components/Section/Section';
import Modal from '@/components/Modal/Modal';
import IconBlock from '@/containers/TopBar/IconBlock/IconBlock';
import InfoBlock from '@/containers/TopBar/InfoBlock/InfoBlock';
import Clock from '@/components/Icons/Clock/Clock';
import Mail from '@/components/Icons/Mail/Mail';
import Mobile from '@/components/Icons/Mobile/Mobile';
/**/

const App = () => {
    
    const loading = document.getElementById('load');


    setTimeout(() => loading.style = 'display: none', 4500);

    return (
        <>

            <TopBar
                information={<div><div className="top-info-block d-inline-flex">{<IconBlock Icon={< Mobile />} />}{<InfoBlock Title={"(67) 3382-2590 (67)99919-6848"} Description={"Contate-nos"} />}</div><div className="top-info-block d-inline-flex">{<IconBlock Icon={< Mail />} />}{<InfoBlock Title={"atendimento@6notarial.com.br"} Description={"Envie um e-mail"} />}</div><div className="top-info-block d-inline-flex">{<IconBlock Icon={< Clock />} />}{<InfoBlock Title={"Seg-Sex 8:00-17:00"} Description={"Funcionamento"} />}</div></div>}
            />

            <Menu />

            <Main />

            <Section 
                bgColor="bg-grey" 
                id="sobre" 
                content={<About />} 
            />

            <Services />

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

        </>
    );
}

export default App;
