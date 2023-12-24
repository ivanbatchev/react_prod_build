import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import ThemeContextProvider from "./theme/ThemeContextProvider"

const container = document.getElementById("app")
const root = createRoot(container!)
root.render(
	<BrowserRouter>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</BrowserRouter>
)
