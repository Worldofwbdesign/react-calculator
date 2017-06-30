import React from 'react';
import ReactDOM from 'react-dom';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const muiTheme = getMuiTheme({
  RaisedButton: {
    style: {
      minWidth: 60,
      margin: 2
    },
    labelStyle: {
      width: 60,
      height: 60,
      lineHeight: '60px',
      padding: 0,
      fontSize: 20
    },
    buttonStyle: {
      width: 60,
      height: 60
    }
  }
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
