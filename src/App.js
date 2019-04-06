import React, { Component } from 'react';

import { 
    all_races, genders, hair_colours, 
    male_beards, male_clothes, male_faces, male_features, male_gloves, male_hair, male_hands, male_headwear, 
    female_clothes, female_faces, female_features, female_gloves, female_hair, female_hands, female_headwear, 
    AvatarWindow, Button, MinorButtons, MainButtons, VaultPerson, VaultSuit, 
    Logo
} from './imports';

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
            current_pants: 40, //Initally loads Vault Suit, 38
            current_race: 0, //Stores Skintone. Initially loads caucasian Skintone, 1.
            current_shirt: 1 //Initally loads Vault Suit, 38.
        }
        this.handleOptionClick = this.handleOptionClick.bind(this); //This method is for "Prev" and "Next" buttons.
        this.handleGenderClick = this.handleGenderClick.bind(this); //This method is for Gender selection button.
        this.handleRandomClick = this.handleRandomClick.bind(this); //This method is for Random button.
    }

    handleOptionClick(limbStyle, arrLength, label) { //This method triggers when the user clicks "Prev" or "Next" buttons.
        limbStyle = "current_" + limbStyle; //Adds "current_" to the front of the limbStyle.
        console.log("limbStyle: ", limbStyle);
        console.log("arrLength: ", arrLength);
        console.log("label: ", label);
        //console.log("length: ", this.state[limbStyle].length)   //this won't work.

        console.log("current_gender: ", this.state.current_gender);

        let ourStyle = this.state[limbStyle]; //Temporarily stores the current_[limbStyle] from state.
        console.log("ourStyle: ", ourStyle)

        if (label === "Next") { //If user clicked "Next" button.
            console.log("Next - ", ourStyle);
            if (ourStyle < arrLength - 1) { //If ourStyle is less than number of items in [limbStyle] array, add 1.
                ourStyle = ourStyle + 1;
            } else { //Otherwise, go back to 0.
                ourStyle = 0;
            }
        }

        if (label === "Prev") { //If user clicked "Previous" button.
            console.log("Prev", ourStyle);
            if (ourStyle === 0) { //If ourStyle is 0, go to end of [limbStyle] array.
                ourStyle = arrLength -1;
            } else { //Otherwise, subtract 1.
                ourStyle = ourStyle - 1;
            }
        }

        this.setState({
            [limbStyle]: ourStyle //Updates current_[limbStyle] with new value.
        });
        console.log ([limbStyle] + ":" + ourStyle);
        // console.log (this.state[limbStyle])
    }

    handleGenderClick(gender) { //This method triggers when the user clicks on the "Gender" button.
        console.log("Current Gender: ", gender);

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

            <Logo /> {/*The div which displays the Logo. */}
            <AvatarWindow currentState={this.state} /> {/* Generates the div where the avatar is shown. (Includes VaultSuit and VaultPerson.) */}
            <MainButtons currentState={this.state} handleOptionClick={this.handleOptionClick} /> {/* Generates the div where most of the buttons live. */}
            <MinorButtons currentState={this.state} handleGenderClick={this.handleGenderClick} handleOptionClick={this.handleOptionClick} handleRandomClick={this.handleRandomClick} /> {/* Generates the div where a few of the buttons live. */}




            <div id="mainSelections">
                <div className="displayRow">
                    <div className="labelType">Shirt:</div>
                    <div className="styleType">{clothes[this.state.current_shirt]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Pants:</div>
                    <div className="styleType">{clothes[this.state.current_pants]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Hairstyle:</div>
                    <div className="styleType">{hair[this.state.current_hair]['name']}</div>
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
                    <div className="styleType">{headwear[this.state.current_headwear]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="labelType">Feature:</div>
                    <div className="styleType">{feature[this.state.current_feature]['name']}</div>
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

           	<div id="genderRaceAgeSelections">
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