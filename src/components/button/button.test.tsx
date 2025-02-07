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

	test("applies default styles when no className is passed", () => {
		render(<Button>Default Styles</Button>)
		const button = screen.getByRole("button", { name: /default styles/i })

		expect(button).toHaveClass("px-2 py-1 cursor-pointer rounded-md text-sm transition-colors duration-200")
		expect(button).toHaveClass("bg-primary")
		expect(button).toHaveClass("text-surface-1")
		expect(button).toHaveClass("hover:bg-hover")
	})

	test("overrides default background color when className is passed", () => {
		render(<Button className="bg-red-500">Red Button</Button>)
		const button = screen.getByRole("button", { name: /red button/i })

		expect(button).toHaveClass("bg-red-500")
		expect(button).not.toHaveClass("bg-primary")
	})

	test("overrides multiple styles with custom class names", () => {
		render(<Button className="bg-green-500 text-white hover:bg-green-700">Custom Styled Button</Button>)
		const button = screen.getByRole("button", { name: /custom styled button/i })

		expect(button).toHaveClass("bg-green-500")
		expect(button).toHaveClass("text-white")
		expect(button).toHaveClass("hover:bg-green-700")

		expect(button).not.toHaveClass("bg-primary")
		expect(button).not.toHaveClass("text-surface-1")
		expect(button).not.toHaveClass("hover:bg-hover")
	})

	test("does not add unnecessary default styles when className is passed", () => {
		render(<Button className="bg-blue-500">Blue Button</Button>)
		const button = screen.getByRole("button", { name: /blue button/i })

		expect(button).toHaveClass("bg-blue-500")
		expect(button).not.toHaveClass("bg-primary")
	})
})
