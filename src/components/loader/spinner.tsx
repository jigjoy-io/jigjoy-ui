function Spinner() {
	return (
		<div className="relative w-0 h-0 m-16 animate-spin-custom">
			<div className="absolute w-5 h-5 bg-[#f672d1] rounded-full opacity-90 top-1/2 left-1/2 -mt-[10px] -ml-[10px] transform translate-x-3 -translate-y-3 scale-100 shadow-[-1.5em_1.5em_0_#e2e2e2] animate-pulse-pink" />
			<div className="absolute w-5 h-5 bg-[#74eddf] rounded-full opacity-90 top-1/2 left-1/2 -mt-[10px] -ml-[10px] transform -translate-x-3 -translate-y-3 scale-100 shadow-[1.5em_1.5em_0_black] animate-pulse-blue" />
		</div>
	)
}

export default Spinner
