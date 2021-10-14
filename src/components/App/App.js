//import React, { useEffect, useState } from 'react';
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
import ScrollTop from '@/components/ScrollTop/ScrollTop';


const App = () => {
    
    const loading = document.getElementById('load');
    //const [ services, setServices ] = useState([]);
    
    setTimeout(() => loading.style = 'display: none', 4500);
    /* useEffect(() => {
        fetch('./services.json',{
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
        .then(res => setServices(res.data))
    },[]); */

    return (
        <>
            <ScrollTop />

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
                            key="1"
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
                title="Autenticação de cópias"
                content={<><h5>O que é?</h5>
                <p>A <strong>cópia autenticada</strong> é a reprodução de um documento, na qual o tabelião atesta que se trata de cópia fiel ao documento original, que conserva todos os sinais característicos e necessários à sua identificação.</p>
                <h5>Como é feita?</h5>
                <p>A parte interessada apresenta o documento original no tabelionato de notas e solicita a cópia autenticada. A reprodução do documento original pode ser feita no próprio tabelionato ou fornecida pelo usuário junto com o documento original. Em ambos os casos será conferida com o documento original para verificar se a cópia conserva seus elementos identificadores, em seguida é aposto um selo de autenticidade, carimbo e assinatura do encarregado pela autenticação.</p>
                <p>É vedada a utilização de cópia de documento, autenticada ou não, para fazer nova autenticação, ou seja, a cópia autenticada só pode ser feita mediante apresentação de documentos originais. Também é vedada a extração de cópia autenticada se o documento original contiver rasuras, tiver sido adulterado por raspagem ou corretivo, bem como contiver escritos a lápis. No caso de documentos de identificação, é vedada a extração de cópia autenticada se o documento estiver replastificado.</p>
                </>}
            />

            <Modal
                modalId="Reconhecimento"
                title="Abertura de Firmas"
                content={<><h5>O que é?</h5>
                <p>Para a realização do <em>reconhecimento de firma</em> é necessário que a pessoa tenha aberto, previamente no tabelionato de notas, uma ficha de firma que é o depósito do padrão de sua assinatura (ficha de firma).</p>
                <p>A ficha de firma não tem prazo de validade, mas é necessária a sua atualização caso a assinatura seja alterada.</p>
                <h5>Como é feito?</h5>
                <p>O interessado comparece ao tabelionato munido com a documentação necessária e assina duas vezes em um formulário, preenchendo-o com seus dados. Com o padrão de assinatura arquivado no cartório, documentos por ele assinado podem ser levados para o <em>reconhecimento de firma por semelhança</em>.</p>
                <h5>Documentos necessários</h5>
                <p>Para o preenchimento da ficha de abertura de firma devem ser apresentados os seguintes documentos originais:</p>
                <ul>
                    <li>Documentos de Identificação: Cédula de Identidade ou RG; Registro Geral ou o modelo atual da Carteira Nacional de Habilitação (CNH), ou Carteira de Exercício Profissional expedidas nos termos da Lei nº 6.206/75, pelos órgãos de classe tais como OAB, CRM, CREA, entre outros, ou Carteiras de Identidade expedidas pelo Exército, Marinha, Aeronáutica e carteira de identificação funcional dos Magistrados, membros do Ministério Público e da Defensoria Pública.</li>
                    <li>Cadastro de Pessoa Física (CPF);</li>
                    <li>Certidão de Casamento (*somente para a mulher/homem que alterou o nome após o casamento, separação ou divórcio e não alterou o documento de identidade);</li>
                    <li>Registro Nacional de Estrangeiro (RNE) válido, no caso de estrangeiros com visto permanente (*Pessoas maiores de 60 anos cuja validade do RNE expirou após completarem essa idade ou deficientes físicos estão dispensados da renovação desse documento);</li>
                    <li>Passaporte válido com prazo de validade do visto em vigor ou Carteira de Identidade do MERCOSUL (Argentina, Uruguai, Paraguai, Chile e Bolívia), para estrangeiros com visto provisório.</li>
                </ul>
                <h5>Observações</h5>
                <p>Pessoas semialfabetizadas e portadoras de deficiência visual podem abrir firma, sem a necessidade de um acompanhante como testemunha.</p>
                <p>Analfabeto: não há como abrir firma de analfabeto com sua impressão digital;</p>
                <p>Em casos de menores de 18 anos e maiores de 16 anos, é possível a abertura e reconhecimento de firma;</p>
                <h4 className="pt-5">RECONHECIMENTO DE FIRMA</h4>
                <h5>O que é?</h5>
                <p>O reconhecimento de firma é o ato pelo qual o tabelião, que tem fé pública, atesta que a assinatura constante de um documento corresponde àquela da pessoa que a lançou.</p>
                <p>Ou seja, é uma declaração pela qual o tabelião confirma a autenticidade ou semelhança da assinatura de determinada pessoa em um documento. Não se refere ao teor do documento, mas tão somente à autenticidade da assinatura.</p>
                <p>As modalidades de reconhecimento de firma são: reconhecimento de firma por autenticidade e reconhecimento de firma por semelhança. Em ambos os casos deverá ser aberto um cartão de assinaturas/ficha de firma (ver Abertura de Firmas).</p>
                <p>O que determina a modalidade de reconhecimento a ser praticada é eventual exigência legal ou do destinatário do documento.</p>
                <h5><u>Reconhecimento de firma por autenticidade</u></h5>
                <p>Ato de reconhecimento de assinatura em que o usuário comprova, pessoalmente, que é signatário do documento apresentado para o  <em>reconhecimento de firma</em>.</p>
                <p>O usuário deve assinar, diante do tabelião, o documento que pretende ter a firma reconhecida como autêntica. Caso o documento já esteja assinado, será exigida nova assinatura no documento.</p>
                <p>No momento do comparecimento deverá o comparecente assinar, além do documento, um termo em livro próprio do cartório. Esse termo é a prova da aposição da assinatura perante o agente dotado de fé pública.</p>
                <h5><u>Reconhecimento de Firma por semelhança</u></h5>
                <p>O reconhecimento de assinatura é realizado por semelhança quando o tabelionato certifica que a assinatura aposta no documento confere com a assinatura depositada em seu banco de dados. Ou seja, o reconhecimento foi feito por meio da comparação da assinatura constante no documento com a assinatura depositada na ficha padrão do usuário, não sendo necessário o seu comparecimento pessoal para o ato de reconhecimento de firma.</p>
                <p>O reconhecimento de firma por semelhança pode ser com valor econômico ou sem valor econômico, de acordo com o conteúdo ou natureza do documento.</p>
                <h5>O que é necessário?</h5>
                <p>Para que o reconhecimento de firma possa ser feito, é necessário que a pessoa que assinou o documento tenha “ficha de firma” no cartório de notas, o que é feito através da abertura de firma.</p>
                <p>É importante que o portador do documento saiba o nome completo de quem assinou. Se o nome estiver incompleto ou errado, ou ainda se for um nome muito repetido, como José da Silva, é necessário o número do RG ou do CPF da pessoa, caso estes dados não constem no documento, para que a busca no sistema possa ser feita com sucesso, e sua ficha localizada.</p>
                <p>Para que o reconhecimento de firma seja feito, a assinatura do documento deve ser semelhante àquela da ficha de firma. A ficha de firma não tem prazo de validade, mas as pessoas mudam sua assinatura com o passar dos anos. Nestes casos, é preciso que a pessoa compareça novamente ao cartório, para renovar sua ficha de firma.</p>
                <p>Atenção: é vedado o reconhecimento de firma em documentos sem data, com espaços em branco ou incompletos. Por isso, antes de comparecer ao cartório, certifique-se de que todos os dados constantes no documento estão preenchidos e que o mesmo não foi pós-datado.</p>
                </>}
            />
            <Modal
                modalId="Apostila"
                title="Convenção da Apostila da Haia"
                content={<><p>A palavra Apostila (em português) é de origem francesa, sendo grafada <em>Apostille</em>”, que provém do verbo “<em>apostiller</em>“, que significa Anotação. Assim sendo, apesar do significado corrente na Língua Portuguesa que tem o significado de uma publicação, um significado adicional é que uma apostila consiste numa anotação à margem de um documento ou ao final de uma carta, por exemplo. Neste caso, a Apostila é definida como um certificado emitido nos termos da <strong>Convenção da Apostila</strong> que autentica a origem de um <strong>Documento Público</strong>.</p>
                <p>O Conselho Nacional de Justiça (CNJ) é o responsável por coordenar e regulamentar a aplicação da <a href="https://www.hcch.net/pt/instruments/conventions/full-text/?cid=41" target="_blank" title="Convenção Relativa à Supressão da Exigência da Legalização dos Actos Públicos Estrangeiros\" rel="noreferrer">Convenção da Apostila da Haia</a> no Brasil, que entra em vigor em agosto de 2016. O tratado, assinado no segundo semestre de 2015 pelo Brasil, tem o objetivo de agilizar e simplificar a legalização de documentos entre os 112 países signatários, permitindo o reconhecimento mútuo de documentos brasileiros no exterior e de documentos estrangeiros no Brasil.</p><strong>Leia <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8660.htm" title="DECRETO Nº 8.660, DE 29 DE JANEIRO DE 2016" rel="noreferrer">aqui</a> o texto integral.</strong><p><iframe width="560" height="315" src="https://www.youtube.com/embed/XJiCOn9eoNs" title="video-apostilamento" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></p><p>A Convenção aplica-se aos atos públicos lavrados e apresentados em um dos países signatários. São considerados como atos públicos:</p>
                <ul className="li-hifen">
                    <li>Documentos provenientes de uma autoridade ou de um funcionário dependente de qualquer jurisdição do país, compreendidos os provenientes do Ministério Público, de um escrivão de direito ou de um oficial de diligências;</li>
                    <li>Documentos administrativos;</li>
                    <li>Atos notariais;</li>
                    <li>Declarações oficiais tais como menções de registro, vistos para data determinada e reconhecimento de assinatura, inseridos em atos de natureza privada.</li>
                </ul>
                <p>A única <strong>formalidade</strong> que pode ser exigida para atestar a veracidade da assinatura, a qualidade e a autenticidade será o selo ou carimbo dado pela autoridade competente do país donde o documento é originário. Esta formalidade não pode ser exigida caso as leis, os regulamentos, os costumes que vigorem no país onde se celebrou o ato afaste, simplifique ou dispense o ato da legalização.</p>
                <p>Clique <a href="https://www.hcch.net/pt/states/authorities/details3/?aid=1043" target="_blank" title="Autoridade competente" rel="noreferrer">aqui</a> para saber quais são as <strong>autoridades competentes</strong> no Brasil.</p>
                <p>Para obter mais informações sobre a Apostila, clique <a href="https://www.hcch.net/pt/instruments/conventions/specialised-sections/apostille" target="_blank" title="Mais informações sobre Apostila da Haia" rel="noreferrer">aqui</a> ou acesse o <a href="https://www.hcch.net/pt/home" target="_blank" title="site da Conferência da Haia de Direito Internacional Privado" rel="noreferrer">site da Conferência da Haia de Direito Internacional Privado</a>.</p>
                </>}
            />
            <Modal
                modalId="Escritura"
                title="Escrituras"
                content={<><h4 className="pt-3">ESCRITURA DE COMPRA DE VENDA</h4>
                <h5 className="pt-3">O que é?</h5>
                <p>A Escritura de Compra e Venda é o ato lavrado no cartório de notas por meio do qual uma das partes vende determinado bem (móvel ou imóvel) para outra.</p>
                <h5>Como é feita?</h5>
                <p>A escritura de compra e venda deve ser feita no cartório de notas, mediante agendamento prévio, para que seja coletada a documentação necessária à realização do negócio jurídico, bem como para que sejam feitos eventuais esclarecimentos às partes.</p>
                <p>Na data marcada, os interessados devem comparecer ao cartório, de posse de seus documentos pessoais originais, para a assinatura da escritura.</p>
                <p>A <em>escritura pública</em> é obrigatória para a transferência de bens imóveis de valor superior a 30 salários mínimos.</p>
                <p><u>Atenção:</u> Depois de lavrada a escritura de compra e venda do imóvel, ela deve ser registrada no cartório de registro de imóveis. Você pode solicitar que o próprio tabelionato providencie esse trâmite junto ao registro imobiliário.</p>
                <h4 className="pt-5">ESCRITURA DE DOAÇÃO DE BENS</h4>
                <h5 className="pt-3">O que é?</h5>
                <p>A Escritura Pública de Doação é o ato feito e assinado por meio do qual uma das partes doa determinado bem (móvel ou imóvel) para outra.</p>
                <p>Atenção: geralmente a doação é gratuita, mas também pode ser onerosa, ou seja, pode ser estipulada uma contraprestação, como por exemplo, o compromisso de se construir uma escola no terreno doado.</p>
                <h5>Como é feita?</h5>
                <p>A escritura de doação deve ser agendada com o tabelião ou com um de seus escreventes, sendo recomendável que a parte faça o agendamento pessoalmente para entregar a documentação que possui e ser orientada sobre a necessidade de reunir outros documentos.</p>
                <p>Na data marcada, as partes comparecerão ao tabelionato de notas, munidas de seus documentos pessoais originais, para assinar a escritura. A assinatura da escritura será feita por todas as partes no mesmo momento. Aquele que vai receber o bem em doação também precisa estar presente, para aceitar o bem doado, exceto quando for doação pura para pessoa absolutamente incapaz.</p>
                <p>A escritura pública é obrigatória para a transferência de bens imóveis de valor superior a 30 salários mínimos.</p>
                <p>Atenção: depois de lavrada a escritura de doação do imóvel, ela deve ser registrada no cartório de Registro de Imóveis. Você pode solicitar que o próprio tabelionato providencie esse trâmite junto ao registro imobiliário. Somente depois do registro a propriedade fica de fato transferida à pessoa do donatário.</p>
                <h4 className="pt-5">INVENTÁRIO EXTRAJUDICIAL</h4>
                <h5 className="pt-3">O que é?</h5>
                <p>O inventário é o procedimento utilizado para apuração dos bens, direitos e dívidas do falecido. Com a partilha é instrumentalizada a transferência da propriedade dos bens aos herdeiros. A Lei 11.441/07 facilitou a vida do cidadão e desburocratizou o procedimento de inventário ao permitir a realização desse ato em cartório, por meio de escritura pública, de forma rápida, simples e segura.</p>
                <p>Atenção: mesmo que a pessoa tenha falecido antes da Lei 11.441/07, também é possível fazer o inventário por escritura pública, se preenchidos os requisitos da lei.</p>
                <h5 className="pt-3">Quais são os requisitos para a realização de um inventário em cartório?</h5>
                <p>Para que o inventário possa ser feito em cartório, é necessário observar os seguintes requisitos:</p>
                <ul>
                    <li>Todos os herdeiros devem ser maiores e capazes;</li>
                    <li>Deve haver consenso entre os herdeiros quanto à partilha dos bens;</li>
                    <li>O falecido não pode ter deixado testamento, exceto se o testamento estiver caduco ou revogado;</li>
                    <li>A escritura deve contar com a participação de um advogado.</li>
                </ul>
                <p>Se houver filhos menores ou incapazes o inventário deverá ser feito judicialmente. Havendo filhos emancipados, o inventário pode ser feito em cartório.</p>
                <p>A escritura de inventário não depende de homologação judicial.</p>
                <p>Para transferência dos bens para o nome dos herdeiros é necessário apresentar a escritura de inventário para registro no Cartório de Registro de Imóveis (bens imóveis), no Detran (veículos), no Cartório de Registro Civil de Pessoas Jurídicas ou na Junta Comercial (sociedades), nos bancos (contas bancárias) etc.</p>
                <p>Atenção: caso exista inventário judicial em andamento, os herdeiros podem, a qualquer tempo, desistir do processo e optar pela escritura de inventário extrajudicial.</p>
                <h4 className="pt-5">DIVÓRCIO E SEPARAÇÃO EXTRAJUDICIAL</h4>
                <h5 className="pt-3">O que é?</h5>
                <p>Separação é uma forma de dissolução da sociedade conjugal que extingue os deveres de coabitação e fidelidade próprios do casamento, bem como o regime de bens. Fica mantido, contudo, o vínculo matrimonial entre os separados, que os impede de contrair outro casamento.</p>
                <p>Divórcio é uma forma de dissolução do casamento por vontade das partes. Ele pode ser feito a qualquer tempo, independentemente do cumprimento de prazos. Somente após o divórcio é permitido aos cônjuges contrair novo casamento.</p>
                <p>A Lei 11.441/07 facilitou a vida do cidadão e desburocratizou os procedimentos de divórcio e de separação consensuais ao permitir a realização desses atos em cartório de forma rápida, simples e segura.</p>
                <h5 className="pt-3">Quais são os requisitos para a realização de um divórcio ou separação em cartório?</h5>
                <p>O principal requisito é o consenso entre o casal quanto à decisão de separação ou divórcio. Se houver litígio entre eles, o processo deve necessariamente ser judicial.</p>
                <p>Além disso, o casal não pode ter filhos menores ou incapazes. Se a mulher estiver grávida, também não poderá ser feito o divórcio ou separação. Todavia, se devidamente for comprovada a prévia resolução judicial de todas as questões referentes aos filhos menores (guarda, visitação e alimentos), poderá ser realizado o divórcio ou a separação em cartório.</p>
                <p>A escritura de separação ou divórcio não depende de homologação judicial e deve ser averbada no Cartório de Registro Civil para alteração do estado civil das partes.</p>
                <p>Para transferência dos bens para o nome de cada um dos cônjuges é necessário apresentar a escritura para registro no Cartório de Registro de Imóveis (bens imóveis), no Detran (veículos), no Cartório de Registro Civil de Pessoas Jurídicas ou na Junta Comercial (sociedades), nos Bancos (contas bancárias), etc.</p>
                <p>Mesmo havendo processo judicial em andamento, os interessados podem, a qualquer momento, desistir do processo e optar pela separação ou divórcio consensual em cartório, desde que preenchidos os requisitos legais.</p>
                <p>É livre a escolha do Cartório de Notas para lavratura da escritura, independente do domicílio das partes ou do local do casamento.</p>
                <p>Além disso, a lei exige a participação de um advogado como assistente jurídico das partes nas escrituras de separação e divórcio. As partes podem ter advogados distintos ou um só advogado para ambos.</p>
                <p>Os cônjuges também podem se fazer representar por procuração pública, feita em cartório de notas, a qual deverá conter poderes especiais e expressos para essa finalidade, com prazo de validade de 30 (trinta) dias.</p>
                <h4 className="pt-5">DECLARAÇÃO DE UNIÃO ESTÁVEL</h4>
                <h5 className="pt-3">O que é?</h5>
                <p>É a união entre duas pessoas, configurada na convivência pública, contínua e duradoura com o objetivo de constituição de família. O Supremo Tribunal Federal atribuiu às uniões homoafetivas (entre pessoas do mesmo sexo) os mesmos efeitos da união estável heteroafetiva (entre pessoas do sexo oposto).</p>
                <p>Aplicam-se à união estável os deveres de lealdade, respeito, assistência, e de guarda, sustento e educação dos filhos.</p>
                <p>O casal pode formalizar a existência da união mediante escritura pública declaratória de união estável. A escritura pode ser utilizada para fixar a data do início da união estável, o regime de bens entre os conviventes, eventual alteração do nome, bem como para garantir direitos junto ao INSS, convênios médicos, odontológicos, clubes etc.</p>
                <h4 className="pt-5">EMANCIPAÇÃO</h4>
                <h5 className="pt-3">O que é?</h5>
                <p>Emancipação voluntária é o ato pelo qual os pais autorizam o adolescente, com idade entre 16 e 18 anos, a praticar todos os atos da vida civil, passando a responder por esses atos como se fosse maior de idade.</p>
                <h5 className="pt-3">Como é feita?</h5>
                <p>A emancipação é feita por escritura pública, no cartório de notas. Trata-se de ato irrevogável que torna o menor plenamente capaz. É obrigatório o comparecimento do pai, da mãe e do filho a ser emancipado, o qual necessariamente deve ser maior de 16 (dezesseis) anos.</p>
                <p>Atenção: A escritura de emancipação somente gera efeitos em relação a terceiros depois de registrada no Registro Civil das Pessoas Naturais da comarca onde residir o emancipado (artigo 89 da Lei 6.015/73 – Lei dos Registros Públicos).</p>
                <h4 className="pt-5">ATA NOTARIAL</h4>
                <h5 className="pt-3">O que é?</h5>
                <p>A ata notarial é um instrumento público no qual o tabelião documenta, de forma imparcial, um fato, uma situação ou uma circunstância presenciada por ele, perpetuando-os no tempo. A ata notarial tem eficácia probatória, presumindo-se verdadeiros os fatos nela contidos. É um importante meio de prova na esfera judicial, conforme disposto no artigo 384 do Código de Processo Civil (Lei 13.105/2015).</p>
                <p>Ela pode ser utilizada, por exemplo, para comprovar a existência e o conteúdo de sites na internet, conversas de Whatsapp, realização de assembleias de pessoas jurídicas, o estado de imóveis na entrega de chaves ou atestar a presença de uma pessoa em determinado lugar ou a ocorrência de qualquer fato.</p>
                <p>O interessado poderá solicitar a lavratura da ata notarial, bem como a realização de diligências dentro da circunscrição a qual pertence o cartório, para certificação de qualquer fato.</p>
                </>}
            />
            <Modal
                modalId="Procuracao"
                title="Procuração e Substabelecimento"
                content={<><h5>O que é?</h5>
                <p>Procuração é o instrumento pelo qual uma pessoa nomeia outra de sua confiança como seu representante (procurador), para agir em seu nome em determinada situação em que não possa estar presente.</p>
                <p>Na representação para a prática de atos complexos e solenes como, por exemplo, venda e doação de bens imóveis, representação em casamento ou em escrituras de divórcio e inventário, a lei exige poderes especiais e procuração na forma pública, feita em cartório.</p>
                <p>A representação para a prática de atos que a lei não exige escritura pública pode ser feita por procuração particular, com firma reconhecida em cartório.</p>
                <p>Atenção: as procurações para fins previdenciários (<abbr title="Instituto Nacional do Seguro Social">INSS</abbr>) são feitas gratuitamente nos cartórios do estado de São Paulo.</p>
                <h5>Documentos Necessários</h5>
                <strong>Pessoa Física:</strong>
                <p>O interessado em nomear um procurador deverá apresentar seus documentos pessoais originais (<abbr title="Registro Geral">RG</abbr>, <abbr title="Cadastro de Pessoa Física">CPF</abbr> e certidão de casamento). Os dados pessoais do procurador (nome, <abbr title="Registro Geral">RG</abbr>, <abbr title="Cadastro de Pessoa Física">CPF</abbr>, estado civil, profissão e endereço) devem ser informados, sendo recomendável que sejam apresentadas as cópias dos documentos para conferência.</p>
                <strong>Pessoa Jurídica:</strong>
                <p>O interessado deverá apresentar original ou cópia autenticada do contrato social e de suas alterações, ata de nomeação da diretoria, CNPJ, além do <abbr title="Registro Geral">RG</abbr> e <abbr title="Cadastro de Pessoa Física">CPF</abbr> originais do representante que irá assinar o documento. Em procurações relativas a bens imóveis é recomendável apresentar a certidão do imóvel.</p>
                <p>Atenção: desde 14 de agosto de 2016, a legalização dos documentos foi substituída pelo Apostilamento, previsto na Convenção de Haia, inicialmente feito pelos cartórios das capitais, segundo procedimento definido pelo Conselho Nacional de Justiça (CNJ).</p>
                <h5>O que é substabelecimento de procuração? Quais os seus efeitos?</h5>
                <p>Substabelecimento é o instrumento pelo qual o procurador transfere os poderes recebidos para outra pessoa, que irá substituí-lo na prática dos atos em nome do outorgante originário.</p>
                <p>O substabelecimento pode ser total ou parcial, com ou sem reserva de poderes. O substabelecimento segue a mesma forma exigida para a prática do ato. Ou seja, se a lei determinar que o ato é solene e deve ser praticado por instrumento público, o substabelecimento da procuração pública também deverá ser feito sob a forma pública. Os efeitos estão no artigo 667 do <cite>Código Civil</cite>.</p>
                <h5>O que é procuração em causa própria?</h5>
                <p>É a procuração que tem uma cláusula especial que permite ao procurador adquirir o imóvel para si próprio. Para que ela tenha plena validade é importante estabelecer o preço de venda ou fazer constar que o valor já foi recebido anteriormente, bem como o recolhido tributário correspondente.</p>
                </>}
            />
            <Modal
                modalId="Testamento"
                title="Testamento"
                content={<><h5>O que é?</h5><p>Testamento é o ato pelo qual a pessoa declara ao tabelião sua vontade, para depois de sua morte. O testamento pode ser utilizado para disposições patrimoniais e não patrimoniais.</p><p>Quem tem herdeiros necessários (filhos, netos, pais, avós, marido ou mulher) deve reservar a eles a legítima (metade dos bens) prevista em lei, mas poderá dispor, mediante testamento, da parte disponível de seus bens (a outra metade).</p><p>Atenção: você sabia que muitos litígios podem ser evitados mediante um planejamento sucessório feito através de testamento?</p><h5>Quais são os requisitos do testamento público?</h5><p>O testamento público é um ato personalíssimo que deve ser feito pessoalmente pelo interessado perante um tabelião de notas. Qualquer pessoa, maior de 16 anos, que esteja em plena capacidade e em condições de expressar sua vontade perante o tabelião pode fazer um testamento público.</p><p>A lei exige a presença de duas testemunhas para o ato, as quais não podem ser parentes do testador nem do beneficiário.</p><p>Atenção: o testamento público, diferentemente do testamento particular, é o mais seguro porque fica arquivado no livro do tabelião, e sua existência fica registrada no Registro Central de Testamentos (RCTO), módulo integrante da <abbr title="Central Notarial de Serviços Eletrônicos Compartilhados">Censec</abbr>, que é obrigatoriamente consultado para processar inventários judiciais ou lavrar escrituras públicas de inventários.</p><p>O inventário poderá ser lavrado em cartório de notas quando houver testamento, se todos os interessados forem capazes e concordes, nas seguintes hipóteses:</p><ul><li>om expressa autorização do juízo sucessório competente, nos autos do procedimento de abertura e cumprimento de testamento;</li><li>os casos de testamento revogado, caduco ou declarado inválido por decisão judicial transitada em julgado. Se houver disposição no testamento reconhecendo filho ou qualquer outra declaração irrevogável, a lavratura de escritura é vedada e o inventário deverá ser feito judicialmente (<cite>Provimento CGJ nº 37/2016</cite>).</li></ul><h5>É possível alterar o conteúdo de um testamento?</h5><p>Um testamento pode ser modificado ou revogado pelo testador, total ou parcialmente, a qualquer momento, por meio de outro testamento.</p><p>Atenção: A cláusula de reconhecimento de filho em testamento é irrevogável.</p><h5>O que é testamento cerrado?</h5><p>O testamento cerrado ou secreto é aquele escrito e assinado pelo próprio testador e aprovado pelo tabelião, na presença de duas testemunhas.</p><p>O tabelião não tem acesso ao conteúdo do documento e apenas lavra o auto de aprovação, lacra e costura o instrumento.</p><p>Atenção: em caso de perda do testamento cerrado ou rompimento do lacre, ele não poderá ser cumprido, uma vez que não fica arquivado nos livros do tabelião nem no Registro Central de Testamentos (RCTO).</p><h5>O que é “testamento vital”?</h5><p>DAV (Diretivas Antecipadas de Vontade), também conhecida como testamento vital, é um instrumento que permite ao paciente, antecipadamente, expressar sua vontade quanto às diretrizes de um tratamento médico futuro, caso fique impossibilitado de manifestar sua vontade em virtude de acidente ou doença grave.</p><p>Por exemplo, por esse documento é possível determinar que a pessoa não deseja submeter-se a tratamento para prolongamento da vida de modo artificial, às custas de sofrimento, ou ainda, deixar claro que se recusa a receber transfusão de sangue em caso de acidente ou cirurgia. Na verdade, não se trata de testamento, mas de escritura pública de declaração porque o testamento somente produz efeito após a morte do testador.</p></>}
            />
            <Modal
                modalId="Alegacao"
                title="Alegação de Venda de Veículo (Detran/MS)"
                content={<><p className="my-3">O usuário tem a opção de não ir até uma agência do <abbr title="Departamento Estadual de Trânsito de Mato Grosso do Sul">Detran/MS</abbr> para realizar esse procedimento. Porém, quem optar por fazer o comunicado de venda em cartório paga pelo serviço o valor correspondente a emissão de uma certidão. No Detran o serviço não tem custo, mas o recibo de venda deve estar assinado e autenticado pelo vendedor e comprador.</p><p className="my-3">Com a comunicação de venda, as infrações e demais débitos passam a ser registrados no nome do verdadeiro proprietário, o comprador.</p><h5>LEGISLAÇÃO</h5><p className="my-3">A comunicação é realizada em até 30 (trinta) dias da data da venda conforme prevista no <em>Art. 134</em> do Código de Trânsito Brasileiro (<em>CTB</em>), este prazo vale tando para alegação feita no Detran/MS como para a comunicação realizada no cartório, é vedado ainda o ato quando apenas uma das assinaturas tiver sido reconhecida, vale lembrar que o prazo para cancelamento da comunicação feita no cartório é de até 24h do momento da comunicação. Caso as assinaturas forem reconhecidas em cartórios diferentes o cartório que reconhecer a última assinatura será o responsável pela comunicação. Na conclusão do ato será fornecida às partes uma certidão de comunicação, onde irá conter dados referente ao ato.</p><p className="my-3">Entre em contato conosco para obter mais informações. Segue link para consulta da norma referênte a este serviço na íntegra.</p></>}
            />
            <Modal
                modalId="Certidao"
                title="Certidões"
                content={<><h5>O que é?</h5><p>Os atos praticados pelo Tabelião de Notas, exceto o reconhecimento de firma e a autenticação de cópias, são todos feitos em livro próprio, que fica arquivado para sempre. Assim, de todos os atos feitos no livro do Tabelião de Notas, se pode, a qualquer tempo, obter cópias fiéis, com a mesma validade dos originais, que são as certidões.</p><h5>Como é feito?</h5><p>A certidão pode ser obtida por cópia reprográfica, sendo fornecida na hora, ou pode ser datilografada, sendo fornecida em um prazo máximo de 5 dias úteis.</p><h5>Documentos necessários:</h5><ul><li>Cópia do ato do qual deseja uma certidão (certidão antiga) ou</li><li>Número do Livro e da Página em que está o ato ou nome completo das partes constantes no ato.</li><li>Pedido de Certidão de Testamento</li></ul><p>Para realizar a solicitação de informação sobre existência de testamento é necessário acessar o portal www.censec.org.br, mais precisamente no link Busca de Testamento, realizar seu cadastro e encaminhar os documentos solicitados.</p></>}
            />
        </>
    );
}

export default App;
