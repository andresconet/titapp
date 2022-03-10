import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import AppContextProvider from './context/AppContextProvider'
import Content from './components/Content';


const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: 'Roboto','Montserrat','Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.4rem;
  color:#3a3a3a;
  line-height:1.3;
}
a {
  text-decoration: none;
}

button {
  font-family: 'Montserrat','Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}
`;

const App = () => {

  return (
      <>
        <GlobalStyles />
        <AppContextProvider>
          <Header />
          <Content />
        </AppContextProvider>
      </>
  );
}

export default App;
