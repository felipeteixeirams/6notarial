import '../../../_assents/css/responsive.css';

const Title = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center">
                <div className="section-heading">
                    <h2 className={'section-title mb-2 ' + props.color}>
                        {props.title}
                    </h2>
                    <p className={'mb-5 ' + props.color}>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Title;