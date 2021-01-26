import '../../_assents/css/all.css';
import '../../_assents/css/responsive.css';

function TopBar() {
  return (
    <div>
      <div className="top-bar bg-dark " id="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-10 top-bar-content">
              <div className="text-white">
                <i className="fa fa-map-marker"></i>
                <span className="ml-1 size-1">15 de novembro, 428, Campo Grande(MS), 79002-140</span>
              </div>
            </div>
            <div className="col-lg-4 ml-lg-auto col-md-2">
              <ul className="d-flex list-unstyled header-socials float-lg-right top-bar-content">
                <li><a href="https://www.facebook.com/6oficio/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/6oficio/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                <li><a href="mailto:atendimento@6notarial.com.br"><i className="far fa-envelope"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-bar d-none d-md-block d-lg-block bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="d-none d-lg-block" id="logo"></div>
            </div>
            <div className="col-lg-8 justify-content-end ml-lg-auto d-flex col-12">
              <div className="top-info-block d-inline-flex">
                <div className="icon-block"><i className="ti-mobile"></i></div>
                <div className="info-block">
                  <h6 className="font-weight-500">(67) 3382-2590<br />(67)99919-6848</h6>
                  <p>Contate-nos</p>
                </div>
              </div>
              <div className="top-info-block d-inline-flex">
                <div className="icon-block">
                  <i className="ti-email"></i>
                </div>
                <div className="info-block">
                  <h5 className="font-weight-500">atendimento@6notarial.com.br</h5>
                  <p>Envie um e-mail</p>
                </div>
              </div>
              <div className="top-info-block d-inline-flex">
                <div className="icon-block"><i className="ti-time"></i></div>
                <div className="info-block">
                  <h5 className="font-weight-500">Seg-Sex 8:00-17:00 </h5>
                  <p>Atendimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;