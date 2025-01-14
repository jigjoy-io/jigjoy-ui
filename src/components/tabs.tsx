import React, { ReactElement, useState } from "react"

interface TabsProps {
	children: ReactElement<{ key?: React.Key; display?: boolean }>;
	className?: string;
  }

const Tabs: React.FC<TabsProps> = ({children }) => {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<div className="h-full w-full max-h-full bg-surface3">
			{/* Tab Buttons */}
			<div className="flex items-end -mb-px">
				{React.Children.map(children, (child, index) => {
					const isActive = index === activeTab
					return (
						<button
							key={index}
							onClick={() => setActiveTab(index)}
							className={`
                                relative px-4 py-2 text-sm font-medium
                                rounded-t-md
                                ${
																	isActive
																		? "text-accent bg-black"
																		: "text-clickable bg-surface3 hover:bg-hover hover:text-black"
																}
                            `}
						>
							{child.key}
						</button>
					)
				})}
			</div>

			{/* Tab Content */}
			<div className="rounded-md h-full bg-black">
				{React.Children.map(children, (child, index) =>
					React.cloneElement(child, { display: activeTab === index })
				)}
			</div>
		</div>
	)
}

export { Tabs }
