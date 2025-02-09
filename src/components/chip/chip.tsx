import React from "react"
import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

interface ChipProps {
	label: string
	onClick?: () => void
	delay?: number
	className?: string
}

const bubbleVariants = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
}

const Chip: React.FC<ChipProps> = ({ label, onClick, delay = 0, className = "" }) => {
	return (
		<motion.button
			variants={bubbleVariants}
			initial="initial"
			animate="animate"
			transition={{ duration: 0.3, delay: delay * 0.1 }}
			onClick={onClick}
			className={twMerge(
				"rounded-full px-3 py-1 cursor-pointer bg-primary text-surface-1 text-sm hover:bg-hover transition-colors",
				className
			)}
		>
			{label}
		</motion.button>
	)
}

Chip.displayName = "Chip"

export { Chip }
