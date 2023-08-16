import './App.css';
import HeaderNavbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SectionOneBg from './components/Sectionone.js';
import SectionTwoBg from './components/Sectiontwocontainer'
import Sectiontwoslide from './components/Sectiontwos';
import Foot from './components/Footer.js';
import Mintbar from './components/Sectiontwobar.js';
import Windowmint from './components/Mintwindow.js';



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
      <SectionTwoBg>
        <Windowmint></Windowmint>
        <Sectiontwoslide>
        </Sectiontwoslide>
      </SectionTwoBg>
      
      <Foot></Foot>
      
    </div>
  );
}




export default App;
