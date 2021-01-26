const Section = (props) => {
    return (
        <section className={'section ' + props.color} id={props.id}>
            <div className="container">
                {props.head}
                {props.content}
            </div>
        </section>
    );
}

export default Section;