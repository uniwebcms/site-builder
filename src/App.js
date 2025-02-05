import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import allContent from "./content.json";

let COMPONENT_LIBRARY = null;

// TEMP CODE
window.uniweb ??= {
	hasWebsiteRemote: () => true,
};

const PageRenderer = () => {
	const { pagePath = "index" } = useParams();
	// const [pageData, setPageData] = useState(null);
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	const loadPageData = async () => {
	// 		try {
	// 			// const response = await fetch("/content.json");
	// 			// const allContent = await response.json();
	// 			const allContent = pageContent;
	// 			console.log(allContent);
	// 			setPageData(allContent[pagePath] || null);
	// 		} catch (error) {
	// 			console.error("Error loading page data:", error);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};

	// 	loadPageData();
	// }, [pagePath]);

	// if (loading) return <div>Loading page...</div>;

	const pageData = allContent[pagePath];

	if (!pageData) return <div>Page not found</div>;

	// console.log("COMPONENT_LIBRARY", COMPONENT_LIBRARY);

	return (
		<div className="page">
			{pageData.map((section) => {
				const Component = COMPONENT_LIBRARY[section.component];
				return (
					<Component {...section.props} content={section.content} />
				);
			})}
		</div>
	);
};

export default function App() {
	const [moduleLoaded, setModuleLoaded] = useState(false);

	useEffect(() => {
		console.log("LOADING...");

		// Import the module "widgets" from the remote whose alias is 'WebsiteRemote'.
		import("WebsiteRemote/widgets")
			.then((module) => {
				if (module?.default) {
					console.log("LOADED", module);
					COMPONENT_LIBRARY = module;

					setModuleLoaded(true);
				} else {
					console.warn("Website module not found");
				}
			})
			.catch((error) => {
				console.error("Failed to load Uniweb website remote:", error);
			});
	}, []);

	if (!moduleLoaded) return null;

	return (
		<Routes>
			<Route path="/:pagePath*" element={<PageRenderer />} />
		</Routes>
	);
}
