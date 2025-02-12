import React from "react"
import { Button, Modal, ModalContent, ModalTrigger, Tabs, Tab } from "@jigjoy-io/ui"

function App() {
	return (
		<div className="">
			<div className="h-[100dvh]">
				<Tabs>
					<Tab key="Discovery">
						<Modal>
							<ModalTrigger>
								<Button>Click me</Button>
							</ModalTrigger>
							<ModalContent>
								<div>Modalitet placanja</div>
							</ModalContent>
						</Modal>
					</Tab>
					<Tab key="Summary">
						<Modal>
							<ModalTrigger>
								<Button>Click me</Button>
							</ModalTrigger>
							<ModalContent>
								<div>Modalitet placanja</div>
							</ModalContent>
						</Modal>
					</Tab>
				</Tabs>
			</div>
		</div>
	)
}

export default App
