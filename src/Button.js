import React from 'react';

import './Button.css';

const Button = ({ outfitStyle, arrayLength, label, clicker }) => {
	return (
		<div className="right-button" onClick={() => clicker(outfitStyle, arrayLength, label)}>{label}
		</div>
	);
}

export default Button;