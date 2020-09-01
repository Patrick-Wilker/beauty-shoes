import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

import './config/ReactotronConfig' // antes de importar o store

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Header/>
        <Routes/>
        <GlobalStyle/>
        <ToastContainer autoClose={9000}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
