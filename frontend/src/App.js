import { ThemeProvider } from 'styled-components';
import './App.css';
import FormComponent from './components/FormComponent';
import { MainBody } from './styled/Global.styled';
import { Theme } from './utils/Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <MainBody >
          <FormComponent/>

        </MainBody>

      </ThemeProvider>
    </div>
  );
}

export default App;
