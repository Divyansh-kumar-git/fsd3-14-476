import Book from "./components/Book";
import Fruit from "./components/Fruit.jsx";
import Event from "./components/event.jsx";
import Pen from "./components/Pen.jsx";
import { books } from "./data/books";
import { pens } from "./data/pens";


const MyButton = () => {
  let count = 1;
  const handleSubmit = () => {
    console.log("Button Clicked:",count);
    count++;
  };
  return (
    <button className="bg-black text-white text-xl rounded-md m-4 px-4 py-2" onClick={handleSubmit}>Clicked {count} times</button>
  )
}

export default function App() {
  return (
    <>
      <MyButton/>
    </>
  );
}