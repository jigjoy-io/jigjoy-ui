import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "./button"

describe("Button Component", () => {
	test("renders the button with correct text", () => {
		render(<Button>Click Me</Button>)
		expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
	})

	test("triggers onClick when clicked", () => {
		const handleClick = jest.fn()
		render(<Button onClick={handleClick}>Click Me</Button>)

		const button = screen.getByRole("button", { name: /click me/i })
		fireEvent.click(button)

		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	test("applies custom class names", () => {
		render(<Button className="custom-class">Styled</Button>)
		expect(screen.getByRole("button")).toHaveClass("custom-class")
	})

	test("has hover and tap animations", () => {
		render(<Button>Hover Test</Button>)
		const button = screen.getByRole("button", { name: /hover test/i })

		expect(button).toHaveClass("transition-colors duration-200")
	})
})
