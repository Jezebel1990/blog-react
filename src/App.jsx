import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SingleBlog } from './pages';
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
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
