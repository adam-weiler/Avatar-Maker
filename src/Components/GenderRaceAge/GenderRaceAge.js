import React, { Component } from 'react';
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons'; //A dice icon.

import './GenderRaceAge.css';

const GenderRaceAge = ({ gender, race, raceLength, handleRandomClick, handleGenderClick, handleOptionClick }) => {
    return (
        <div id="genderButtons">
            <div className="buttonsRow">
                <div className="leftCol">Gender:</div>
                <div className="rightCol">
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round" onClick={() => handleGenderClick(gender)}></span>
                    </label>
                </div>
            </div>

            <div className="buttonsRow">
                <Button outfitStyle="current_race" arrayLength={raceLength} label="Previous" clicker={handleOptionClick}/>
                <div className="prevNextType">Race {race + 1}</div>
                <Button outfitStyle="current_race" arrayLength={raceLength} label="Next" clicker={handleOptionClick}/>
            </div>

            <div className="buttonsRow">
                <div className="btnRandom" onClick={() => handleRandomClick()}>Random <FontAwesomeIcon icon={faDice} /></div>
            </div>
        </div>
    );
} 

export default GenderRaceAge;