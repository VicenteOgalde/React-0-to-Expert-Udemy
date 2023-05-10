import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import {App} from './HelloWorldApp'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App></App>
        <FirstApp title='nice App' subTitle='very nice App'></FirstApp>
        <CounterApp counter = { 15 }></CounterApp>
    </React.StrictMode>
)