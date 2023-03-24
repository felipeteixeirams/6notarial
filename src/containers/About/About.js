import predio from "@/_assents/img/banner/predio-601x900.jpg";
import '@/_assents/css/responsive.css';

import Section from "@/components/Section/Section";

export default function About () {
    return (
        <Section 
            bgColor="bg-grey" 
            id="sobre" 
            content={ 
                <><div className="row justy-content-center">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="text-center feature-block mb-6">
                            <div className="img-icon-block mb-1">
                                <i className="ti-car"></i>
                            </div>
                            <h4 className="mb-0">Estacionamento próprio</h4>
                            <p>Estacionamento gratuito para clientes.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="text-center feature-block mb-6">
                            <div className="img-icon-block mb-1">
                                <i className="ti-map-alt"></i>
                            </div>
                            <h4 className="mb-0">Fácil localização</h4>
                            <p>Localizado frente a praça Ary Coelho.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="text-center feature-block mb-6">
                            <div className="img-icon-block mb-1">
                                <i className="ti-signal"></i>
                            </div>
                            <h4 className="mb-0">Ponto de acesso a internet</h4>
                            <p>Acesso descomplicado via Check-in</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="text-center feature-block mb-6">
                            <div className="img-icon-block mb-1">
                                <i className="ti-stamp"></i>
                            </div>
                            <h4 className="mb-0">Atendimento de qualidade</h4>
                            <p className="mb-3">Buscamos sempre melhor atendê-los.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="service-img">
                            <img src={predio} alt="Fachada da sede do Cartório do 6º Ofício de Notas" className="img-fluid" />
                        </div>
                    </div>

                    <article className="col-lg-8 pl-5 pr-4 mb-1 service-content">
                        <header>
                            <h1 class="h2">6º SERVIÇO NOTARIAL E ANTIGA  4º. CIRCUNSCRIÇÃO IMOBILIÁRIA</h1>
                        </header>
                        <div className="blog-content">
                            <p>Cartório localizado na região central da capital Sul-mato-grossense, tem atribuição de
                            Tabelionato de Notas e/ou Serviço Notarial, no qual se lavram escrituras, procurações,
                            inventários, separações, divórcios, Ata Notarial, Apostilamento de Haia e muitos outros
                            serviços, bem como fazemos reconhecimento de firmas (assinaturas), autenticações e emissão
                                de certidões.</p>
                            <p>A 4ª. Circunscrição Imobiliária abrangia os municípios de Corguinho, Ribas do Rio Pardo e
                            Rochedo/MS, de forma que no período de 1971 a 1982, os imóveis situados nestes municípios
                            foram registrados nesse cartório, podendo nesse caso aqui serem emitidas Certidões de
                            Transcrições e/ou matrículas, isso, caso ainda não tenham sido transferidos para as Comarcas
                            de atual competência.</p>
                            <p>O Cartório do 6º Ofício de Notas e/ou 6º Serviço Notarial, era de titularidade do Sr. Izaias Gomes Ferro (in memoriam) e desde a data de 18 de Dezembro de 2017, responde interinamente
                            pela Serventia o Sr. Ariovaldo Pereira R. Neto, o qual trabalhou sem interrupção no
                            mesmo Serviço Notarial, como funcionário desde a data de 1º de Março de 1983, mantendo assim
                            a tradição de excelência, segurança jurídica e qualidade nos serviços prestados.</p>
                            <p className="pt-1">Faça-nos uma <a href="https://g.page/6oficio?share" target="_blank" rel="noreferrer">visita</a>!</p>
                        </div>
                    </article>
                </div>
                </>
            }
        />
    );
}