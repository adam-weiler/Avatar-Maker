import React from 'react';

// import './MainButtons.css';

import { 
    all_races, genders, hair_colours, 
    male_beards, male_clothes, male_faces, male_features, male_gloves, male_hair, male_hands, male_headwear, 
    female_clothes, female_faces, female_features, female_gloves, female_hair, female_hands, female_headwear, 
    AvatarWindow, Button, GenderRaceAge,
    Logo
} from '../../imports';

const MainButtons = ({ currentState, handleOptionClick }) => {
	const { current_beard, current_face, current_feature, current_gender, current_gloves, current_hair, current_hair_colour, current_headwear, current_pants, current_race, current_shirt } = currentState;

	const segments = { 
		"shirt" : current_shirt,
		"pants": current_pants, 
		"hair": current_hair, 
		"hair_colour": current_hair_colour, 
		"beard": current_beard, 
		"headwear": current_headwear, 
		"feature": current_feature, 
		"face": current_face, 
		"gloves": current_gloves
	}
	let allButtons = [];

	// for (let key in segments) {
	// 	allButtons += key + segments[key];
	// }

// for (const key in segments) {
//   let value = segments[key];
//   allButtons += value + "<div>";
// }


for (var key in segments) {
	allButtons.push(<div>{segments[key]}</div>)
}


	return (
        <div>
            {female_faces.length} {current_pants} {allButtons}
        </div>
	);
}

export default MainButtons;


                // <div className="buttonsRow">
                //     <Button id={this.state.current_shirt} outfitStyle="shirt" arrayLength={clothes.length} label="Prev" clicker={this.handleOptionClick} />
                //     <div className="prevNextType">Shirt {this.state.current_shirt + 1}</div>
                //     <Button id={this.state.current_shirt} outfitStyle="shirt" arrayLength={clothes.length} label="Next" clicker={this.handleOptionClick} />
                // <br/>
                // </div>