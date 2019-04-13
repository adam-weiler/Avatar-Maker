import React from 'react';

import { 
    all_races, genders, 
} from '../../imports';

const MinorSelections = ({ currentState }) => {
    const { current_gender, current_race } = currentState; //Declares all the values from state.

    /* Based on gender, declares a variable that points to the correct JSON file. */

	
    return (
        <div id="genderRaceAgeSelections">
            <div class="minorTopSideBorders"></div>
            <div className="displayRow">
                <div className="labelType">Gender:</div>
                <div className="styleType">{genders[current_gender]['name']}</div>
            </div>
            <div className="displayRow">
                <div className="labelType">Race:</div>
                <div className="styleType">{all_races[current_race]['name']}</div>
            </div>
            <div class="minorBottomSideBorders"></div>
        </div>
    );
} 

export default MinorSelections;