import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useParams, useLocation, useNavigate } from 'react-router-dom';
import { ChildBlocks } from './components/PageRenderer.js';
import Link from './components/Link.js';
import SafeHtml from './components/SafeHtml.js';
import App from './App.js';

const container = document.getElementById('root');
const root = createRoot(container);

uniweb.childBlockRenderer = ChildBlocks;
uniweb.routingComponents = {
    Link,
    SafeHtml,
    useNavigate,
    useParams,
    useLocation
};

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
