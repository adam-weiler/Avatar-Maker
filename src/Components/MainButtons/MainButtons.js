import React from 'react';

import { 
    hair_colours, 
    male_beards, male_clothes, male_faces, male_features, male_gloves, male_hair, male_hands, male_headwear, 
    female_clothes, female_faces, female_features, female_gloves, female_hair, female_hands, female_headwear, 
    Button
} from '../../imports';

const MainButtons = ({ currentState, handleOptionClick }) => {
	const { current_beard, current_face, current_feature, current_gender, current_gloves, current_hair, current_hair_colour, current_headwear, current_pants, current_race, current_shirt } = currentState; //Declares all the values from state.

	/* Based on gender, declares a variable that points to the correct JSON file. */
	const beard = current_beard;
    const clothes = current_gender === 0 ? male_clothes : female_clothes; // Used for shirt and pants
    const face = current_gender === 0 ? male_faces : female_faces;
    const feature = current_gender === 0 ? male_features : female_features;
    const gloves = current_gender === 0 ? male_gloves : female_gloves;
    const hair = current_gender === 0 ? male_hair : female_hair;
    const hair_colour = current_hair_colour;
    const hands = current_gender === 0 ? male_hands : female_hands;
    const headwear = current_gender === 0 ? male_headwear : female_headwear;

	let allButtons = []; //Stores all the buttonsRow divs that will render inside mainButtons.
	const limbStyle = ["shirt", "pants", "hair", "hair_colour", "beard", "headwear", "feature", "face", "gloves"]; //A list of all state items / clickable options.
	const limbName = ["Shirt", "Pants", "Hair", "Hair Colour", "Beard", "Headwear", "Feature", "Face", "Gloves"]; //The visible list of all the clickable options.
	const arrLength = [clothes.length, clothes.length, hair.length, hair_colours.length, male_beards.length, headwear.length, feature.length, face.length, gloves.length]; //The length of each array from each JSON file.
	const currents = [current_shirt, current_pants, current_hair, current_hair_colour, current_beard, current_headwear, current_feature, current_face, current_gloves]; //The current value in state.

	for (var x = 0; x < limbStyle.length; x++) { //Iterates through each limbStyle. Returns a buttonRow with left & right buttons, also label that updates from state.
		allButtons.push(
			<div className="buttonsRow">
				<Button limbStyle={limbStyle[x]} arrLength={arrLength[x]} label="Prev" clicker={handleOptionClick} />
				<div className="prevNextType">{limbName[x]} {currents[x] + 1}</div>
				<Button limbStyle={limbStyle[x]} arrLength={arrLength[x]} label="Next" clicker={handleOptionClick} />
			</div>
			);
	}

	return (
        <div id="mainButtons">
            {allButtons}
        </div>
	);
}

export default MainButtons;