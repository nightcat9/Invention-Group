import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import Logo from './components/Logo.js';
import Footer from './components/Footer.js';


function App() {

  return (
    <div className="App">
      <Logo />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
