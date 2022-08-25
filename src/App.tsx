import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Home, Store } from './pages';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
