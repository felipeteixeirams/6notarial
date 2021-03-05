import './Map.css';

const Map = (props) => {
   return (
      <iframe title="Mapa" src={props.url} allowfullscreen></iframe>
   )
}

export default Map;