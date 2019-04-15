import React from 'react';

import { 
    all_styles, hair_colours, 
    male_beards, male_clothes, male_faces, male_features, male_gloves, male_hair, male_headwear, 
    female_clothes, female_faces, female_features, female_gloves, female_hair, female_headwear, 
} from '../../imports';

const MainSelections = ({ currentState, handleOptionClick, handleModeToggle }) => {
	const { current_beard, current_face, current_feature, current_gender, current_gloves, current_hair, current_hair_colour, current_headwear, current_mode, current_pants, current_shirt } = currentState; //Declares all the values from state.

	/* Based on gender, declares a variable that points to the correct JSON file. */
    const clothes = current_gender === 0 ? male_clothes : female_clothes; // Used for shirt and pants
    const face = current_gender === 0 ? male_faces : female_faces;
    const feature = current_gender === 0 ? male_features : female_features;
    const gloves = current_gender === 0 ? male_gloves : female_gloves;
    const hair = current_gender === 0 ? male_hair : female_hair;
    // const hands = current_gender === 0 ? male_hands : female_hands;
    const headwear = current_gender === 0 ? male_headwear : female_headwear;

	let mainSelections = []; //Stores all the displayRow divs that will render inside mainSelections.

	const arrStyles = [clothes, clothes, hair, hair_colours, male_beards, headwear, feature, face, gloves]; //The list of each array from each JSON file.
	const currents = [current_shirt, current_pants, current_hair, current_hair_colour, current_beard, current_headwear, current_feature, current_face, current_gloves]; //The current value in state.

	for (var x = 0; x < all_styles.length; x++) { //Iterates through each item in all_styles JSON. Returns a displayRow with labelType and styleType that updates from state.
		if ((current_mode === 1) || (all_styles[x].mode === 1)) { //Will print the selections if current_mode is 1 (set to Advanced) . Or will print if current item's Mode is 1 (always visible).
			mainSelections.push(
				<div className="displayRow">
                    <div className="labelType">{all_styles[x].name}:</div>
                    <div className="styleType">{arrStyles[x][currents[x]].name}</div>
                </div>
			);
		}
	}

	return (
        <div id="mainSelections">
        	<div class="mainTopSideBorders"></div>
            {mainSelections}
            <div class="mainBottomSideBorders"></div>
        </div>
	);
}

export default MainSelections;