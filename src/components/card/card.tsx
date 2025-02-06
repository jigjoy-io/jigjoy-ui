import { motion } from "framer-motion"
import React, { useRef } from "react"

interface CardProps {
	children: React.ReactNode | React.ReactNode[]
	onClick?: () => void
	className?: string
}

const Card: React.FC<CardProps> = ({ children, className = "", onClick }) => {
	const dragStartPos = useRef({ x: 0, y: 0 })

	const handlePointerDown = (e: any) => {
		dragStartPos.current = { x: e.clientX, y: e.clientY }
	}

	const handleClick = (e: any) => {
		if (!onClick) return

		const dx = Math.abs(e.clientX - dragStartPos.current.x)
		const dy = Math.abs(e.clientY - dragStartPos.current.y)
		const dragDistance = Math.sqrt(dx * dx + dy * dy)

		// Only trigger click if drag distance is less than 5 pixels
		if (dragDistance < 5) {
			onClick()
		}
	}

	return (
		<motion.div
			className={`bg-surface-2 rounded-lg p-4 flex gap-4 border border-outline text-base ${
				onClick ? "cursor-pointer" : ""
			} ${className}`}
			onClick={handleClick}
			onPointerDown={handlePointerDown}
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
