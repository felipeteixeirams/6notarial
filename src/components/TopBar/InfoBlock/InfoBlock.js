const InfoBlock = (props) => {
   return (
      <div className="info-block">
         <h5 className="font-weight-500">{props.Title}</h5>
         <p>{props.Description}</p>
      </div>
   )
}

export default InfoBlock;