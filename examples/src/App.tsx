import React from "react"
import { Button, Modal, ModalContent, ModalTrigger, Tab, Tabs } from "@jigjoy-io/ui"

function App() {
	return (
		<div>
			<Tabs>
				<Tab key="hop">
					<div className="text-white">hop</div>
				</Tab>
			</Tabs>
			<Modal>
				<ModalTrigger>
					<Button>Click me</Button>
				</ModalTrigger>
				<ModalContent>Modalitet placanja</ModalContent>
			</Modal>
		</div>
	)
}

export default App
