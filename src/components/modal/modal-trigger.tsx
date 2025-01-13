import React, { ReactElement } from "react"
import ModalContext from "./modal-context"

interface ModalTriggerProps {
    children: ReactElement<{ onClick?: () => void }>;
}

const ModalTrigger: React.FC<ModalTriggerProps> = ({ children }) => {
	const context = React.useContext(ModalContext)

	if (!context) {
		throw new Error("ModalTrigger must be used within a Modal")
	}

	const { handleOpen } = context

	return React.cloneElement(children, { onClick: handleOpen })
}

ModalTrigger.displayName = "ModalTrigger"

export { ModalTrigger } 
