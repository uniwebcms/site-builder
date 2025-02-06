import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import allContent from "./content.json";

let COMPONENT_LIBRARY = null;

// TEMP CODE
window.uniweb ??= {
	hasWebsiteRemote: () => true,
	activeWebsite: {
		getRoutingComponents: () => ({
			useParams,
		}),
	},
	getServices: () => ({ parseLinksInArticle: () => {} }),
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

	return (
		<div className="page">
			{pageData.map((section) => {
				// TEMP: Fallback to List component
				const Component =
					COMPONENT_LIBRARY[section.component] ||
					COMPONENT_LIBRARY["List"];

				return (
					<Component
						key={section.id}
						{...section.props}
						content={section.content}
					/>
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
					COMPONENT_LIBRARY = module.default.default;

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
