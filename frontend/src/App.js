import { ThemeProvider } from 'styled-components';
import './App.css';
import FormComponent from './components/FormComponent';
import { MainBody } from './styled/Global.styled';
import { Theme } from './utils/Theme';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Layout from 'antd/es/layout/layout';

function App() {
  useEffect(() => {
    function setBodyHeight() {
      document.body.style.height = window.innerHeight + 'px';
    }

    setBodyHeight();
    window.addEventListener('resize', setBodyHeight);

    return () => {
      window.removeEventListener('resize', setBodyHeight);
    };

  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
         <MainBody >
           {/* <Navbar/> */}
          <FormComponent/>
          
        </MainBody> 
      </ThemeProvider>
          <Footer/> 
    </div>
  );
}

export default App;
