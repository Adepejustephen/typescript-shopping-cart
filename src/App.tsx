import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Home } from './pages';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route  path="/store" element={<Navigate to="/" />} />
             <Route  path="/about" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
