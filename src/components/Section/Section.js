import '@/_assents/css/responsive.css';
import './Section.css';

export default function Section (props){
    
    return (
        <section className={`section ${props.bgColor}`} id={`${props.identifier}`}>
            <div className="container">
                {props.head}
                <div className="row">
                    {props.content}
                </div>
            </div>
        </section>
    );
}