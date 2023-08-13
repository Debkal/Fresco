
import './App.css';
import HeaderNavbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SectionOneBg from './components/Sectionone.js';
import SectionTwoBg from './components/Sectiontwo.js';
import VideoBg from './components/Videobg.js';

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
      <SectionOneBg>
        <VideoBg>
          
        </VideoBg>
      </SectionOneBg>
      <SectionTwoBg>
        
      </SectionTwoBg>
    </div>
  );
}




export default App;
