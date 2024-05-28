import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Project from './components/projects/project';
import Blog from './components/Blog/blog';
import Home from './components/home/home';
import About from './components/about/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  function changetheme() {
    if (theme === 'dark') {
      setTheme('light');
      document.body.className = `${theme}-theme`;
    }
    else {
      setTheme('dark');
      document.body.className = `${theme}-theme`;
    }


  }
  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);


  return (
    <BrowserRouter>
      <Header changetheme={changetheme} theme={theme} />
      <Routes>
        <Route path='/' element={<Home changetheme={changetheme} theme={theme} />} />
        <Route path='/blog' element={<Blog theme={theme} />} />
        <Route path='/project' element={<Project theme={theme} />} />
        <Route path='/about' element={<About theme={theme} />} />
      </Routes>
      <Footer changetheme={changetheme} theme={theme} />
    </BrowserRouter>
  );
}

export default App;
