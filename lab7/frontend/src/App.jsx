const b1 ={
  picUrl: "https://m.media-amazon.com/images/I/619J8lvrHqL._AC_UY218_.jpg",
  bname:"React Design Pattern",
  price: 1199,
  quantity: 10,
  rating:5.0,
}

const b2 ={
  picUrl: "https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY218_.jpg",
  bname:"React Design Pattern",
  price: 1199,
  quantity: 10,
  rating:5.0,
}

function Book(props){
  console.log(props);
  return(
    <div>
      <img
        src={props.book.picUrl}
        alt={props.book.bname}
        price={props.book.price}
        quantity={props.book.quantity}
        rating={props.book.rating}
      />
      <h1>{b1.bname}</h1>
      <h2>{b1.price}</h2>
      <h3>{b1.quantity}</h3>
      <h4>{b1.rating}<span>{"\u2605"}</span></h4>
    </div>
);
}

export default function App() {
  return (
   <>
   <Book book={b1} />
   <h1>Hello React</h1>
   <Book book={b2} />
   <Book book={b2}/>
   <Book book={b2}/>
   </>
  );
}