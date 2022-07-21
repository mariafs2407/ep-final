import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Inicio from './home/Inicio';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Productos from './components/Productos';
import Carrito from './components/Carrito';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/' element={<Inicio/>} />          
        </Routes>
        <Footer/>
      </BrowserRouter>     
      
  );
}

export default App;
