import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useParams, useLocation, useNavigate } from 'react-router-dom';
import { ChildBlocks } from './components/PageRenderer.js';
import Link from './components/Link.js';
import SafeHtml from './components/SafeHtml.js';
import App from './App.js';

const modulePromise = import('WebsiteRemote/widgets')
    .then((module) => {
        // Handle double default wrapping issue when CommonJS is imported into ES6 module
        uniweb.setRemoteComponents(module?.default?.default || module?.default);
        return true;
    })
    .catch((error) => console.error('Failed to load module:', error));

const container = document.getElementById('root');
const root = createRoot(container);

uniweb.childBlockRenderer = ChildBlocks;
uniweb.routingComponents = {
    Link,
    SafeHtml,
    useNavigate,
    useParams,
    useLocation,
};

root.render(
    <BrowserRouter>
        <App modulePromise={modulePromise} />
    </BrowserRouter>
);
