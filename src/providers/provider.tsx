import React, { createContext, useContext } from "react"

const ThemeContext = createContext<{ theme: string }>({ theme: "light" })
export const useTheme = () => useContext(ThemeContext)

interface JigJoyUIProviderProps {
	children: React.ReactNode
	theme?: string
}

const JigJoyUIProvider: React.FC<JigJoyUIProviderProps> = ({ children, theme = "light" }) => {
	return (
		<ThemeContext.Provider value={{ theme }}>
			<div data-theme={theme}>{children}</div>
		</ThemeContext.Provider>
	)
}

export { JigJoyUIProvider }
