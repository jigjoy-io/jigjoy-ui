import React from "react"
import { HTMLMotionProps, motion } from "framer-motion"

interface MotionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
  }

const Button: React.FC<MotionButtonProps> = ({ children, className = "" }) => {
	return (
		<motion.button
			className={`px-2 py-1 bg-clickable text-surface1 rounded-md hover:bg-hover text-sm transition-colors duration-200 ${className}`}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			{children}
		</motion.button>
	)
}

Button.displayName = "Button"

export { Button }
