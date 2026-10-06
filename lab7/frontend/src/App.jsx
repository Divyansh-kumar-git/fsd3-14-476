import Book from "./components/Book";
import Fruit from "./components/Fruit.jsx";
import Event from "./components/event.jsx";
import Pen from "./components/Pen.jsx";
import { books } from "./data/books";
import { pens } from "./data/pens";

export default function App() {
  return (
    <>
      <h1>ONLINE SHOP</h1>

      <div className="container">
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Book book={books[0]} />
        <Book book={books[1]} />

        <Pen pen={pens[0]} />
        <Pen pen={pens[1]} />

        <Fruit />

        <Event />
      </div>
    </>
  );
}