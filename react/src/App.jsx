import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Blog from "./Blog";
import SingleBlog from "./SingleBlog";
import NotFound from "./NotFound";
import './Routing.css'
import Products from "./Products";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<SingleBlog />}></Route>
          <Route path="/service" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/Products" element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export { App }; 





// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>



//      {{<div>
//        <h1>jai shree shyam</h1>
//        <img src="https://www.bhagwankiphoto.com/wp-content/uploads/2021/04/Khatu-Shyam-Wallpaper-Hd-1024x1024.jpg" alt="" />
//       </div>} }
  

//   )
// }



