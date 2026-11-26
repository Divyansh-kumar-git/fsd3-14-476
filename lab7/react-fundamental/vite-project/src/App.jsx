//function must return single element.
// <> </> : fragments can be used to group multiple elements.
//Component-Any js function that returns html directly.
//Component can be called as html tag.
//The tag must be closed.
//Component first character must be capital letter.

import BookList from "./components/BookList";


export default function App(){
  
  return( 
  <>
  <h1>Hello React</h1>
  
  <BookList />
  
  </> 
  );
}