export default function NavItem (props) {
   let target = props.target === "true" ? "_black" : "_self";
   return (
      <li className="nav-item ">
         <a href={props.href} className="nav-link js-scroll-trigger" target={target}>
            {props.name}
         </a>
      </li>
   )
}