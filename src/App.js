
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Blog from "./Blog";
import Shop from "./Shop";
import Contacts from "./Contacts";

function App() {
    
    return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/team" element={ <Team/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/shop" element={ <Shop/> } />
        <Route path="/contacts" element={ <Contacts/> } />
      </Routes>

   </>
  );
}

export default App;
