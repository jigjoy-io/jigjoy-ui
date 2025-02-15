import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./card"

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	args: {
		children: "This is a card",
	},
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {}

export const CustomClass: Story = {
	args: {
		className: "bg-red-500 text-white",
		children: "Styled Card",
	},
}

export const WithMultipleChildren: Story = {
	args: {
		children: (
			<>
				<p>First child</p>
				<p>Second child</p>
			</>
		),
	},
}

export const Small: Story = {
	args: {
		size: "small",
		children: "Small Card",
	},
}

export const Medium: Story = {
	args: {
		size: "medium",
		children: "Medium Card",
	},
}

export const Large: Story = {
	args: {
		size: "large",
		children: "Large Card",
	},
}

export const CardWithComplexContent: Story = {
	args: {
		children: (
			<>
				<h3 className="text-xl font-bold">Card Heading</h3>
				<p className="text-base mb-4">
					This is some descriptive text inside the card. It gives more information about the content or action that can
					be performed.
				</p>
				<img src="https://via.placeholder.com/150" alt="Placeholder Image" className="mb-4 rounded-md" />
				<button className="bg-blue-500 text-white px-4 py-2 rounded-md">Click Me</button>
			</>
		),
	},
}
