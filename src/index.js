import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
/* Imports Extras */
import './index.css';
import ImgCard_1 from '@/_assents/img/blog/card_1/cartorios-pandemia-1140x760.jpg';
import ImgCard_2 from '@/_assents/img/blog/card_2/lavagem-1140x760.jpg';
import ImgCard_3 from '@/_assents/img/blog/card_3/enotariado-1140x760.jpg';
/* Imports Components */
import TopBar from '@/components/TopBar/TopBar';
import Menu from '@/components/Menu/Menu';
import Carousel from '@/components/Carousel/Carousel';
import Section from '@/components/Section/Section';
import About from '@/components/About/About';
import SectionTitle from '@/components/Section/Title/Title';
import Service from '@/components/Service/Service';
import BlogCard from '@/components/Blog/BlogCard';

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
  },
  blog: {
    id: "blog",
    head: {
      title: "Informativos",
      description: "Fiquei por dentro de algumas das principais notícias e mudanças nos cartórios do estado.",
    },
    card_1: {
      image: ImgCard_1,
      date: "22 Abril 2020",
      title: "CNJ ratifica provimentos sobre atuação do serviço notarial durante pandemia",
      content: <p>O Plenário do Conselho Nacional de Justiça (CNJ) referendou os quatro provimentos editados pela Corregedoria Nacional de Justiça que uniformizaram o funcionamento do serviço extrajudicial durante o período de pandemia do novo coronavírus.</p>,
      modalId: "#post01Modal"
    },
    card_2: {
      image: ImgCard_2,
      date: "01 Outubro 2019",
      title: "Cartórios serão integrados ao combate à corrupção e lavagem de dinheiro",
      content: <p>Os cartórios brasileiros passarão a fazer parte da rede de instituições que combatem a corrupção, a lavagem de dinheiro e o financiamento do terrorismo, com a edição de um conjunto de normas da Corregedoria Nacional de Justiça.</p>,
      modalId: "#post02Modal"
    },
    card_3: {
      image: ImgCard_3,
      date: "15 Junho 2019",
      title: "E-notariado promete revolucionar a prestação de serviços dos cartórios",
      content: <p> O Conselho Federal do Colégio Nota&shy;rial do Brasil (<abbr title="Conselho Federal do Colégio Notarial do Brasil">CNB-CF</abbr>) lançou o e-notariado, servi&shy;ços que antes eram ofere&shy;cidos somente no balcão dos tabe&shy;liona&shy;tos já podem ser obti&shy;dos pela plata&shy;forma online. Marco da entra&shy;da dos notá&shy;rios no ambiente virtual, o e-notariado ainda está em fase ini&shy;cial de implan&shy;tação.</p>,
      modalId: "#post01Modal"
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
    <Section 
      bgColor = {" "}
      id = {sections.blog.id}
      head = {
        <SectionTitle 
          title = {sections.blog.head.title}
          description = {sections.blog.head.description}
          color = {" "}
        />
      }
      content = {
        [
          <BlogCard 
            imageCard = {sections.blog.card_1.image}
            dateCard = {sections.blog.card_1.date}
            titleCard = {sections.blog.card_1.title}
            contentCard = {sections.blog.card_1.content}
            modalId = {sections.blog.card_1.modalId}
          />,
          <BlogCard 
            imageCard = {sections.blog.card_2.image}
            dateCard = {sections.blog.card_2.date}
            titleCard = {sections.blog.card_2.title}
            contentCard = {sections.blog.card_2.content}
            modalId = {sections.blog.card_2.modalId}
          />,
          <BlogCard 
            imageCard = {sections.blog.card_3.image}
            dateCard = {sections.blog.card_3.date}
            titleCard = {sections.blog.card_3.title}
            contentCard = {sections.blog.card_3.content}
            modalId = {sections.blog.card_3.modalId}
          />
        ]
      }
    />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log("Olá amigo!👨‍💻");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
