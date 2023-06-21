import './App.css';
import Navbar from './navbar/nav.js';
import Content from './middle/content.js';
import SEO from './SEO/seo.js';
import SMM from './SMM/smm.js';
import PPC from './PPC/ppc.js';
import CONTACT from './contact/contact.js';
import WEBSITE from './website/website.js';
import FOOTER from './footer/footer.js';
import {BrowserRouter  as Router,  Routes,  Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
             <Route path="/" element={<Content/>}/>
             <Route path="/SEO" element={<SEO/>}/>
             <Route path="/SMM" element={<SMM/>}/>
             <Route path="/PPC" element={<PPC/>}/>
             <Route path="/WEBSITE" element={<WEBSITE/>}/>
             <Route path="/CONTACT" element={<CONTACT/>}/> 
          </Routes> 
          <FOOTER/>
      </Router>
      
     
     

    </div>
  );
}

export default App;
