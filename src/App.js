import React, { useState, useEffect } from 'react';
import WebsiteRenderer from './components/WebsiteRenderer.js';
import { Routes, Route } from 'react-router-dom';

export default function App() {
    const [moduleLoaded, setModuleLoaded] = useState(false);

    // Load remote components to uniweb
    useEffect(() => {
        const loadAllComponents = () => {
            try {
                import('WebsiteRemote/widgets').then((module) => {
                    // Handle double default wrapping issue because CommonJS been import into ES6 module
                    const components = module?.default?.default || module?.default;

                    if (components) {
                        uniweb.setRemoteComponents(components);

                        setModuleLoaded(true);
                    }
                });
            } catch (error) {
                console.error('Failed to load remote module:', error);
                setIsLoading(false);
            }
        };

        loadAllComponents();
    }, []);

    if (!moduleLoaded) return <div>Loading...</div>;

    return (
        <Routes>
            <Route path='/' element={<WebsiteRenderer />} />
        </Routes>
    );
}
