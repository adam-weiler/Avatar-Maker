import React, { Component } from 'react';

import { 
    all_races, genders, hair_colours, 
    male_beards, male_clothes, male_faces, male_features, male_gloves, male_hair, male_hands, male_headwear, 
    female_clothes, female_faces, female_features, female_gloves, female_hair, female_hands, female_headwear, 
    AvatarWindow, Button, MinorButtons, MainButtons, MainSelections, MinorSelections, VaultPerson, VaultSuit, 
    Logo
} from './imports';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_beard: 0, //Initially loads no Beard, 0.
            current_face: 0, //Initially loads Happy, 0.
            current_feature: 0, //Initially loads no Feature, 0.
            current_gender: 1, //Initially loads male Vault-Boy, 0.
            current_gloves: 0, //Initially loads no Gloves, 0.
            current_hair: 0, //Initially loads Tunnel Snake Hairstyle, 0.
            current_hair_colour: 27, //Initially loads Blonde, 27.
            current_headwear: 0, //Initially loads no Headwear, 0.
            current_mode: 1, //Initially loads Basic mode, 0.
            current_pants: 10, //Initally loads Vault Suit, 38
            current_race: 0, //Stores Skintone. Initially loads caucasian Skintone, 1.
            current_shirt: 10 //Initally loads Vault Suit, 38.
        }
        this.handleOptionClick = this.handleOptionClick.bind(this); //This method is for "Prev" and "Next" buttons.
        this.handleGenderClick = this.handleGenderClick.bind(this); //This method is for Gender selection button.
        this.handleModeToggle = this.handleModeToggle.bind(this); //This method is for Basic or Advanced mode toggle.
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

    handleGenderClick() { //This method triggers when the user clicks on the "Gender" button.
        let ourGender = (this.state.current_gender === 0 ? 1 : 0); //If gender is male, switch to female. Otherwise, switch to male.




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

        let ourGender = getRandom(2);

        if (ourGender === 0) { //If ourGender is Male.
            document.getElementById("genderInput").checked = false; //Sets slider to blue.
        } else { //Else ourGender is Female.
            document.getElementById("genderInput").checked = true; //Sets slider to pink.
        }

        const clothes = ourGender === 0 ? male_clothes : female_clothes;
        const face = ourGender === 0 ? male_faces : female_faces;
        const feature = ourGender === 0 ? male_features : female_features;
        const gloves = ourGender === 0 ? male_gloves : female_gloves;
        const hair = ourGender === 0 ? male_hair : female_hair;
        const headwear = ourGender === 0 ? male_headwear : female_headwear;

     //    console.log(ourGender)

        // var x = document.getElementById("genderInput").checked;
        // console.log(x);

        // document.getElementById("genderInput").checked = false;

    	this.setState({
            current_beard: getRandom(male_beards.length),
            current_face: getRandom(face.length),
            current_feature: getRandom(feature.length),
            current_gender: ourGender, //Sets gender to male.. for now.
            current_gloves: getRandom(gloves.length),
            current_hair: getRandom(hair.length),
            current_hair_colour: getRandom(hair_colours.length),
            // current_headwear: getRandom(headwear.length),
            current_pants: getRandom(clothes.length),
            current_race: getRandom(all_races.length),
            current_shirt: getRandom(clothes.length)
        });
    }

    handleModeToggle() { //This method triggers when user clicks the Basic-Advanced toggle. 
        let ourMode = (this.state.current_mode === 0 ? 1 : 0); //If mode is basic, switch to advanced. Otherwise, switch to basic.

        if (ourMode === 0) { //If ourGender is Basic.
            document.getElementById("basicInput").checked = true; //Sets slider to red.
        } else { //Else ourGender is Advanced.
            document.getElementById("basicInput").checked = false; //Sets slider to green.
        }

        this.setState({
            current_mode: ourMode
        });
    }
    
    render() {



    return (
        <div className="App">
            {/*
            <div id="eGuy39"></div>
            <div id="eGirl3543"></div>
            */}



           

            <div id="container">
                <Logo /> {/*The div which displays the Logo. */}
                <AvatarWindow currentState={this.state} /> {/* Generates the div where the avatar is shown. (Includes VaultSuit and VaultPerson.) */}
                <MainButtons currentState={this.state} handleOptionClick={this.handleOptionClick} handleModeToggle={this.handleModeToggle} /> {/* Generates the div where most of the buttons live. */}
                <MainSelections currentState={this.state} handleOptionClick={this.handleOptionClick} handleModeToggle={this.handleModeToggle} /> {/* Generates the div that shows the names for most of the Selections. */}
                <MinorButtons currentState={this.state} handleGenderClick={this.handleGenderClick} handleOptionClick={this.handleOptionClick} handleRandomClick={this.handleRandomClick} /> {/* The div where the Gender, Race, Age buttons live. */}
                <MinorSelections currentState={this.state} /> {/* The div that shows the names for the Gender, Race, and Age Selections. */}
                {/*
                    <img id="iphoto" src={iphoto} alt="Hey!"/>
                    <img id="guy35" src={Guy35} alt="Hey!"/>
                */}
            </div>
      </div>
    );
  }
}

export default App;