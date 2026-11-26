const Pen = (props) =>{
const{ picUrl, company, price, rating , quantity } =  props.pen;
  return (
    <div className="book">
      <img src={picUrl} alt={company} />
      <h3>{company}</h3>
      <h4>Rs. {price}</h4>
      <p>Quantity: {quantity}</p>
      <p>Rating: {rating}<span>{"\u2605"}</span></p>
    </div>
  );
};

export default Pen
