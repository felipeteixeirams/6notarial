//Imports extras
import '@/_assents/css/responsive.css';
import Facebook from '@/components/Icons/Facebook/Facebook';
import Instagram from '@/components/Icons/Instagram/Instagram';
import Mail from '@/components/Icons/Mail/Mail';
import Logo from '@/components/Logo/Logo';

/** Imports components */
import IconBlock from './IconBlock/IconBlock';
import InfoBlock from './InfoBlock/InfoBlock';
import Clock from '@/components/Icons/Clock/Clock';
import Mobile from '@/components/Icons/Mobile/Mobile';
/**/

export default function TopBar (){
  return (
    <>
      <div className="top-bar navbar-dark " id="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-10 top-bar-content">
              <div className="text-white">
                <span className="ml-1 size-1">15 de novembro, 428, Campo Grande/ MS, 79002-140</span>
              </div>
            </div>
            <div className="col-lg-4 ml-lg-auto col-md-2">
              <ul className="d-flex list-unstyled header-socials float-lg-right top-bar-content">
                <li>
                  <a href="https://www.facebook.com/6oficio/" target="_blank" rel="noopener noreferrer">< Facebook /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/6oficio/" target="_blank" rel="noopener noreferrer">< Instagram/></a>
                </li>
                <li>
                  <a href="mailto:atendimento@6notarial.com.br">< Mail /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-bar d-none d-md-block d-lg-block bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <Logo />
            </div>
            <div className="col-lg-9 justify-content-end ml-lg-auto d-flex col-12">
              <div>
                <div className="top-info-block d-inline-flex"><IconBlock Icon={< Mobile />} /><InfoBlock Title="(67) 3382-2590 (67)99919-6848" Description="Contate-nos" />
                </div>
                <div className="top-info-block d-inline-flex"><IconBlock Icon={< Mail />} />{<InfoBlock Title="atendimento@6notarial.com.br" Description="Envie um e-mail" />}
                </div>
                <div className="top-info-block d-inline-flex"><IconBlock Icon={< Clock />} /><InfoBlock Title="Seg-Sex 8:00-17:00" Description="Funcionamento" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}