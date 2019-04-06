import React from 'react';

import { 
    VaultPerson, VaultSuit, 
} from '../../imports';

const AvatarWindow = ({ currentState }) => {
    return (
        <div id="avatarWindow">
            <div id="falloutPerson">
                <VaultSuit currentState={currentState} />
                <VaultPerson currentState={currentState} />
            </div>
        </div>
    );
} 

export default AvatarWindow;