import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
