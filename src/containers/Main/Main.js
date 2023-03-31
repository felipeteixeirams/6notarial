import React from 'react';
import '@/_assents/css/responsive.css';
import '@/_assents/css/index.css';
import Banner_1 from '@/_assents/img/banner/banner_1.png';
/** Imports components */
import Carousel from '@/components/Carousel/Carousel';


export default function Main () {
    return (
        <Carousel 
            banner={Banner_1}
            title={`Onde obter um certificado digital notarializado?`}
            description={`Dirija-se a um Tabelionato de Notas mais próximo e solicite a expedição do seu certificado notarial. É gratuito!`}
        />
    );
}