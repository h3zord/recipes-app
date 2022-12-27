import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import MyRecipesProvider from './context/recipesContext/MyRecipesProvider';

ReactDOM.render(
  <HashRouter>
    <Provider store={ store }>
      <MyRecipesProvider>
        <App />
      </MyRecipesProvider>
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
