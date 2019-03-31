import React, { Component } from 'react';

import VaultSuit from '../VaultSuit/VaultSuit.js'; //A component that generates the entire Vault Suit outfit. (Shirt, Pants, Headwear, Gloves.)
import VaultPerson from '../VaultPerson/VaultPerson.js'; //A component that generates the entire Vault Person. (Body, Face, Hair, Features, and Beard.)

		import VaultGirl from '../VaultPerson/VaultGirl.js'; //A component that generates the entire Vault Person. (Body, Face, Hair, Features, and Beard.)

import '../../SASS/Atlas01.scss'; //SASS for VG, VB Face.

/* Vault Boy Outfits */
import '../../SASS/Atlas02.scss'; //VB skintone sprites.
import '../../SASS/Atlas03.scss';
import '../../SASS/Atlas04.scss';
import '../../SASS/Atlas05.scss';
import '../../SASS/Atlas06.scss';
import '../../SASS/Atlas07.scss';
import '../../SASS/Atlas08.scss';

/* Vault Girl Outfits */
import '../../SASS/Atlas09.scss'; //VG skintone sprites.
import '../../SASS/Atlas10.scss';

import '../../SASS/Atlas17.scss'; //SASS for VB Hair, Headwear, and Facial Features.
import '../../SASS/Atlas18.scss'; //SASS for VG, VB Hands, Gloves, Headwear, and Facial Features.
import '../../SASS/Atlas21.scss'; //SASS for Objects and Headwear.

import '../../SASS/hairColours.scss'; //SASS for hair colours.
import '../../SASS/Mysterious.scss'; //SASS for Mysterious Stranger Outfit.
import '../../SASS/FeralGhoul.scss'; //SASS for Feral Ghoul.

import '../../SASS/FalloutPerson.scss'; //SASS for shared VaultBoy & VaultSuit classes..
import '../../SASS/VaultBoy.scss'; //SASS for VaultBoy body.
import '../../SASS/VaultSuit.scss'; //SASS for VaultSuit body.
import '../../SASS/allRaces.scss'; //SASS for skincolors.



import '../../SASS/VaultGirl.scss'; //SASS for VaultBoy body.

// import '../../JustForTesting.scss'; //SASS for testing purposes.

// import './GenderRaceAge.css';

const AvatarWindow = ({ currentState }) => {
    return (
        <div id="avatarWindow">
            <div id="falloutPerson">
                <VaultSuit currentState={currentState} />{/**/}
                 <VaultPerson currentState={currentState} />
                 {/*<VaultGirl currentState={currentState} />*/}
            </div>
        </div>
    );
} 

export default AvatarWindow;