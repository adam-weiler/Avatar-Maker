import React, { Component } from 'react';

/* All JSON files. */
import { male_headwear } from '../../JSON/Male/male_headwear'; //Contains data about Headwear for Vault Boy.
import { male_hair } from '../../JSON/Male/male_hair'; //Contains data about Male Hairstyles.
import { male_features } from '../../JSON/Male/male_features'; //Contains data about Features for Vault Boy.
import { male_beards } from '../../JSON/Male/male_beards'; //Contains data about Male Facial Hair.
import { male_hands } from '../../JSON/Male/male_hands'; //Contains data about Male Hands.

import { female_hair } from '../../JSON/Female/female_hair'; //Contains data about Female Hairstyles.
import { female_features } from '../../JSON/Female/female_features'; //Contains data about Features for Vault Girl.
import { female_hands } from '../../JSON/Female/female_hands'; //Contains data about Hands for Vault Girl.



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

    const hands = current_gender === 0 ? male_hands : female_hands;

    return (
        <div id="vaultPerson">
            <div id={genders[current_gender].id + '_frontArm'}>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id=
                {genders[current_gender].id + '_frontarm_lowerhalf'}
></div>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_frontarm_upperhalf'}></div>
                <div className={genders[current_gender].id + '_frontarm_hand atlas18 skinColor' + current_race} id={genders[current_gender].id + '_frontarm_' + hands[0].id}></div>
            </div>

            <div id={genders[current_gender].id + '_head'}>
                {(() => {
                    if ((!male_headwear[current_headwear].disable_hair) && (!male_features[current_feature].disable_hair)) { //Confirms there is no flag for current _headwear or _feature to disable Hairstyle.
                        // return <div className={'vb_hair ' 
                        //             + male_hair[current_hair].atlas 
                        //             + ' hair_' + hair_colours[current_hair_colour].id} 
                        //             id={'vb_' + male_hair[current_hair].id}>
                        //         </div>
                    } else { //There is a flag to disable Hairstyle.
                        if ((male_headwear[current_headwear].disable_hair === .5) || (male_features[current_feature].disable_hair === .5)) { //Checks if flag says to partially disable hairstyle.
                            return <div 
                                    className={'vb_hair atlas17 hair_' + hair_colours[current_hair_colour].id} 
                                    id='vb_hair13'>
                                </div>
                        } //Else, flag says to completely disable Hairstyle. There is no hair div.
                    }
                })()}

                {(() => {
                    if ((!male_headwear[current_headwear].disable_beard) && (!male_features[current_feature].disable_beard)) { //Confirms there is no flag for current _headwear or _feature to disable Beard.
                        return <div 
                                    className={'vb_beard atlas01 hair_' + hair_colours[current_hair_colour].id} 
                                    id={'vb_beard' + male_beards[current_beard].id}>
                                </div>

                    } //Else, flag says to completely disable Beard. There is no beard div.
                })()}

                {(() => {
                    if (current_feature > 0) { //Checks if there is any Facial Features selected.
                        if (!male_headwear[current_headwear].disable_feature) { //Confirms there is no flag for current_headwear to disable Feature.
                            return <LimbSegment limbClass="vb_feature" atlas={male_features[current_feature].atlas} limbId={male_features[current_feature].id} /> //Returns a div for the feature.
                    }
                    } //Else, there is no feature div.
                })()}

                {/*<div className={genders[current_gender].id + '_face atlas01'} id="vb_face5"></div>*/}
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_headshape'}></div>
            </div>
            
            <div id={genders[current_gender].id + '_torso'}>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_chest'}></div> 
            </div>

            <div id={genders[current_gender].id + '_frontLeg'}>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_frontleg_upperhalf'}></div>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_frontleg_lowerhalf'}></div>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_frontleg_foot'}></div>
            </div>


            {(() => {
                if (current_gender === 0) { //Checks for Male gender. Ifso, returns a div for the trunk.
                    return <div id="vb_trunk">
                                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id="vb_crotch"></div>
                            </div>
                } //Else, there is no trunk div.
            })()}

            <div id={genders[current_gender].id + '_backLeg'}>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_backleg_upperhalf'}></div>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_backleg_lowerhalf'}></div>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_backleg_foot'}></div>
            </div>

            <div id={genders[current_gender].id + '_backArm'}>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_backarm_lowerhalf'}></div>
                <div className={genders[current_gender].atlas + ' skinColor' + current_race} id={genders[current_gender].id + '_backarm_upperhalf'}></div>
                <div className={genders[current_gender].id + '_backarm_hand atlas18 skinColor' + current_race} id={genders[current_gender].id + '_backarm_' + hands[0].id}></div>
            </div>                                    
        </div>
    );
} 

export default VaultPerson;