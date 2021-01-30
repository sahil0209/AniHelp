import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import serviceAccount from '../fireserver.json'
// import {Firestore} from '@google-cloud/firestore';
// import admin from 'firebase-admin';


ReactDOM.render (
    <BrowserRouter>
            <App />
    </BrowserRouter>
            ,document.getElementById('root'));
registerServiceWorker();

export const db=admin.firestore();