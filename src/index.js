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
import Service from '@/components/Service/Service';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';

/********************************************************
* Propriedades dos componentes globais:
*
* SectionTitle => color | title | descripion
* Sections  => id | head | content
* BlogCard => imageCard | dateCard | titleCard | contentCard | modalId
* 
******/

var sections = {
  services: {
    autenticacao: {
      id: "Autenticacao",
      icon: "ti-stamp",
      content: "Autenticação de cópia"
    },
    reconhecimento: {
      id: "Reconhecimento",
      icon: "ti-id-badge",
      content: "Abertura e Reconhecimento de Firma"
    },
    apostila: {
      id: "Apostila",
      icon: "ti-world",
      content: "Convenção da Apostila da Haia"
    },
    escritura: {
      id: "Escritura",
      icon: "ti-home",
      content: "Escrituras"
    },
    procuracao: {
      id: "Procuracao",
      icon: "ti-id-badge",
      content: "Procuração, Substabelecimento e Revogação"
    },
    testamento: {
      id: "Testamento",
      icon: "ti-pencil-alt",
      content: "Testamento"
    },
    alegacao: {
      id: "Alegacao",
      icon: "ti-car",
      content: "Alegação de Venda de Veículo (Detran/MS)"
    },
    certidao: {
      id: "Certidao",
      icon: "ti-files",
      content: "Certidões"
    }
  }
}

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
          <Service 
            modalId = {sections.services.autenticacao.id}
            icon = {sections.services.autenticacao.icon}
            content = {sections.services.autenticacao.content}
          />,
          <Service 
            modalId = {sections.services.reconhecimento.id}
            icon = {sections.services.reconhecimento.icon}
            content = {sections.services.reconhecimento.content}
          />,
          <Service 
            modalId = {sections.services.apostila.id}
            icon = {sections.services.apostila.icon}
            content = {sections.services.apostila.content}
          />,
          <Service 
            modalId = {sections.services.escritura.id}
            icon = {sections.services.escritura.icon}
            content = {sections.services.escritura.content}
          />,
          <Service 
            modalId = {sections.services.procuracao.id}
            icon = {sections.services.procuracao.icon}
            content = {sections.services.procuracao.content}
          />,
          <Service 
            modalId = {sections.services.testamento.id}
            icon = {sections.services.testamento.icon}
            content = {sections.services.testamento.content}
          />,
          <Service 
            modalId = {sections.services.alegacao.id}
            icon = {sections.services.alegacao.icon}
            content = {sections.services.alegacao.content}
          />,
          <Service 
            modalId = {sections.services.certidao.id}
            icon = {sections.services.certidao.icon}
            content = {sections.services.certidao.content}
          />
        ]
      }
    />
    <Footer />
    <Modal 
      modalId = "modalConsultaSelo"
      title = {<div><h2 className="modal-title">Consulta de Selo Eletrônico</h2><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>}
      content = {<iframe src="https://www.tjms.jus.br/sig-ex/pesquisaSelo.xhtml" frameborder="0" height="400px" width="100%" title="consulta selo"></iframe>}
    />
    <Modal
      modalId = "modalConsultaAlegacao"
      title = {<div><h2 className="modal-title">Consulta de Comunicação de Venda Registrada (DETRAN/MS)</h2><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>}
      content = {<iframe frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" src="https://www2.detran.ms.gov.br/detranet/pserv/veiculo/consCV/index.asp" width="100%" height="800" title="consulta alegação de venda"></iframe>}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log("Olá amigo!👨‍💻");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
