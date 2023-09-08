import { useEffect } from 'react';

import HeaderNavbar from './components/Navbar';
import SectionOneBg from './components/Sectionone';
import Mintbar from './components/Sectiontwobar';
import SectionTwoBg from './components/Sectiontwocontainer';
import Windowmint from './components/Mintwindow';
import Sectiontwoslide from './components/Sectiontwos';
import Foot from './components/Footer';
import { ghostCursor } from "cursor-effects";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Run the cursor effect code only on the client side
      new ghostCursor();
    }
  }, []);
  return (
    <>
      <div className="App">
    
        <SectionOneBg>
        </SectionOneBg>
          
        <Mintbar></Mintbar>
        
        <SectionTwoBg >
          <Windowmint></Windowmint>
          <Sectiontwoslide>
          </Sectiontwoslide>
        </SectionTwoBg>
        
        <Foot></Foot>
    
      </div>
    </>
  );
}
