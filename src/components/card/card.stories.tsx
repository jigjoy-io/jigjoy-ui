import { Card } from "./card"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	args: {
		children: "This is a card",
		onClick: () => alert("Card clicked!"),
	},
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {}
