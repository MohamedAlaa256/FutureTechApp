import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import News from './components/news';
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
      <HashRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
