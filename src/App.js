import React, { useState, useEffect } from 'react';
import WebsiteRenderer from './components/WebsiteRenderer.js';
import { Routes, Route } from 'react-router-dom';

export default function App({ modulePromise }) {
    const [moduleLoaded, setModuleLoaded] = useState(false);

    useEffect(() => {
        modulePromise.then(setModuleLoaded);
    }, []);

    if (!moduleLoaded) return null;

    return (
        <Routes>
            <Route path="/" element={<WebsiteRenderer />} />
        </Routes>
    );
}
