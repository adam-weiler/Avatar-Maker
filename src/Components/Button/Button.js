import React from 'react';

import './Button.css';

const Button = ({ limbStyle, arrLength, label, clicker }) => {
	return (
		<div className="prevNextButton" onClick={() => clicker(limbStyle, arrLength, label)}>
		{label === 'Prev'? "◀": "▶" }
		</div>
	);
}

export default Button;