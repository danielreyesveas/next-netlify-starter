import Rebels from "../Icons/Rebels";

const Spinner = ({
	width = 100,
	height = 100,
	fill = "#41321f",
	className,
	...props
}) => {
	return (
		<Rebels
			width={width}
			height={height}
			fill={fill}
			className={className}
			{...props}
		/>
	);
};

export default Spinner;
