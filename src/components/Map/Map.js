import './Map.css';

const Map = (props) => {
   return (
      <iframe title="Mapa" src={props.url} allowFullScreen></iframe>
   )
}

export default Map;