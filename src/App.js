import './App.css';
import HeaderNavbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SectionOneBg from './components/Sectionone.js';
import SectionTwoBg from './components/Sectiontwo.js';
import Sectiontwobar from './components/Sectiontwobar.js';
import Footer from './components/Footer.js';
import Mintbar from './components/Sectiontwobar.js';

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
         {/*
         <VideoBg>
          <VideoPlayer/>
         </VideoBg>*/}
      </SectionOneBg>
      <Mintbar></Mintbar>
      <Sectiontwobar></Sectiontwobar>
      <SectionTwoBg>
      </SectionTwoBg>
      <Footer>
      </Footer>
    </div>
  );
}




export default App;
