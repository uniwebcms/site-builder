import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

// Dynamic component loader
const ComponentLoader = ({ componentName, props, content }) => {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import(`components/${componentName}`);
        setComponent(() => module.default);
      } catch (err) {
        console.error(`Error loading component ${componentName}:`, err);
        setError(err);
      }
    };

    loadComponent();
  }, [componentName]);

  if (error) return <div>Error loading component {componentName}</div>;
  if (!Component) return <div>Loading component...</div>;

  return <Component {...props} content={content} />;
};

const PageRenderer = () => {
  const { pagePath = "index" } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPageData = async () => {
      try {
        const response = await fetch("/content.json");
        const allContent = await response.json();
        setPageData(allContent[pagePath] || null);
      } catch (error) {
        console.error("Error loading page data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPageData();
  }, [pagePath]);

  if (loading) return <div>Loading page...</div>;
  if (!pageData) return <div>Page not found</div>;

  return (
    <div className="page">
      {pageData.map((section) => (
        <Suspense key={section.id} fallback={<div>Loading section...</div>}>
          <ComponentLoader
            componentName={section.component}
            props={section.props}
            content={section.content}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/:pagePath*" element={<PageRenderer />} />
    </Routes>
  );
}
