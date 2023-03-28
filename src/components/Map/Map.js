import './Map.css';
import '@/_assents/css/responsive.css';

const url = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7475.988370764312!2d-54.616024!3d-20.465432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e618a1483461%3A0xd41437c5f22b86ee!2zNsKwIFNlcnZpw6dvIE5vdGFyaWFs!5e0!3m2!1spt-BR!2sbr!4v1680026104931!5m2!1spt-BR!2sbr";

export default function Map () {
   return (
      <iframe title="Mapa" src={url} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
   )
}