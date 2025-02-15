import { motion } from "framer-motion"
import React from "react"
import { twMerge } from "tailwind-merge"

interface CardProps {
	children: React.ReactNode
	className?: string
	backgroundColor?: string
	size?: "small" | "medium" | "large"
}

const Card: React.FC<CardProps> = ({ children, className = "", backgroundColor = "bg-surface-2", size = "medium" }) => {
	const sizeClasses = {
		small: "p-2 gap-2",
		medium: "p-4 gap-4",
		large: "p-6 gap-6",
	}

	return (
		<motion.div
			className={twMerge(
				`${backgroundColor} rounded-lg ${sizeClasses[size]} border border-outline text-base`,
				className
			)}
			whileHover={{
				scale: 1.05,
				boxShadow: "0px 0px 20px rgba(229, 253, 120, 0.4)",
			}}
			transition={{ type: "spring", stiffness: 300 }}
		>
			{children}
		</motion.div>
	)
}

export { Card }
