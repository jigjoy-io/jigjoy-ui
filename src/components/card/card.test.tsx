import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import { Card } from "./card"

describe("Card Component", () => {
	test("renders the card with correct text", () => {
		render(<Card>This is a card</Card>)
		expect(screen.getByText(/this is a card/i)).toBeInTheDocument()
	})

	test("applies custom class names", () => {
		render(<Card className="custom-class">Styled Card</Card>)
		expect(screen.getByText(/styled card/i)).toHaveClass("custom-class")
	})

	test("renders multiple children", () => {
		render(
			<Card>
				<p>First child</p>
				<p>Second child</p>
			</Card>
		)
		expect(screen.getByText(/first child/i)).toBeInTheDocument()
		expect(screen.getByText(/second child/i)).toBeInTheDocument()
	})

	test("applies default styles when no className is passed", () => {
		render(<Card>This is a card</Card>)
		const card = screen.getByText(/this is a card/i)

		expect(card).toHaveClass("bg-surface-2")
		expect(card).toHaveClass("rounded-lg")
		expect(card).toHaveClass("p-4")
		expect(card).toHaveClass("gap-4")
		expect(card).toHaveClass("border")
		expect(card).toHaveClass("border-outline")
		expect(card).toHaveClass("text-base")
	})

	test("overrides default background color when className is passed", () => {
		render(<Card className="bg-red-500">Red Card</Card>)
		const card = screen.getByText(/red card/i)

		expect(card).toHaveClass("bg-red-500")
		expect(card).not.toHaveClass("bg-surface-2")
	})

	test("overrides multiple styles with custom class names", () => {
		render(<Card className="bg-green-500 text-white">Custom Styled Card</Card>)
		const card = screen.getByText(/custom styled card/i)

		expect(card).toHaveClass("bg-green-500")
		expect(card).toHaveClass("text-white")
		expect(card).not.toHaveClass("bg-surface-2")
		expect(card).not.toHaveClass("text-base")
	})

	test("applies hover effect on the card", () => {
		render(<Card>Hover me!</Card>)

		const card = screen.getByText(/hover me!/i)

		fireEvent.mouseEnter(card)

		expect(card).toHaveStyle("transform: scale(1.05)")

		fireEvent.mouseLeave(card)

		expect(card).not.toHaveStyle("transform: scale(1.05)")
	})

	test("renders card with complex content", () => {
		render(
			<Card>
				<h3 className="text-xl font-bold">Card Heading</h3>
				<p className="text-base mb-4">This is some descriptive text inside the card.</p>
				<img src="https://via.placeholder.com/150" alt="Placeholder" className="mb-4 rounded-md" />
				<button className="bg-blue-500 text-white px-4 py-2 rounded-md">Click Me</button>
			</Card>
		)

		expect(screen.getByText(/card heading/i)).toBeInTheDocument()
		expect(screen.getByText(/this is some descriptive text inside the card/i)).toBeInTheDocument()
		expect(screen.getByAltText("Placeholder")).toBeInTheDocument()
		expect(screen.getByText(/click me/i)).toBeInTheDocument()
	})
})
