import React from "react"
import { Button, Modal, ModalContent, ModalTrigger } from "@jigjoy-io/ui"

function App() {
	return (
		<div>
			<Modal>
				<ModalTrigger>
					<Button>Click Me</Button>
				</ModalTrigger>
				<ModalContent>
					Modalitet placanja
				</ModalContent>
			</Modal>
		</div>
	)
}

export default App