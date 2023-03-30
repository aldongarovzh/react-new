import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render";
import state, {addPost} from "./redux/state";

addPost('Hey-hey');


const root = ReactDOM.createRoot(document.getElementById('root'));

reportWebVitals();


rerenderEntireTree(state);
