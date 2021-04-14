import './Map.css';

const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.994506769025!2d-54.6160401!3d-20.4654188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e618a1483461%3A0xd41437c5f22b86ee!2zNsKwIFNlcnZpw6dvIE5vdGFyaWFs!5e0!3m2!1spt-BR!2sbr!4v1563823748125!5m2!1spt-BR!2sbr";

const Map = (props) => {
   return (
      <iframe title="Mapa" src={url} allowFullScreen></iframe>
   )
}

export default Map;