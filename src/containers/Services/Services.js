import React from 'react';
import '@/_assents/css/responsive.css';
import '@/_assents/css/index.css';
import '@/_assents/icons/themify/themify-icons.css';

import Section from '@/components/Section/Section';
import SectionTitle from '@/components/Section/Title/Title';
import Card from '@/components/Card/Card';
import Modal from '@/components/Modal/Modal';
import servicesData from '@/constants/services';

export default function Services () {
     return (
      <>
        <Section
                bgColor={" "}
                id="services"
                head={
                    <SectionTitle
                        title="Principais Serviços"
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


        <Modal
            modalId="Autenticacao"
            title={servicesData.autenticacao.title}
            content={servicesData.autenticacao.content}
        />

        <Modal
            modalId="Reconhecimento"
            title={servicesData.firma.title}
            content={servicesData.firma.content}
        />
        <Modal
            modalId="Apostila"
            title={servicesData.apostila.title}
            content={servicesData.apostila.content}
        />
        <Modal
            modalId="Escritura"
            title={servicesData.escritura.title}
            content={servicesData.escritura.content}
        />
        <Modal
            modalId="Procuracao"
            title={servicesData.procuracao.title}
            content={servicesData.procuracao.content}
        />
        <Modal
            modalId="Testamento"
            title={servicesData.testamento.title}
            content={servicesData.testamento.content}
        />
        <Modal
            modalId="Alegacao"
            title={servicesData.alegacao.title}
            content={servicesData.alegacao.content}
        />
        <Modal
            modalId="Certidao"
            title={servicesData.certidao.title}
            content={servicesData.certidao.content}
        />
      </>
     )
}