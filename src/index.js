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

/********************************************************
* Propriedades dos componentes globais:
*
* SectionTitle => color | title | descripion
* Sections  => id | head | content
* BlogCard => imageCard | dateCard | titleCard | contentCard | modalId
* 
******/

var sections = {
  bgGrey: "bg-grey",
  textWhite: "text-white",
  about: {
    id: "sobre"
  },
  services: {
    id: "services",
    head: {
      title: "Serviços",
      description: "Conheça mais sobre os principais serviços oferecidos por nós.",
    },
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
      bgColor = {sections.bgGrey}
      id = {sections.about.id}
      content = {
        <About />
      }
    />
    <Section 
      bgColor = {" "}
      id = {sections.services.id}
      head = {
        <SectionTitle 
          title = {sections.services.head.title}
          description = {sections.services.head.description}
          color = {sections.textWhite}
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
  </React.StrictMode>,
  document.getElementById('root')
);

console.log("Olá amigo!👨‍💻");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
