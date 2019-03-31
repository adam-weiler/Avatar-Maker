import React, { Component } from 'react';

/* All JSON files. */
import { male_headwear } from '../../JSON/Male/male_headwear'; //Contains data about Headwear for Vault Boy.
import { male_hair } from '../../JSON/Male/male_hair'; //Contains data about Male Hairstyles.
import { male_features } from '../../JSON/Male/male_features'; //Contains data about Features for Vault Boy.
import { male_beards } from '../../JSON/Male/male_beards'; //Contains data about Male Facial Hair.

import { female_hair } from '../../JSON/Female/female_hair'; //Contains data about Female Hairstyles.
import { female_features } from '../../JSON/Female/female_features'; //Contains data about Features for Vault Boy.

import { all_races } from '../../JSON/all_races'; //Contains data about skincolor.
import { hair_colours } from '../../JSON/hair_colours'; //Contains data about hair Colours.
import { genders } from '../../JSON/genders'; //Contains data about Genders.

import LimbSegment from '../LimbSegment/LimbSegment.js'; //A component that generates a segment for each Limb.

// import './GenderRaceAge.css';

const VaultPerson = ({ currentState }) => {
    const { current_gender, current_race, current_headwear, current_feature, current_hair, current_hair_colour, current_beard } = currentState;

    const feature = current_gender === 0 ? male_features : female_features; //If 0, use male_ ; otherwise use female_
    const hair = current_gender === 0 ? male_hair : female_hair;
    // const beard = current_gender === 0 ? male_clothes : female_clothes;

    return (
        <div id="vaultGirl">





            <div id="vg_frontArm">
                <div className={'atlas09 skinColor' + current_race} id={'vg_frontarm_lowerhalf'}
></div>
                <div className={'atlas09 skinColor' + current_race} id="vg_frontarm_upperhalf"></div>
                <div className={'vg_frontarm_hand atlas18 skinColor' + current_race} id="vg_frontarm_glove10"></div>
            </div>                                 
        </div>
    );
} 

export default VaultPerson;