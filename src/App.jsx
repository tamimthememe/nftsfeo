import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import Auctions from './components/Auctions';
import Creators from './components/Creators';
import Explore from './components/Explore'
import gradient1 from './images/Gradient-1.png'
import gradient2 from './images/Gradient-2.png'
import Collections from "./components/Collections"
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

 //<Navbar/>
 //<Hero />
 //<Auctions />
//<Creators />
//<Explore />
//<Collections />
//<HowItWorks />

export default function App() {
  return (
    <main>
    <div className="final">
      <img src={gradient1} className="gradient-1"/>
      <img src={gradient2} className="gradient-2"/>
      <div className="full">
        <Navbar/>
        <Hero />
        <Auctions />
        <Creators />  
        <Explore />
        <Collections />
        <HowItWorks />
        <Footer />
      </div>
    </div>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 