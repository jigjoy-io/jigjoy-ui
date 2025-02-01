import React from "react"
import { Button, Modal, ModalContent, ModalTrigger } from "@jigjoy-io/ui"

function App() {
	return (
		<div>
			<Modal>
				<ModalTrigger>
					<Button>Click me</Button>
				</ModalTrigger>
				<ModalContent>
					<div>Modalitet placanja</div>
				</ModalContent>
			</Modal>
		</div>
	)
}

export default App
