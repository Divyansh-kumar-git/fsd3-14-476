# Frontend - Backend
1. create project folder(lab7)
2. create frontend, backend folder withh in project folder
3. open terminal and split it in two
4. open frontend in to left side terminal
5. open backend into right side terminal
6. in backend
   a. initialize backend by `npm init -y`
   b. install nodemon by `npm i nodemon`
   c. open package.json from backend, update `type to module` and script
   d. create app.js
7. in frontend
   a. npm create vite@latest
   b. enter . as project name
   c. select framework as react from arrow key
   d. select variant as javascript from arrow key
   e. select esList for linting from arrow key
   f. select install and start the frontend

.jsx => exxuded

## Components
1. Sample js functions return html directly
2. It must start with capital letter
3. It should be treated as html tag 
4. It must be closed

## Object Destructure
 const {rating,bname,price,quantity,picUrl}=props.book;
 Does not depends on order, if property is not available then it is initialized with null
 Any components include styles
 1. External CSS => create class in index.css and use in component
 2. Internal CSS => create property as object like 
  const qtyStyle = {
    fontSize:"1rem",
    color:"blue",
    textAlign:"center",
    backgroundColor:"yellow",
    padding:"10px"
  };
  then apply with style attribute and pass the object
 3. Inline CSS => in this method we use two curly brackets with style attribute all the css property must be single word for example text-align becomes textAlign(CamelCase) 

rfce = simple function
rafce = arrow function


* App.jsx should be minimum code
* By default button in html is submit button

## add tailwind to existing react project
1. open terminal and goto project frontend folder
2. install tailwind by
`npm install tailwindcss @tailwindcss/vite`
3. open vite.config.js
4. add `import tailwindcss from '@tailwindcss/vite';`
in first line
5. add 'tailwindcss()' after react()
6. the file should look like
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

7. open src/index.css and remove all the contents, then add below line
 `@import "tailwindcss";