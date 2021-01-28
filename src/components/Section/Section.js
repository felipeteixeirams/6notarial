import '../../_assents/css/responsive.css';

const Section = (props) => {
    return (
        <section className={`section ${props.bgColor}`} id={props.id}>
            <div className="container">
                {props.head}
                <div className="row">
                    {props.content}
                </div>
            </div>
        </section>
    );
}

export default Section;