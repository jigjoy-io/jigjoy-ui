import React from "react"
import { Button, Modal, ModalContent, ModalTrigger, Popover, PopoverContent, PopoverTrigger } from "@jigjoy-io/ui"

function App() {
	return (
		<div>
			<Modal>
				<ModalTrigger>
					<>hop</>
				</ModalTrigger>
				<ModalContent>
					Modalitet placanja
				</ModalContent>
			</Modal>

			<Popover>
				<PopoverTrigger>
					<>hop</>
				</PopoverTrigger>
				<PopoverContent>
					Modalitet placanja
				</PopoverContent>
			</Popover>
		</div>
	)
}

export default App