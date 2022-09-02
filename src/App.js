import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Profile from './Components/Profile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />

    <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/products' element={< Products />}></Route>
                 <Route exact path='/profile' element={< Profile />}></Route>
                 
          </Routes>
    
      
    </>
  );
}

export default App;
