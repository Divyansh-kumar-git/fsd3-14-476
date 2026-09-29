const b1 ={
  picUrl: "https://m.media-amazon.com/images/I/619J8lvrHqL._AC_UY218_.jpg",
  bname:"React Design Pattern",
  price: 1199,
  quantity: 10,
  rating:5.0,
}

function Book(){
  return(
    <div>
      <img
        src={b1.picUrl}
        alt={b1.bname}
        quantity={b1.quantity}
        rating={b1.rating}
      />
      <h1>Let Us React</h1>
      <h2>Price: 765.00</h2>
      <h3>Quantity: 5</h3>
      <h4>Rating: 4.5<span>{"\u2605"}</span></h4>
    </div>
);
}

export default function App() {
  return (
   <>
   <Book />
   <h1>Hello React</h1>
   <Book />
   <Book />
   <Book />
   </>
  );
}