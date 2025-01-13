import React from "react"
import { useState } from "react"

interface TabProps {
	children: React.ReactNode,
	display: boolean,
	className?: string
}

const Tab: React.FC<TabProps> = ({children, display}) => {
	const [displayTab, setDisplayTab] = useState(false)

	React.useEffect(() => {
		setDisplayTab(display)
	}, [display])

	return <>{displayTab && children}</>
}

export { Tab }