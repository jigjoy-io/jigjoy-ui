import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	args: {
		children: "Click me",
	},
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Primary: Story = {
	args: {
		className: "bg-blue-500 text-white hover:bg-blue-600",
	},
}

export const WithClickHandler: Story = {
	args: {
		onClick: () => alert("Button clicked!"),
	},
}

export const CustomStyling: Story = {
	args: {
		className: "p-8 text-white hover:bg-pink-600",
		children: "Styled Button",
	},
}

export const CustomHover: Story = {
	args: {
		className: "bg-green-500 text-white hover:bg-green-700",
		children: "Custom Hover Button",
	},
}
