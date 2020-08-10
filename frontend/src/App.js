import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles, { theme } from './components/styles/GlobalStyle';
import Home from './routes/Home';
import Room from './routes/Room';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/room/:roomID" component={Room}></Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
