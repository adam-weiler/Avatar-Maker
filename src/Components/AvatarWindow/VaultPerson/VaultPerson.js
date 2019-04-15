import React from 'react';

import { 
    genders, hair_colours, 
    male_beards, male_faces, male_features, male_hair, male_hands, male_headwear, 
    female_faces, female_features, female_hair, female_hands, female_headwear, 
    SegmentPiece
} from '../../../imports';

const VaultPerson = ({ currentState }) => {
    const { current_gender, current_race, current_headwear, current_feature, current_hair, current_hair_colour, current_beard, current_face } = currentState;

    const headwear = current_gender === 0 ? male_headwear : female_headwear;
    const hair = current_gender === 0 ? male_hair : female_hair;
    const feature = current_gender === 0 ? male_features : female_features;
    const face = current_gender === 0 ? male_faces : female_faces;
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
                    if ((!headwear[current_headwear].disable_hair) && (!feature[current_feature].disable_hair)) { //Confirms there is no flag for current _headwear or _feature to disable Hairstyle.
                        return <div className={genders[current_gender].id + '_hair ' 
                                    + hair[current_hair].atlas 
                                    + ' hair_' + hair_colours[current_hair_colour].id} 
                                    id={genders[current_gender].id + '_' + hair[current_hair].id}>
                                </div>
                    } else { //There is a flag to disable Hairstyle.
                        if ((headwear[current_headwear].disable_hair === .5) || (feature[current_feature].disable_hair === .5)) { //Checks if flag says to partially disable hairstyle.
                            return <div 
                                    className={genders[current_gender].id + '_hair '
                                    + hair[current_hair].atlas 
                                    + ' hair_' + hair_colours[current_hair_colour].id} 
                                    id={genders[current_gender].id + '_hair13'}>
                                </div>
                        } //Else, flag says to completely disable Hairstyle. There is no hair div.
                    }
                })()}

                {(() => {
                    if ((current_beard > 0) && (!male_headwear[current_headwear].disable_beard) && (!male_features[current_feature].disable_beard)) { //Checks if there is any Beard selected. Also confirms there is no flag for current _headwear or _feature to disable Beard.
                        return <div 
                                    className={'vb_beard atlas01 hair_' + hair_colours[current_hair_colour].id} 
                                    id={'vb_beard' + male_beards[current_beard].id}>
                                </div>
                    } //Else, flag says to completely disable Beard. There is no beard div.
                })()}

                {(() => {
                    if (current_feature > 0) { //Checks if there is any Facial Features selected.
                        if (!male_headwear[current_headwear].disable_feature) { //Confirms there is no flag for current_headwear to disable Feature.
                            return <SegmentPiece segClass={genders[current_gender].id + '_feature' + feature[current_feature].layer} atlas={feature[current_feature].atlas} segId={genders[current_gender].id + '_' + feature[current_feature].id} /> //Returns a div for the feature.
                    }
                    } //Else, there is no feature div.   clothes[current_pants].id
                })()}

                <div className={genders[current_gender].id + '_face atlas01'} id={genders[current_gender].id + '_'  + face[current_face].id}></div>
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