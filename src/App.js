
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Container} from "react-bootstrap";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import NavBar from "./components/NavBar";
import ShoppingCartProvider from './context/ShoppingCartContext';
import Footer from './components/Footer';

function App() {
  return (
    // its the wrapping for the application.
      <ShoppingCartProvider> 
        <NavBar />
        <Container className='mb-4'>
          <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/Store' element= {<Store />} />
            <Route path='/About' element= {<About />} />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>  
    
  );
}

export default App;
