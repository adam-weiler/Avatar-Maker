import React from 'react';

import { 
    genders,
    male_clothes, male_gloves, male_headwear, 
    female_clothes, female_gloves, female_headwear, 
    SegmentPiece
} from '../../../imports';

const VaultSuit = ({ currentState }) => {
    const { current_gender, current_headwear, current_shirt, current_gloves, current_pants } = currentState;

    const gender = genders[current_gender].id; //vb for Vault Boy, vg for Vault Girl.
    const headwear = current_gender === 0 ? male_headwear : female_headwear; //If 0, use male_ ; otherwise use female_
    const clothes = current_gender === 0 ? male_clothes : female_clothes; // Used for shirt and pants
    const gloves = current_gender === 0 ? male_gloves : female_gloves;

    return (
        <div id="vaultSuit">
            <div id={gender + 's_frontArm'}>
                <SegmentPiece segClass={gender + 's_frontarm_lowerhalf'} atlas={clothes[current_shirt].atlas} segId={clothes[current_shirt].id + "_frontarm_lowerhalf"} />
                <SegmentPiece segClass={gender + 's_frontarm_upperhalf'} atlas={clothes[current_shirt].atlas} segId={clothes[current_shirt].id + "_frontarm_upperhalf"} />
                {(() => {
                    if (current_gloves > 0) { //Checks if there is any gloves selected. Ifso, returns a div for the front-arm glove.
                        return <SegmentPiece segClass={gender + 's_frontarm_glove'} atlas='atlas18' segId={gender + 's_frontarm_' + gloves[current_gloves].id} />
                    } //Else, there is no front-arm glove div.
                })()}
            </div>

            {(() => {
                if (current_headwear > 0) { //Checks if there is any Headwear selected. Ifso, returns a div for the headwear.
                    return <div id={gender + 's_head'}>
                                <SegmentPiece segClass={gender + 's_hat'} atlas={headwear[current_headwear].atlas} segId={headwear[current_headwear].id} />
                            </div>
                } //Else, there is no headwear div.
            })()}

            <div id={gender + 's_torso'}>
                <SegmentPiece segClass={gender + 's_chest'} atlas={clothes[current_shirt].atlas} segId={clothes[current_shirt].id + "_chest"} /> 
                {(() => {
                    if (clothes[current_shirt]['hem']) { //Checks if current_shirt includes a hem. Ifso, returns 2 divs for hem pieces.
                        return <div className={gender + 's_hem'}>
                                    <SegmentPiece segClass={gender + 's_fronthem'} atlas={clothes[current_shirt].atlas} segId={clothes[current_shirt].id + "_fronthem"} />
                                    <SegmentPiece segClass={gender + 's_backhem'} atlas={clothes[current_shirt].atlas} segId={clothes[current_shirt].id + "_backhem"} />
                                </div>
                    } //Else, there is no hem div.
                })()}

                {(() => {
                    if (clothes[current_shirt]['skirt']) { //Checks if current_shirt includes a skirt. Ifso, returns a div for skirt piece.
                        return <SegmentPiece segClass="vgs_skirt" atlas={clothes[current_shirt].atlas} segId={clothes[current_shirt].id + "_skirt"} />
                    } //Else, there is no hem div.
                })()}
            </div>

            <div id={gender + 's_frontLeg'}>
                <SegmentPiece segClass={gender + 's_frontleg_upperhalf'} atlas={clothes[current_pants].atlas} segId={clothes[current_pants].id + "_frontleg_upperhalf"} />
                <SegmentPiece segClass={gender + 's_frontleg_lowerhalf'} atlas={clothes[current_pants].atlas} segId={clothes[current_pants].id + "_frontleg_lowerhalf"} />
                <SegmentPiece segClass={gender + 's_frontleg_foot'} atlas={clothes[current_pants].atlas} segId={clothes[current_pants].id + "_frontleg_foot"} />
            </div>

            {(() => {
                if (current_gender === 0) { //Checks for Male gender. Ifso, returns a div for the trunk.
                    return <div id={gender + 's_trunk'}>
                                <SegmentPiece segClass="vbs_crotch" atlas={clothes[current_pants].atlas} segId={clothes[current_pants].id + "_crotch"} />
                            </div>
                } //Else, there is no trunk div.
            })()}

            <div id={gender + 's_backLeg'}>
                <SegmentPiece segClass={gender + 's_backleg_upperhalf'} atlas={clothes[current_pants].atlas} segId={clothes[current_pants].id + "_backleg_upperhalf"} />
                <SegmentPiece segClass={gender + 's_backleg_lowerhalf'} atlas={clothes[current_pants].atlas} segId={clothes[current_pants].id + "_backleg_lowerhalf"} />
                <SegmentPiece segClass={gender + 's_backleg_foot'} atlas={clothes[current_pants].atlas} segId={clothes[current_pants].id + "_backleg_foot"} />
            </div>

            <div id={gender + 's_backArm'}>
                <SegmentPiece segClass={gender + 's_backarm_lowerhalf'} atlas={clothes[current_shirt].atlas} segId={clothes[current_shirt].id + "_backarm_lowerhalf"} />
                <SegmentPiece segClass={gender + 's_backarm_upperhalf'} atlas={clothes[current_shirt].atlas} segId={clothes[current_shirt].id + "_backarm_upperhalf"} />
                {(() => {
                    if (current_gloves > 0) { //Checks if there is any gloves selected. Ifso, returns a div for the back-arm glove.
                        return <SegmentPiece segClass={gender + 's_backarm_glove'} atlas={gloves[current_gloves].atlas} segId={gender + 's_backarm_' + gloves[current_gloves].id} />
                    } //Else, there is no back-arm glove div.
                })()}
            </div>
        </div>
    );
} 

export default VaultSuit;