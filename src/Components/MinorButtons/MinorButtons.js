import React from 'react';

import { 
    FontAwesomeIcon, faDice, 
    all_races, genders, 
    Button
} from '../../imports';

const MinorButtons = ({ currentState, handleGenderClick, handleOptionClick, handleRandomClick }) => {
    const { current_gender, current_race } = currentState; //Declares all the values from state.

    return (
        <div id="genderRaceAgeButtons">
            <div className="buttonsRow">
                <div className="leftCol genderText">Gender:</div>
                <div className="rightCol">
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round" onClick={() => handleGenderClick(current_gender)}></span>
                    </label>
                </div>
            </div>

            <div className="buttonsRow">
                <Button limbStyle="race" arrLength={all_races.length} label="Prev" clicker={handleOptionClick}/>
                <div className="prevNextType">Race {current_race + 1}</div>
                <Button limbStyle="race" arrLength={all_races.length} label="Next" clicker={handleOptionClick}/>
            </div>

            <div className="buttonsRow">
                <div className="btnRandom" onClick={() => handleRandomClick()}>Random <FontAwesomeIcon icon={faDice} /></div>
            </div>
        </div>
    );
} 

export default MinorButtons;