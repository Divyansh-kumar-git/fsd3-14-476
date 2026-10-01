import Book from "./components/Book";
import Pen from "./components/Pen.jsx";
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

const p1 ={
  picUrl: "https://imgs.search.brave.com/9S3q6UyU6wu8awNlwbelx0J4e-PkwmCHqI8qZmulbOY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rdW5k/YW50cmFkZXJzLmNv/LmluL2Nkbi9zaG9w/L3Byb2R1Y3RzL3Bh/cmtlci1mcm9udGll/ci1zdGFpbmxlc3Mt/c3RlZWwtcmVmaWxs/YWJsZS1iYWxsLXBl/bi13aXRoLWdvbGQt/dHJpbS01MDB4NTAw/XzFfMzkweC53ZWJw/P3Y9MTY4MTcyNjgx/OQ",
  company: "Parker",
  price: 1199,
  quantity: 10,
  rating: 5.0,
}

const p2 ={
  picUrl: "https://imgs.search.brave.com/UUNcWzkkYHzG_tCyhO3Zj263JO_530ZMGWZdpqS1ScU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy5rYXJ0bWF4/LmluL291dHNpZGUv/bGl2ZS80NTB4NDUw/L3F1YWxpdHk9OS9z/aXRlcy9TdEFGeG1x/aDVMZlB6M1pRU2RD/aC9wcm9kdWN0LWlt/YWdlcy82XzI0Lmpw/Zw",
  company: "William",
  price: 199,
  quantity: 18,
  rating: 4.5,
}
export default function App() {
  return (
   <>
   <div className="container">
   <Book book={b1} />
   <Book book={b2} />
   <Book book={b1}/>
   <Book book={b2}/>
   <Pen pen={p1}/>
   <Pen pen={p2}/>
   </div>
   </>
  );
}