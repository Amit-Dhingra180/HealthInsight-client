import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diabetes from "./pages/Diabetes";


function App() {

  return (
    <div>
      <BrowserRouter>
      
        <Routes> 
          <Route path='/' exact Component={Home}/>
          <Route path='/diabetes' exact Component={Diabetes}/>
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
