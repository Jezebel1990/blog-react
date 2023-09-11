import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SingleBlog, About } from './pages';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
    <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/blog/:id" element = {<SingleBlog />} />
        <Route path="/about" element= {<About />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
