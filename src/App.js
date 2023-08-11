
import './App.css';
import HeaderNavbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderNavbar>
          <Routes>
            <Route path='/' exact/>
          </Routes>
        </HeaderNavbar>
      </Router>
    </div>
  );
}




export default App;
