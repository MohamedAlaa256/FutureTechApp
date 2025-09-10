import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import News from './components/news'; // Corrected import for News component
import Contact from './components/Contact';
import About from './components/About';
import Notfound from './components/Notfound';
import Blog from './components/Blog';


class App extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/news" element={<News />} /> {/* Updated to News */}
            <Route path="/contact" element={<Contact />} /> {/* Updated path to match route */}
            <Route path="/about" element={<About />} /> {/* Updated path to match route */}
            <Route path="*" element={<Notfound />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
