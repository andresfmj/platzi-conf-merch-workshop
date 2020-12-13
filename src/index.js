/*
 * punto de entrada para la app de React
 */
import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

render(
    <App />, 
    document.getElementById('app')
);
