import React, { Component } from 'react';

import { all_races, genders, hair_colours, male_beards, male_clothes, male_faces, male_features, male_gloves, male_hair, male_hands, male_headwear, female_clothes, female_faces, female_features, female_gloves, female_hair, female_hands, female_headwear } from './imports';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// import { faLink } from '@fortawesome/free-solid-svg-icons';

import AvatarWindow from './Components/AvatarWindow/AvatarWindow.js';
import LimbSegment from './Components/LimbSegment/LimbSegment.js'; //A component that generates a segment for each Limb.
import Button from './Components/Button/Button.js'; //A component that generates a "Previous" or "Next" button.
import GenderRaceAge from './Components/GenderRaceAge/GenderRaceAge.js'; //A component that generates a "Previous" or "Next" button.

import logo from './Images/Fallout_Shelter_logo.png'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_beard: 0, //Initially loads no Beard, 0.
            current_face: 0, //Initially loads Happy, 0.
            current_feature: 0, //Initially loads no Feature, 0.
            current_gender: 0, //Initially loads male Vault-Boy, 0.
            current_gloves: 0, //Initially loads no Gloves, 0.
            current_hair: 0, //Initially loads Tunnel Snake Hairstyle, 0.
            current_hair_colour: 27, //Initially loads Blonde, 27.
            current_headwear: 0, //Initially loads no Headwear, 0.
            current_pants: 1, //Initally loads Vault Suit, 38
            current_race: 0, //Stores Skintone. Initially loads caucasian Skintone, 1.
            current_shirt: 1 //Initally loads Vault Suit, 38.
        }
        this.handleOptionClick = this.handleOptionClick.bind(this); //This method is for "Prev" and "Next" buttons.
        this.handleGenderClick = this.handleGenderClick.bind(this); //This method is for Gender selections button.
        this.handleRandomClick = this.handleRandomClick.bind(this); //This method is for Random button.
    }

    handleOptionClick(outfitStyle, arrayLength, label) { //This method triggers when the user clicks "Prev" or "Next" buttons.
        console.log("outfitStyle: ", outfitStyle);
        console.log("arrayLength: ", arrayLength);
        console.log("label: ", label);

        let ourStyle = this.state[outfitStyle]; //Temporarily stores the current_[outfitStyle] from state.

        if (label === "Next") { //If user clicked "Next" button.
            console.log("Next - ", ourStyle);
            if (ourStyle < arrayLength -1) { //If ourStyle is less than number of items in [outfitStyle] array, add 1.
                ourStyle = ourStyle + 1;
            } else { //Otherwise, go back to 0.
                ourStyle = 0;
            }
        }

        if (label === "Previous") { //If user clicked "Previous" button.
            console.log("Prev", ourStyle);
            if (ourStyle === 0) { //If ourStyle is 0, go to end of [outfitStyle] array.
                ourStyle = arrayLength -1;
            } else { //Otherwise, subtract 1.
                ourStyle = ourStyle - 1;
            }
        }

        this.setState({
            [outfitStyle]: ourStyle //Updates current_[outfitStyle] with new value.
                    // current_shirt: ourStyle,
                    // current_pants: ourStyle
        });
        console.log ([outfitStyle] + ":" + ourStyle);
    }

    handleGenderClick(gender) { //This method triggers when the user clicks on the "Gender" button.
        console.log("Current Gender: ", gender);

        //let ourGender = this.state.current_gender; //Temporarily stores the current_gender.

        let ourGender = (gender === 0 ? 1 : 0); //If gender is male, switch to female. Otherwise, switch to male.

        this.setState({
            current_beard: 0,
            current_face: 0,
            current_feature: 0,
            current_gender: ourGender, //Updates current_gender with new value.
            current_gloves: 0,
            current_hair: 0,
            current_hair_colour: 27,
            current_headwear: 0,
            current_pants: 1,
            current_race: 0,
            current_shirt: 1
        });
        console.log ("New gender: " + ourGender);
    }


    handleRandomClick() { //This method triggers when the user clicks the "Random" button.
    	function getRandom (maxVal) { //Gets a random value between 0 and length of array.
    		return Math.floor((Math.random() * maxVal) + 0);
    	}

    	this.setState({
            current_beard: getRandom(male_beards.length),
            current_face: getRandom(male_faces.length),
            current_feature: getRandom(male_features.length),
            current_gender: 0, //Sets gender to male.. for now.
            current_gloves: getRandom(male_gloves.length),
            current_hair: getRandom(male_hair.length),
            current_hair_colour: getRandom(hair_colours.length),
            current_headwear: getRandom(male_headwear.length),
            current_pants: getRandom(male_clothes.length),
            current_race: getRandom(all_races.length),
            current_shirt: getRandom(male_clothes.length)
        });
    }

    render() {

    const clothes = this.state.current_gender === 0 ? male_clothes : female_clothes;
    const face = this.state.current_gender === 0 ? male_faces : female_faces;
    const feature = this.state.current_gender === 0 ? male_features : female_features;
    const gloves = this.state.current_gender === 0 ? male_gloves : female_gloves;
    const hair = this.state.current_gender === 0 ? male_hair : female_hair;
    const headwear = this.state.current_gender === 0 ? male_headwear : female_headwear;

    return (
        <div className="App">

            <div id="eGuy39"></div>
            <div id="eGirl3543"></div>

            <div id="logo">
                <img src={logo} alt="Fallout Shelter logo" />
                <h1><div class="text">Avatar Maker</div></h1>
            </div>

            <AvatarWindow currentState={this.state} /> {/*A component that generates the entire AvatarWindow. (VaultSuit and VaultPerson.)*/}

            <div id="allButtons">
                <div className="buttonsRow">
                    <Button id={this.state.current_shirt} outfitStyle="current_shirt" arrayLength={clothes.length} label="Previous" clicker={this.handleOptionClick} />
                    <div className="prevNextType">Shirt {this.state.current_shirt + 1}</div>
                    <Button id={this.state.current_shirt} outfitStyle="current_shirt" arrayLength={clothes.length} label="Next" clicker={this.handleOptionClick} />
                <br/>{/*<FontAwesomeIcon icon={faLink} />*/}
                </div>
                <div className="buttonsRow">
                    <Button id={this.state.current_pants} outfitStyle="current_pants" arrayLength={clothes.length} label="Previous" clicker={this.handleOptionClick} />
                    <div className="prevNextType">Pants {this.state.current_pants + 1}</div>
                    <Button id={this.state.current_pants} outfitStyle="current_pants" arrayLength={clothes.length} label="Next" clicker={this.handleOptionClick} />
                </div>
                <div className="buttonsRow">
                    <Button id={this.state.current_hair} outfitStyle="current_hair" arrayLength={hair.length} label="Previous" clicker={this.handleOptionClick} />
                    <div className="prevNextType">Hairstyle {this.state.current_hair + 1}</div>
                    <Button id={this.state.current_hair} outfitStyle="current_hair" arrayLength={hair.length} label="Next" clicker={this.handleOptionClick} />
                </div>
                <div className="buttonsRow">
                    <Button id={this.state.current_hair_colour} outfitStyle="current_hair_colour" arrayLength={hair_colours.length} label="Previous" clicker={this.handleOptionClick} />
                    <div className="prevNextType">Hair Colour {this.state.current_hair_colour + 1}</div>
                    <Button id={this.state.current_hair_colour} outfitStyle="current_hair_colour" arrayLength={hair_colours.length} label="Next" clicker={this.handleOptionClick} />
                </div>
                <div className="buttonsRow">
                    <Button id={this.state.current_beard} outfitStyle="current_beard" arrayLength={male_beards.length} label="Previous" clicker={this.handleOptionClick} />
                    <div className="prevNextType">Beard {this.state.current_beard + 1}</div>
                    <Button id={this.state.current_beard} outfitStyle="current_beard" arrayLength={male_beards.length} label="Next" clicker={this.handleOptionClick} />
                </div>
                <div className="buttonsRow">
                    <Button id={this.state.current_headwear} outfitStyle="current_headwear" arrayLength={headwear.length} label="Previous" clicker={this.handleOptionClick} />
                    <div className="prevNextType">Headwear {this.state.current_headwear + 1}</div>
                    <Button id={this.state.current_headwear} outfitStyle="current_headwear" arrayLength={headwear.length} label="Next" clicker={this.handleOptionClick} />
                </div>

                <div className="buttonsRow">
                    <Button id={this.state.current_feature} outfitStyle="current_feature" arrayLength={feature.length} label="Previous" clicker={this.handleOptionClick} />
                    <div className="prevNextType">Feature {this.state.current_feature + 1}</div>
                    <Button id={this.state.current_feature} outfitStyle="current_feature" arrayLength={feature.length} label="Next" clicker={this.handleOptionClick} />
                </div>

                <div className="buttonsRow">
                    <Button id={this.state.current_face} outfitStyle="current_face" arrayLength={face.length} label="Previous" clicker={this.handleOptionClick} />
                    <div className="prevNextType">Face {this.state.current_face + 1}</div>
                    <Button id={this.state.current_face} outfitStyle="current_face" arrayLength={face.length} label="Next" clicker={this.handleOptionClick} />
                </div>

                <div className="buttonsRow">
                    <Button id={this.state.current_gloves} outfitStyle="current_gloves" arrayLength={gloves.length} label="Previous" clicker={this.handleOptionClick} />
                    <div className="prevNextType">Gloves {this.state.current_gloves + 1}</div>
                    <Button id={this.state.current_gloves} outfitStyle="current_gloves" arrayLength={gloves.length} label="Next" clicker={this.handleOptionClick} />
                </div>
            </div>

            <GenderRaceAge gender={this.state.current_gender} race={this.state.current_race}
raceLength={all_races.length} handleRandomClick={this.handleRandomClick}
             handleGenderClick={this.handleGenderClick} handleOptionClick={this.handleOptionClick} />

            <div id="displaySelections">
                <div className="displayRow">
                    <div className="labelType">Shirt:</div>
                    <div className="styleType">{male_clothes[this.state.current_shirt]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Pants:</div>
                    <div className="styleType">{male_clothes[this.state.current_pants]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Hairstyle:</div>
                    <div className="styleType">{male_hair[this.state.current_hair]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Hair Colour:</div>
                    <div className="styleType">{hair_colours[this.state.current_hair_colour]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Beard:</div>
                    <div className="styleType">{male_beards[this.state.current_beard]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Headwear:</div>
                    <div className="styleType">{male_headwear[this.state.current_headwear]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Feature:</div>
                    <div className="styleType">{male_features[this.state.current_feature]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Face:</div>
                    <div className="styleType">{face[this.state.current_face]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Gloves:</div>
                    <div className="styleType">{male_gloves[this.state.current_gloves]['name']}</div>
                </div>
            </div>

           	<div id="genderRaceAgeSelection">
                <div className="displayRow">
                    <div className="labelType">Gender:</div>
                    <div className="styleType">{genders[this.state.current_gender]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Race:</div>
                    <div className="styleType">{all_races[this.state.current_race]['name']}</div>
                </div>
            </div>

        {/*<img id="iphoto" src={iphoto} alt="Hey!"/>

        <img id="guy35" src={Guy35} alt="Hey!"/>*/}
      </div>
    );
  }
}

export default App;