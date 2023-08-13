import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter
      // basename='/goit-react-hw-05'
      >
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>{' '}
    </PersistGate>
  </Provider>
);
