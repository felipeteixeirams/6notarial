import '../../_assents/css/responsive.css';

const BlogCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog-box">
                <div>
                    <img src={props.imageCard} className="img-fluid" alt=""/>
                </div>
                <div className="single-blog">
                    <article className="blog-content">
                            <h6>{props.dateCard}</h6>
                            <a href>
                                <h3 className="card-title">
                                    {props.titleCard}
                                </h3>
                            </a>
                            {props.contentCard}
                            <a href data-toggle="modal" data-target={props.modalId} className="read-more">Saiba mais</a>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;