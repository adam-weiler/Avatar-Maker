import React from 'react';

import './Button.css';

const Button = ({ styleId, arrLength, label, clicker }) => {
	return (
		<div className="prevNextButton" onClick={() => clicker(styleId, arrLength, label)}>
		{label === 'Prev'? "◀": "▶" }
		</div>
	);
}

export default Button;