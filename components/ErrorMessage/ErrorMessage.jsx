import DartVader from "../Icons/DarthVader";

const ErrorMessage = ({
	message = "Oops, something went wrong...",
	onClick = () => {},
	showButton = true,
	textStyle,
	iconStyles,
	buttonStyles,
}) => {
	return (
		<div className="error">
			<div className="error__text">
				<DartVader
					width={100}
					height={100}
					fill="#1d160d"
					{...iconStyles}
				/>
				<span style={textStyle}>{message}</span>
			</div>
			{showButton && (
				<div className="error__button">
					<button style={buttonStyles} onClick={onClick}>
						try again
					</button>
				</div>
			)}
		</div>
	);
};

export default ErrorMessage;
