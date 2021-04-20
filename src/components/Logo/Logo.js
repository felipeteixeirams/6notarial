import './Logo.css';
import Image from './logo.svg';

export default function Logo () {
   return (
      <div className="d-none d-lg-block" id="logo"><img src={Image} alt="Logo"/></div>
   )
}