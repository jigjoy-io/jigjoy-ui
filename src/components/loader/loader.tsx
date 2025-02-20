import Spinner from "./spinner"
import AnimatedDots from "./animated-dots"

interface LoaderProps {
	message: string
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
	return (
		<>
			<div className="w-full h-fit flex justify-center">
				<Spinner />
			</div>
			<div className="flex flex-row justify-center items-end">
				<div>{message}</div>
				<AnimatedDots />
			</div>
		</>
	)
}

export { Loader }
