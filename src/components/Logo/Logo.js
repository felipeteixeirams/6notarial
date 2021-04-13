import './Logo.css';
import Image from './logo.svg';

const Logo = () =>{
   return (
      <div className="d-none d-lg-block" id="logo"><img src={Image} alt="Logo"/></div>
   )
}

export default Logo;