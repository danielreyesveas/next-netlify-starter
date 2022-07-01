import "../styles/_globals.scss";

import PageLoader from "../components/PageLoader";
import { PageLoaderProvider } from "../contexts/page-loader.context.jsx";

function App({ Component, pageProps }) {
	return (
		<PageLoaderProvider>
			<PageLoader />
			<Component {...pageProps} />
		</PageLoaderProvider>
	);
}

export default App;
