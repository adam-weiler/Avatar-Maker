import React, { Component } from 'react';

/* All JSON files. */
import { male_clothes } from '../../JSON/Male/male_clothes'; //Contains data about Shirts & Pants for Vault Boy.
import { male_headwear } from '../../JSON/Male/male_headwear'; //Contains data about Headwear for Vault Boy.
import { male_gloves } from '../../JSON/Male/male_gloves'; //Contains data about Gloves for Vault Boy.

import { female_clothes } from '../../JSON/Female/female_clothes'; //Contains data about Shirts & Pants for Vault Girl.
import { female_headwear } from '../../JSON/Female/female_headwear'; //Contains data about Headwear for Vault Boy.
import { female_gloves } from '../../JSON/Female/female_gloves'; //Contains data about Gloves for Vault Boy.

import LimbSegment from '../LimbSegment/LimbSegment.js'; //A component that generates a segment for each Limb.

// import './GenderRaceAge.css';

const VaultSuit = ({ currentState }) => {
    const { current_gender, current_headwear, current_shirt, current_gloves, current_pants } = currentState;

    const headwear = current_gender === 0 ? male_headwear : female_headwear; //If 0, use male_ ; otherwise use female_
    const clothes = current_gender === 0 ? male_clothes : female_clothes; // Used for shirt and pants
    const gloves = current_gender === 0 ? male_gloves : female_clothes;

    return (
        <div id="vaultSuit">
            <div id="vs_frontArm">
                <LimbSegment limbClass="vs_frontarm_lowerhalf" atlas={clothes[current_shirt].atlas} limbId={clothes[current_shirt].id + "_frontarm_lowerhalf"} />
                <LimbSegment limbClass="vs_frontarm_upperhalf" atlas={clothes[current_shirt].atlas} limbId={clothes[current_shirt].id + "_frontarm_upperhalf"} />
                {(() => {
                    if (current_gloves > 0) { //Checks if there is any gloves selected. Ifso, returns a div for the front-arm glove.
                        return <LimbSegment limbClass="vs_frontarm_glove" atlas={gloves[current_gloves].atlas} limbId={"vb_frontarm_" + gloves[current_gloves].id} />
                    } //Else, there is no front-arm glove div.
                })()}
            </div>

            {(() => {
                if (current_headwear > 0) { //Checks if there is any Headwear selected. Ifso, returns a div for the headwear.
                    return <div id="vs_head">
                                <LimbSegment limbClass="vs_hat" atlas={headwear[current_headwear].atlas} limbId={headwear[current_headwear].id} />
                            </div>
                } //Else, there is no headwear div.
            })()}

            <div id="vs_torso">
                <LimbSegment limbClass="vs_chest" atlas={clothes[current_shirt].atlas} limbId={clothes[current_shirt].id + "_chest"} /> 
                {(() => {
                    if (clothes[current_shirt]['hem']) { //Checks if current_shirt includes a hem. Ifso, returns a div for hem pieces.
                        return <div className='vs_hem'>
                                    <LimbSegment limbClass="vs_fronthem" atlas={clothes[current_shirt].atlas} limbId={clothes[current_shirt].id + "_fronthem"} />

                                    <LimbSegment limbClass="vs_backhem" atlas={clothes[current_shirt].atlas} limbId={clothes[current_shirt].id + "_backhem"} />
                                </div>
                    } //Else, there is no hem div.
                })()}
            </div>

            <div id="vs_frontLeg">
                <LimbSegment limbClass="vs_frontleg_upperhalf" atlas={clothes[current_pants].atlas} limbId={clothes[current_pants].id + "_frontleg_upperhalf"} />
                <LimbSegment limbClass="vs_frontleg_lowerhalf" atlas={clothes[current_pants].atlas} limbId={clothes[current_pants].id + "_frontleg_lowerhalf"} />
                <LimbSegment limbClass="vs_frontleg_foot" atlas={clothes[current_pants].atlas} limbId={clothes[current_pants].id + "_frontleg_foot"} />
            </div>

            <div id="vs_trunk">
                <LimbSegment limbClass="vs_crotch" atlas={clothes[current_pants].atlas} limbId={clothes[current_pants].id + "_crotch"} />
            </div>

            <div id="vs_backLeg">
                <LimbSegment limbClass="vs_backleg_upperhalf" atlas={clothes[current_pants].atlas} limbId={clothes[current_pants].id + "_backleg_upperhalf"} />
                <LimbSegment limbClass="vs_backleg_lowerhalf" atlas={clothes[current_pants].atlas} limbId={clothes[current_pants].id + "_backleg_lowerhalf"} />
                <LimbSegment limbClass="vs_backleg_foot" atlas={clothes[current_pants].atlas} limbId={clothes[current_pants].id + "_backleg_foot"} />
            </div>

            <div id="vs_backArm">
                <LimbSegment limbClass="vs_backarm_lowerhalf" atlas={clothes[current_shirt].atlas} limbId={clothes[current_shirt].id + "_backarm_lowerhalf"} />
                <LimbSegment limbClass="vs_backarm_upperhalf" atlas={clothes[current_shirt].atlas} limbId={clothes[current_shirt].id + "_backarm_upperhalf"} />
                {(() => {
                    if (current_gloves > 0) { //Checks if there is any gloves selected. Ifso, returns a div for the back-arm glove.
                        return <LimbSegment limbClass="vs_backarm_glove" atlas={gloves[current_gloves].atlas} limbId={"vb_backarm_" + gloves[current_gloves].id} />
                    } //Else, there is no back-arm glove div.
                })()}
            </div>
        </div>
    );
} 

export default VaultSuit;