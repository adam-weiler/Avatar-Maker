import React from 'react';

import { 
    FontAwesomeIcon, faDice, 
    all_races,
    Button
} from '../../imports';

const MinorButtons = ({ currentState, handleGenderClick, handleOptionClick, handleRandomClick }) => {
    const { current_race } = currentState; //Declares all the values from state.

    return (
        <div id="minorButtons">
            <div class="minorTopSideBorders"></div>
            <div className="buttonsRow">
                <div className="leftCol genderText">Gender:</div>
                <div className="rightCol">
                    <label class="switch">
                        <input id="genderInput" type="checkbox" />
                        <span class="slider genderSlider round" onClick={() => handleGenderClick()}></span>
                    </label>
                </div>
            </div>

            <div className="buttonsRow">
                <Button styleId="race" arrLength={all_races.length} label="Prev" clicker={handleOptionClick}/>
                <div className="prevNextType">Race {current_race + 1}</div>
                <Button styleId="race" arrLength={all_races.length} label="Next" clicker={handleOptionClick}/>
            </div>

            <div className="buttonsRow">
                <div className="btnRandom" onClick={() => handleRandomClick()}>Random <FontAwesomeIcon icon={faDice} /></div>
            </div>
            <div class="minorBottomSideBorders"></div>
        </div>
    );
} 

export default MinorButtons;