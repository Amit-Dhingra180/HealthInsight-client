import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diabetes from "./pages/Diabetes";
import Heart from "./pages/Heart";


function App() {

  return (
    <div>
      <BrowserRouter>
      
        <Routes> 
          <Route path='/' exact Component={Home}/>
          <Route path='/diabetes' exact Component={Diabetes}/>
          <Route path='/heart' exact Component={Heart}/>
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
