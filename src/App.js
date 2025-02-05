import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import pageContent from "./content.json";

// Dynamic component loader
const ComponentLoader = ({ componentName, props, content }) => {
	const [Component, setComponent] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadComponent = () => {
			try {
				console.log("Before import");

				import("WebsiteRemote/widgets").then((module) => {
					console.log(module);
				});

				// const module = await import(`WebsiteRemote/widgets`);
				// console.log("Module", module.default);
				// setComponent(() => module.default[componentName]);
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

	// console.log(pageContent);

	useEffect(() => {
		const loadPageData = async () => {
			try {
				// const response = await fetch("/content.json");
				// const allContent = await response.json();
				const allContent = pageContent;
				console.log(allContent);
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
				<Suspense
					key={section.id}
					fallback={<div>Loading section...</div>}
				>
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
