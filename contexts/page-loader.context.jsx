import {
	createContext,
	useState,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
	useEffect,
} from "react";

const PageLoaderContext = createContext({
	showLoader: false,
	setShowLoader: () => {},
});

PageLoaderContext.displayName = "PageLoaderContext";

const PageLoaderProvider = ({ children }) => {
	const [showLoader, setShowLoader] = useState(false);
	const value = {
		showLoader,
		setShowLoader,
	};

	return (
		<PageLoaderContext.Provider value={value}>
			{children}
		</PageLoaderContext.Provider>
	);
};

function usePageLoader() {
	let context;
	try {
		context = useContext(PageLoaderContext);
	} catch (e) {
		throw new Error(
			"usePageLoader must be used within a PageLoaderProvider"
		);
	}

	return context;
}

export { PageLoaderProvider, PageLoaderContext, usePageLoader };
