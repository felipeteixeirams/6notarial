import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
/* Imports Extras */
import './index.css';
/* Imports Components */
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/Menu/Menu';
import Carousel from '@/components/Carousel/Carousel';
import Section from '@/components/Section/Section';
import About from '@/components/About/About';
import SectionTitle from '@/components/Section/Title/Title';
import Card from '@/components/Card/Card';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';

ReactDOM.render(
  <React.StrictMode>
    <TopBar />

    <Menu />

    <Carousel />

    <Section
      bgColor = "bg-grey"
      id = "sobre"
      content = {
        <About />
      }
    />

    <Section 
      bgColor = {" "}
      id = "services"
      head = {
        <SectionTitle 
          title = "Serviços"
          description = "Conheça mais sobre os principais serviços oferecidos por nós."
          color = "text-white"
        />
      }
      content = {
        [
          <Card 
            modalId = "Autenticacao"
            icon = "ti-stamp"
            content = "Autenticação de cópia"
          />,
          <Card 
            modalId = "Reconhecimento"
            icon = "ti-id-badge"
            content = "Abertura e Reconhecimento de Firma"
          />,
          <Card 
            modalId = "Apostila"
            icon = "ti-world"
            content = "Convenção da Apostila da Haia"
          />,
          <Card 
            modalId = "Escritura"
            icon = "ti-home"
            content = "Escrituras"
          />,
          <Card 
            modalId = "Procuracao"
            icon = "ti-id-badge"
            content = "Procuração, Substabelecimento e Revogação"
          />,
          <Card 
            modalId = "Testamento"
            icon = "ti-pencil-alt"
            content = "Testamento"
          />,
          <Card 
            modalId = "Alegacao"
            icon = "ti-car"
            content = "Alegação de Venda de Veículo (Detran/MS)"
          />,
          <Card 
            modalId = "Certidao"
            icon = "ti-files"
            content = "Certidões"
          />
        ]
      }
    />

    <Footer />

    <Modal 
      modalId = "modalConsultaSelo"
      title = {<div><h2 className="modal-title">Consulta de Selo Eletrônico</h2><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>}
      content = {<iframe src="https://www.tjms.jus.br/sig-ex/pesquisaSelo.xhtml" frameBorder="0" height="400px" width="100%" title="consulta selo"></iframe>}
    />

    <Modal
      modalId = "modalConsultaAlegacao"
      title = {<div><h2 className="modal-title">Consulta de Comunicação de Venda Registrada (DETRAN/MS)</h2><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>}
      content = {<iframe frameBorder="0" hspace="0" vspace="0" marginHeight="0" marginWidth="0" src="https://www2.detran.ms.gov.br/detranet/pserv/veiculo/consCV/index.asp" width="100%" height="800" title="consulta alegação de venda"></iframe>}
    />
    {/*** 
    * Modais conteudo
    */
    }

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
