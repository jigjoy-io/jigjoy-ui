import React from "react"
import { HTMLMotionProps, motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends HTMLMotionProps<"button"> {
	children: React.ReactNode
	onClick?: () => void
	className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className = "", onClick = () => {} }) => {
	return (
		<motion.button
			className={twMerge(
				"px-2 py-1 cursor-pointer rounded-md text-sm transition-colors duration-200",
				"bg-primary text-surface-1 hover:bg-hover",
				className
			)}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={onClick}
		>
			{children}
		</motion.button>
	)
}

Button.displayName = "Button"

export { Button }
