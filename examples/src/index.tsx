import React from "react"
import ReactDOM from "react-dom/client"
import "@jigjoy-io/ui/dist/index.css"
import "./index.css"
import App from "./App"
import { JigJoyUIProvider } from "@jigjoy-io/ui"

const root = document.createElement("div")
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root)

rootDiv.render(
	<React.StrictMode>
		<JigJoyUIProvider>
			<App />
		</JigJoyUIProvider>
	</React.StrictMode>
)
