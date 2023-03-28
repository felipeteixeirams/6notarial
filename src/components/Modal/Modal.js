import './Modal.css';

export default function Modal (props) {
   return(
        <div className="modal fade mr-3" id={`modal${props.modalId}`} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content mnh-80">
                    <div className="modal-header">
                        <h2 className="modal-title">{props.title}</h2><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body blog-content">
                        {props.content}
                    </div>
                    <div className="modal-footer"><button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button></div>
                </div>
            </div>
        </div>
   )
}