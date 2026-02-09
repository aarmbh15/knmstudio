import './App.css';
import { Routes,Route } from "react-router-dom";



import NAVBAR from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Services from './components/Pages/Services/Services';
import OurWork from './components/Pages/OurWork/OurWork';
import Blogs from './components/Pages/Blogs/Blogs';
import BlogOne from './components/Pages/Blogs/BlogPages/BlogOne';
import BlogTwo from './components/Pages/Blogs/BlogPages/BlogTwo';
import BlogThree from './components/Pages/Blogs/BlogPages/BlogThree';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import SocialMedia from './components/SocialMedia/SocialMedia';
import FOOTER from './components/Footer/Footer';

function App() {
  return (
    <div className="App"> 
      
          <>
          <NAVBAR />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about-us" element={<AboutUs />}  />
             <Route path="/services" element={<Services />}  />
             <Route path="/our-work" element={<OurWork />}  />
             <Route path="/blogs" element={
                 <>  
                       <Blogs />
                 </>
             }  />
             <Route path="/blogs/The-Importance-of-Visual-Content" element={<BlogOne />} />
             <Route path="/blogs/Some-of-the-Most-Viral-Advertisements" element={<BlogTwo />}  />
             <Route path="/blogs/Why-is-Marketing-Important-for-Business?" element={<BlogThree />}  />
             <Route path="/contact-us" element={<ContactUs />}  /> 
           </Routes>
         <SocialMedia />
         <FOOTER />
       </> 
            
    </div>
  );
}

export default App;
