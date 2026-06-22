// React
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

// Packages
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Projects
import "./index.css"
import App from "./App.tsx"


createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
