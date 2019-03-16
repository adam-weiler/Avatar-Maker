import React, { Component } from 'react';

import { clothes } from './clothes'; //A JSON file that contains data about Shirts & Pants.
import { malehair } from './malehair'; //A JSON file that contains data about Male Hairstyles.
import { hair_colours } from './hair_colours'; //A JSON file that contains data about hair Colours.
import { facial_hair } from './facial_hair'; //A JSON file that contains data about Facial Hair.
import { male_hats } from './male_hats'; //A JSON file that contains data about Hats for Vault Boy.

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import Button from './Button.js'; //A component that generates a "Previous" or "Next" button.

// import Atlas02 from './Images/atlas02.png'; //7 outfits, male skintone.
// import Atlas03 from './Images/atlas03_2.png'; //8 outfits.
//import Atlas07 from './Images/atlas07.png'; //8 outfits.
// import Atlas18 from './Images/atlas18.png'; //63 hands & gloves, 9 hats, 3 masks.
// import Guy35 from './Images/guy35.jpeg';
// import iphoto from './Images/iphoto.PNG';
import logo from './Images/Fallout_Shelter_logo.png'

import './App.css';
import './FalloutBoy.scss'; //SASS for shared VaultBoy & VaultSuit classes..
import './VaultBoy.scss'; //SASS for VaultBoy body.
import './VaultSuit.scss'; //SASS for VaultSuit body.
import './Atlas01.scss'; //SASS for VG, VB Face.
import './Atlas02.scss'; //SASS for VB Outfits, VB skintone sprites.
import './Atlas03.scss'; //SASS for VB Outfits.
import './Atlas04.scss'; //SASS for VB Outfits.
import './Atlas05.scss'; //SASS for VB Outfits.
import './Atlas06.scss'; //SASS for VB Outfits.
import './Atlas07.scss'; //SASS for VB Outfits.
import './Atlas08.scss'; //SASS for VB Outfits.
import './Atlas17.scss'; //SASS for VB Hair, Hats, and Masks.
import './Atlas18.scss'; //SASS for VG, VB Hands, Gloves, Hats, and Masks.
import './Atlas21.scss'; //SASS for Objects and Hats.
import './hairColours.scss'; //SASS for hair colours.
import './Mysterious.scss'; //SASS for Mysterious Stranger Outfit.
import './FeralGhoul.scss'; //SASS for Feral Ghoul.

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_hair: 6, //This stores the current hair's id in the array.
            current_hair_colour: 0, //This stores the current hair_colour's id in the array.
            current_beard: 7, //This stores the current beard's id in the array.
            current_hat: 0, //This stores the current Hat's id in the array.
            current_shirt: 8, //This stores the current shirt's id in the array.
            current_pants: 8 //This stores the current pants' id in the array.
        }
        this.handleClick = this.handleClick.bind(this); //This method is for "Prev" and "Next" buttons.
    }

    handleClick(outfitStyle, arrayLength, label) { //This method triggers when the user clicks "Prev" or "Next" buttons.
        console.log("outfitStyle: ", outfitStyle);
        console.log("arrayLength: ", arrayLength);
        console.log("label: ", label);

        let ourClothes = this.state[outfitStyle]; //Temporarily stores the current_shirt or current_pants.

        if (label === "Next") { //If user clicked "Next" button.
            console.log("Next - ", ourClothes);
            if (ourClothes < arrayLength -1) { //If ourClothes is less than number of items in clothes array, add 1.
                ourClothes = ourClothes + 1;
            } else { //Otherwise, go back to 0.
                ourClothes = 0;
            }
        }

        if (label === "Previous") { //If user clicked "Previous" button.
            console.log("Prev", ourClothes);
            if (ourClothes === 0) { //If ourClothes is 0, go to end of clothes array.
                ourClothes = arrayLength -1;
            } else { //Otherwise, subtract 1.
                ourClothes = ourClothes - 1;
            }
        }

        this.setState({
            [outfitStyle]: ourClothes //Updates current_shirt or current_pants with new value.
                    // current_shirt: ourClothes,
                    // current_pants: ourClothes
        });
        console.log ([outfitStyle] + ":" + ourClothes);
    }

    render() {
    return (
      <div className="App">

      <div id="Guy9"></div>

            {/* 
            <p>Total Number of Shirts, and Pants: {clothes.length}</p>
            <p>Total Number of Male Hair: {malehair.length}</p>
            <p>Total Number of Hair Colours: {hair_colours.length}</p> 
            <p>Total Number of Facial Hair: {facial_hair.length}</p> 
            */}

            <div id="logo">
                <img src={logo} alt="Fallout Shelter logo" />
                <h1>Avatar Maker</h1>
            </div>

            <div id="avatarWindow"> {/*Vault Suit and Vault Boy*/}
            <div id="falloutBoy">
                <div id="vaultSuit">
                    <div id="vs_frontArm">
                        <div className={'vs_frontarm_lowerhalf ' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_frontarm_lowerhalf'}></div>
                        <div className={'vs_frontarm_upperhalf ' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_frontarm_upperhalf'}></div>
                    </div>

                    <div id="vs_head">
                        <div className={'vs_hat ' 
                            + male_hats[this.state.current_hat]['atlas']} 
                            id={'vs_hat' + male_hats[this.state.current_hat]['id']}>
                        </div>
                    </div>

                    <div id="vs_torso">
                        <div className={'vs_chest ' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_chest'}></div>
                        
                        {(() => {
                            if (clothes[this.state.current_shirt]['hem']) {
                                return <div className='vs_hem'>
                                            <div className={'vs_fronthem ' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_front_hem'}></div>
                                            <div className={'vs_backhem ' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_back_hem'}></div>
                                        </div>
                            }
                        })()}
                    </div>

                    <div id="vs_frontLeg">
                        <div className={'vs_frontleg_upperhalf ' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_frontleg_upperhalf'}></div>
                        <div className={'vs_frontleg_lowerhalf ' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_frontleg_lowerhalf'}></div>
                        <div className={'vs_frontleg_foot ' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_frontleg_foot'}></div>
                    </div>

                    <div id="vs_trunk">
                        <div className={'vs_crotch ' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_crotch'}></div>
                    </div>

                    <div id="vs_backLeg">
                        <div className={'vs_backleg_upperhalf ' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_backleg_upperhalf'}></div>
                        <div className={'vs_backleg_lowerhalf ' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_backleg_lowerhalf'}></div>
                        <div className={'vs_backleg_foot ' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_backleg_foot'}></div>
                    </div>

                    <div id="vs_backArm">
                        <div className={'vs_backarm_lowerhalf ' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_backarm_lowerhalf'}></div>
                        <div className={'vs_backarm_upperhalf ' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_backarm_upperhalf'}></div>
                    </div>
                </div>

                <div id="vaultBoy">
                    <div id="vb_frontArm">
                        <div className="atlas02" id="vb_frontarm_lowerhalf"></div>
                        <div className="atlas02" id="vb_frontarm_upperhalf"></div>
                        <div className="vb_frontarm_hand atlas18" id="vb_frontarm_handopen"></div>
                    </div>

                    <div id="vb_head">
                        <div className={'vb_hair ' 
                            + malehair[this.state.current_hair]['atlas'] 
                            + ' hair_' + hair_colours[this.state.current_hair_colour]['id']} 
                            id={'vb_' + malehair[this.state.current_hair]['id']}>
                        </div>

                        <div className={'vb_beard atlas01 hair_' + hair_colours[this.state.current_hair_colour]['id']} 

                        id={'vb_beard' + facial_hair[this.state.current_beard]['id']}>
                        </div>


                        <div className="vb_face atlas01" id="vb_face5"></div>
                        <div className="atlas02" id="outfit7_head"></div>
                    </div>

                    <div id="vb_torso">
                        <div className="atlas02" id="vb_chest"></div> 
                    </div>

                    <div id="vb_frontLeg">
                        <div className="atlas02" id="vb_frontleg_upperhalf"></div>
                        <div className="atlas02" id="vb_frontleg_lowerhalf"></div>
                        <div className="atlas02" id="vb_frontleg_foot"></div>
                    </div>

                    <div id="vb_trunk">
                        <div className="atlas02" id="vb_crotch"></div>
                    </div>

                    <div id="vb_backLeg">
                        <div className="atlas02" id="vb_backleg_upperhalf"></div>
                        <div className="atlas02" id="vb_backleg_lowerhalf"></div>
                        <div className="atlas02" id="vb_backleg_foot"></div>
                    </div>

                    <div id="vb_backArm">
                        <div className="atlas02" id="vb_backarm_lowerhalf"></div>
                        <div className="atlas02" id="vb_backarm_upperhalf"></div>
                        <div className="vb_backarm_hand atlas18" id="vb_backarm_handopen"></div>
                    </div>
                </div>
            </div>
            </div>

            <div id="allButtons">
                <div className="buttonsRow">
                    <Button id={this.state.current_shirt} outfitStyle="current_shirt" arrayLength={clothes.length} label="Previous" clicker={this.handleClick} />
                    <div className="prevNextType">Shirt {this.state.current_shirt + 1}</div>
                    <Button id={this.state.current_shirt} outfitStyle="current_shirt" arrayLength={clothes.length} label="Next" clicker={this.handleClick} />
                <br/>{/*<FontAwesomeIcon icon={faLink} />*/}
                </div>
                <div className="buttonsRow">
                    <Button id={this.state.current_pants} outfitStyle="current_pants" arrayLength={clothes.length} label="Previous" clicker={this.handleClick} />
                    <div className="prevNextType">Pants {this.state.current_pants + 1}</div>
                    <Button id={this.state.current_pants} outfitStyle="current_pants" arrayLength={clothes.length} label="Next" clicker={this.handleClick} />
                </div>
                <div className="buttonsRow">
                    <Button id={this.state.current_hair} outfitStyle="current_hair" arrayLength={malehair.length} label="Previous" clicker={this.handleClick} />
                    <div className="prevNextType">Hairstyle {this.state.current_hair + 1}</div>
                    <Button id={this.state.current_hair} outfitStyle="current_hair" arrayLength={malehair.length} label="Next" clicker={this.handleClick} />
                </div>
                <div className="buttonsRow">
                    <Button id={this.state.current_hair_colour} outfitStyle="current_hair_colour" arrayLength={hair_colours.length} label="Previous" clicker={this.handleClick} />
                    <div className="prevNextType">Hair Colour {this.state.current_hair_colour + 1}</div>
                    <Button id={this.state.current_hair_colour} outfitStyle="current_hair_colour" arrayLength={hair_colours.length} label="Next" clicker={this.handleClick} />
                </div>
                <div className="buttonsRow">
                    <Button id={this.state.current_beard} outfitStyle="current_beard" arrayLength={facial_hair.length} label="Previous" clicker={this.handleClick} />
                    <div className="prevNextType">Beard {this.state.current_beard + 1}</div>
                    <Button id={this.state.current_beard} outfitStyle="current_beard" arrayLength={facial_hair.length} label="Next" clicker={this.handleClick} />
                </div>
                <div className="buttonsRow">
                    <Button id={this.state.current_hat} outfitStyle="current_hat" arrayLength={male_hats.length} label="Previous" clicker={this.handleClick} />
                    <div className="prevNextType">Hat {this.state.current_hat + 1}</div>
                    <Button id={this.state.current_hat} outfitStyle="current_hat" arrayLength={male_hats.length} label="Next" clicker={this.handleClick} />
                </div>
            </div>

            <div id="displaySelections">
                <div className="displayRow">
                    <div className="styleType">Shirt:</div>
                    <div className="styleType">{clothes[this.state.current_shirt]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="styleType">Pants:</div>
                    <div className="styleType">{clothes[this.state.current_pants]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="styleType">Hairstyle:</div>
                    <div className="styleType">{malehair[this.state.current_hair]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="styleType">Hair Colour:</div>
                    <div className="styleType">{hair_colours[this.state.current_hair_colour]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="styleType">Beard:</div>
                    <div className="styleType">{facial_hair[this.state.current_beard]['name']}</div>
                </div>
                <div className="displayRow">
                    <div className="styleType">Hat:</div>
                    <div className="styleType">{male_hats[this.state.current_hat]['name']}</div>
                </div>
            </div>

        {/*<img id="iphoto" src={iphoto} alt="Hey!"/>

        <img id="guy35" src={Guy35} alt="Hey!"/>*/}
      </div>
    );
  }
}

export default App;
