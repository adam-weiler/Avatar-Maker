import React from 'react';
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons'; //A dice icon.

import './GenderRaceAge.css';

const GenderRaceAge = ({ gender, race, raceLength, handleRandomClick, handleGenderClick, handleOptionClick }) => {
    return (
        <div id="genderRaceAgeButtons">
            <div className="buttonsRow">
                <div className="leftCol genderText">Gender:</div>
                <div className="rightCol">
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round" onClick={() => handleGenderClick(gender)}></span>
                    </label>
                </div>
            </div>

            <div className="buttonsRow">
                <Button outfitStyle="race" arrayLength={raceLength} label="Prev" clicker={handleOptionClick}/>
                <div className="prevNextType">Race {race + 1}</div>
                <Button outfitStyle="race" arrayLength={raceLength} label="Next" clicker={handleOptionClick}/>
            </div>

            <div className="buttonsRow">
                <div className="btnRandom" onClick={() => handleRandomClick()}>Random <FontAwesomeIcon icon={faDice} /></div>
            </div>
        </div>
    );
} 

export default GenderRaceAge;