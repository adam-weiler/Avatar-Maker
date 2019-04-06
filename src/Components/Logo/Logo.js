import React from 'react';

import { LogoImage } from '../../imports';

const Logo = () => {
	return (
        <div id="logo">
            <img src={LogoImage} alt="Fallout Shelter logo" />
            <h1><div class="text">Avatar Maker</div></h1>
        </div>
	);
}

export default Logo;