import { PropsWithChildren, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
	const defaultTheme =
		(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	)

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
