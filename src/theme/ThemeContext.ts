import { Dispatch, SetStateAction, createContext } from "react"

// можно добавить еще темы при необходимости
export enum Theme {
	LIGHT = "light",
	DARK = "dark",
}

export interface ThemeContextProps {
	theme?: Theme
	setTheme?: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = "theme"
