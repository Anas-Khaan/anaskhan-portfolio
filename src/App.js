import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
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
    <div className="App">
      <Header changetheme = {changetheme} theme = {theme}/>
      <Home changetheme = {changetheme} theme = {theme} />
      <Footer changetheme = {changetheme} theme = {theme}/>
      
    </div>
  );
}

export default App;
