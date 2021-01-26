import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
/* Imports Components */
import TopBar from './components/TopBar/TopBar';
import Menu from './components/Menu/Menu';
import Carousel from './components/Carousel/Carousel';
import Section from './components/Section/Section';
import About from './components/About/About';
import SectionTitle from './components/Section/SectionTitle';

var sections = {
  about: {
    id: "sobre",
    color: "br-grey"
  },
  services: {
    id: "services",
    title: "Serviços",
    description: "Conheça mais sobre os principais serviços oferecidos por nós."
  },
  blog: {
    id: "blog",
    title: "Informativos",
    description: "Fiquei por dentro de algumas das principais notícias e mudanças nos cartórios do estado."
  }
}

ReactDOM.render(
  <React.StrictMode>
    <TopBar />
    <Menu />
    <Carousel />
    <Section 
      color = {sections.about.color}
      id = {sections.about.id}
      content = {
        <About />
      }
    />
    <Section 
      id = {sections.services.id}
      head = {
        <SectionTitle 
          title = {sections.services.title}
          description = {sections.services.description}
        />
      }
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
