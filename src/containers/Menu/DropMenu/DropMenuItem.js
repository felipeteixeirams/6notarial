import '@/_assents/css/responsive.css';

export default function DropMenuItem (props) {
   let target = props.target === "true" ? "_black" : "_self";
   return (
      <a className="dropdown-item " href={props.href} target={target} rel="noopener noreferrer">
         {props.content}
      </a>
   )
}