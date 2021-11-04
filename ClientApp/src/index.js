import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Auth0Provider
domain="dev-i4khz7eb.eu.auth0.com"
clientId="elJ0xoXLQraN7PvdFQ1Kojpc9LEj8qEc"
redirectUri={window.location.origin}
    >
  <BrowserRouter basename={baseUrl}>
    <App />
        </BrowserRouter>
    </Auth0Provider>,
  rootElement);

registerServiceWorker();

