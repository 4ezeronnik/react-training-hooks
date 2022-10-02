import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationContextProvider } from 'components/NavigationContext/NavigationContext';
import { ValueContextProvider } from 'components/ValueContext/ValueContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ValueContextProvider>
    <NavigationContextProvider>
      <App />
      </NavigationContextProvider>
       </ValueContextProvider>
  </React.StrictMode>
);
