import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />

      <Catalog />
      <About />

      <Footer />
    </div>
  );
}

// this is a test change
export default App;
