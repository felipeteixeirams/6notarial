const Modal = (props) =>{
   return(
      <div className="modal fade" id={props.modalId} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    {props.title}
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

export default Modal;