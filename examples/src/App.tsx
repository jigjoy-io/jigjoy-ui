import React from "react"
import { Button, Modal, ModalContent, ModalTrigger, Popover, PopoverContent, PopoverTrigger } from "@jigjoy-io/ui"

function App() {
	return (
		<div className="m-2">
			<Modal>
				<ModalTrigger>
					<Button>Click me</Button>
				</ModalTrigger>
				<ModalContent>
					<div>Modalitet placanja</div>
				</ModalContent>
			</Modal>

			<div className="p-4">
				<Popover position="bottom-start">
					<PopoverTrigger>
						<Button>Click me</Button>
					</PopoverTrigger>
					<PopoverContent>hop</PopoverContent>
				</Popover>
			</div>
		</div>
	)
}

export default App
