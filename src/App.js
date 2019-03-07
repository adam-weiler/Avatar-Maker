import React, { Component } from 'react';

import { clothes } from './clothes'; //A JSON file that contains data about shirts

import Button from './Button.js'; //A component that generates a "Previous" or "Next" button.

// import Atlas02 from './Images/atlas02.png'; //7 outfits, male skintone.
// import Atlas03 from './Images/atlas03_2.png'; //8 outfits.
//import Atlas07 from './Images/atlas07.png'; //8 outfits.
// import Atlas18 from './Images/atlas18.png'; //63 hands & gloves, 9 hats, 3 masks.
import Guy35 from './Images/guy35.jpeg';

import './App.css';
import './VaultBoy.scss'; //SASS sheet for VaultBoy body.
import './VaultSuit.scss'; //SASS sheet for VaultBoy body.
import './Atlas01.scss'; //SASS sheet for VG, VB Face sprites.
import './Atlas02.scss'; //SASS sheet for VB Outfits, VB skintone sprites.
import './Atlas03.scss'; //SASS sheet for VB Outfits sprites.
import './Atlas04.scss'; //SASS sheet for VB Outfits sprites.
import './Atlas07.scss'; //SASS sheet for VB Outfits sprites.
import './Atlas17.scss'; //SASS sheet for VB Hair, Hats, and Masks sprites.
import './Atlas18.scss'; //SASS sheet for VG, VB Hands, Gloves, Hats, and Masks sprites.

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_hair: 0, //This stores the current hair array id.
            current_shirt: 0, //This stores the current shirt array id.
            current_pants: 0 //This stores the current pants array id.
        }
        this.handleClick = this.handleClick.bind(this); //This method is for "Prev" and "Next" buttons.
    }


    handleClick(outfitStyle, label) { //This method triggers when the user clicks "Prev" or "Next" buttons.
        console.log("outfitStyle: ", outfitStyle);
        console.log("label: ", label);

        let ourClothes = this.state[outfitStyle]; //Temporarily stores the current_shirt or current_pants.

        if (label === "Next") { //If user clicked "Next" button.
            console.log("Next - ", ourClothes);
            if (ourClothes < clothes.length -1) { //If ourClothes is less than number of items in clothes array, add 1.
                ourClothes = ourClothes + 1;
            } else { //Otherwise, go back to 0.
                ourClothes = 0;
            }
        }

        if (label === "Previous") { //If user clicked "Previous" button.
            console.log("Prev", ourClothes);
            if (ourClothes === 0) { //If ourClothes is 0, go to end of clothes array.
                ourClothes = clothes.length -1;
            } else { //Otherwise, subtract 1.
                ourClothes = ourClothes - 1;
            }
        }

        this.setState({
            [outfitStyle]: ourClothes //Updates current_shirt or current_pants with new value.
        });
        console.log ([outfitStyle] + ":" + ourClothes);
    }

    render() {
    return (
      <div className="App">
            <h1>Current Outfit:</h1>
            <p>Current Shirt: #{this.state.current_shirt}: -- 
            id: {clothes[this.state.current_shirt]['id']} -- 
            atlas: {clothes[this.state.current_shirt]['atlas']} -- 
            name: {clothes[this.state.current_shirt]['name']} shirt
            hem: {clothes[this.state.current_shirt]['hem']}
            </p>

            <p>Current Pants: #{this.state.current_pants}: -- id: {clothes[this.state.current_pants]['id']} -- atlas: {clothes[this.state.current_pants]['atlas']} -- name: {clothes[this.state.current_pants]['name']} pants</p>
            
            <p>Total Number of Shirts, and Pants: {clothes.length}</p>
            

        <img id="guy35" src={Guy35} alt="Hey!"/>

        <div id="vaultSuit"> {/*Vault Suit and Vault Boy*/}
            <div id="vs_frontArm">
                <div className={'vs_frontarm_lowerhalf atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_frontarm_lowerhalf'}></div>
                <div className={'vs_frontarm_upperhalf atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_frontarm_upperhalf'}></div>
            </div>

            <div id="vs_head">
            </div>

            <div id="vs_torso">
                <div className={'vs_chest atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_chest'}></div>
                
                {(() => {
                    if (clothes[this.state.current_shirt]['hem']) {
                        return <div className='vs_hem'>
                                    <div className={'vs_fronthem atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_front_hem'}></div>
                                    <div className={'vs_backhem atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_back_hem'}></div>
                                </div>
                    }
                })()}
            </div>

            <div id="vs_frontLeg">
                <div className={'vs_frontleg_upperhalf atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_frontleg_upperhalf'}></div>
                <div className={'vs_frontleg_lowerhalf atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_frontleg_lowerhalf'}></div>
                <div className={'vs_frontleg_foot atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_frontleg_foot'}></div>
            </div>

            <div id="vs_trunk">
                <div className={'vs_crotch atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_crotch'}></div>
            </div>

            <div id="vs_backLeg">
                <div className={'vs_backleg_upperhalf atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_backleg_upperhalf'}></div>
                <div className={'vs_backleg_lowerhalf atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_backleg_lowerhalf'}></div>
                <div className={'vs_backleg_foot atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_backleg_foot'}></div>
            </div>

            <div id="vs_backArm">
                <div className={'vs_backarm_lowerhalf atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_backarm_lowerhalf'}></div>
                <div className={'vs_backarm_upperhalf atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_backarm_upperhalf'}></div>
            </div>

        <div id="vb_frontArm">
            <div className="atlas02" id="outfit7_frontarm_lowerhalf"></div>
            <div className="atlas02" id="outfit7_frontarm_upperhalf"></div>
            <div className="atlas18" id="outfit7_frontarm_handopen"></div>
        </div>

        <div id="vb_head">
            <div className="atlas17 yellow" id="vb_hair1"></div>
            <div className="atlas01" id="vb_face5"></div>
            <div className="atlas02" id="outfit7_head"></div>
        </div>

        <div id="vb_torso">
            <div className="atlas02" id="outfit7_chest"></div> 
        </div>

        <div id="vb_frontLeg">
            <div className="atlas02" id="outfit7_frontleg_upperhalf"></div>
            <div className="atlas02" id="outfit7_frontleg_lowerhalf"></div>
            <div className="atlas02" id="outfit7_frontleg_foot"></div>
        </div>

        <div id="vb_trunk">
            <div className="atlas02" id="outfit7_crotch"></div>
        </div>

        <div id="vb_backLeg">
            <div className="atlas02" id="outfit7_backleg_upperhalf"></div>
            <div className="atlas02" id="outfit7_backleg_lowerhalf"></div>
            <div className="atlas02" id="outfit7_backleg_foot"></div>
        </div>

        <div id="vb_backArm">
            <div className="atlas02" id="outfit7_backarm_lowerhalf"></div>
            <div className="atlas02" id="outfit7_backarm_upperhalf"></div>
            <div className="atlas18" id="outfit7_backarm_handopen"></div>
        </div>
</div>

            {/*<p><div className={'atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_frontarm_lowerhalf'}></div></p>
                        <p><div className={'atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_frontarm_upperhalf'}></div></p>
                        <p><div className={'atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_chest'}></div></p>
                        <p><div className={'atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_backarm_lowerhalf'}></div></p>
                        <p><div className={'atlas' + clothes[this.state.current_shirt]['atlas']} id={clothes[this.state.current_shirt]['id'] + '_backarm_upperhalf'}></div></p>*/}
            <br/>



            {/*<p><div className={'atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_frontleg_upperhalf'}></div></p>
                        <p><div className={'atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_frontleg_lowerhalf'}></div></p>
                        <p><div className={'atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_frontleg_foot'}></div></p>
                        <p><div className={'atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_crotch'}></div></p>
                        <p><div className={'atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_backleg_upperhalf'}></div></p>
                        <p><div className={'atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_backleg_lowerhalf'}></div></p>
                        <p><div className={'atlas' + clothes[this.state.current_pants]['atlas']} id={clothes[this.state.current_pants]['id'] + '_backleg_foot'}></div></p>*/}


            <Button id={this.state.current_shirt} outfitStyle="current_hair" label="Previous" clicker={this.handleClick} />
            <Button id={this.state.current_shirt} outfitStyle="current_hair" label="Next" clicker={this.handleClick} />
            <br/>
            <Button id={this.state.current_shirt} outfitStyle="current_shirt" label="Previous" clicker={this.handleClick} />
            <Button id={this.state.current_shirt} outfitStyle="current_shirt" label="Next" clicker={this.handleClick} />
            <br/>
            <Button id={this.state.current_pants} outfitStyle="current_pants" label="Previous" clicker={this.handleClick} />
            <Button id={this.state.current_pants} outfitStyle="current_pants" label="Next" clicker={this.handleClick} />


















































        {/*<div id="avatarWindow">
            <div id="avatarBody">
                           <div className="atlas02 frontarm_upperhalf" id="outfit1_backarm_upperhalf"></div>
                           <div className="atlas02 frontarm_lowerhalf" id="outfit1_backarm_lowerhalf"></div>
           
                           <div className="atlas02 frontleg_upperhalf" id="outfit1_frontleg_upperhalf"></div>
                           <div className="atlas02 frontleg_lowerhalf" id="outfit1_frontleg_lowerhalf"></div>
           
           
           
                           <div className="atlas02 chest" id="outfit1_chest"></div>
                           <div className="atlas02 crotch" id="outfit1_crotch"></div>
           
                           <div className="atlas02 backarm_upperhalf" id="outfit1_backarm_upperhalf"></div>
                           <div className="atlas02 backarm_lowerhalf" id="outfit1_backarm_lowerhalf"></div>
                       </div>
                   </div>*/}



    <div id="closet02">
            {/* */}
            <div id="outfit1">1 Advanced BoS uniform
                    <div className="atlas02" id="outfit1_backleg_upperhalf"></div>
                    <div className="atlas02" id="outfit1_backleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit1_backleg_foot"></div>

                    <div className="atlas02" id="outfit1_frontleg_upperhalf"></div>
                    <div className="atlas02" id="outfit1_frontleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit1_frontleg_foot"></div>

                    <div className="atlas02" id="outfit1_chest"></div>
                    <div className="atlas02" id="outfit1_crotch"></div>

                    <div className="atlas02" id="outfit1_backarm_lowerhalf"></div>
                     <div className="atlas02" id="outfit1_backarm_upperhalf"></div>

                    <div className="atlas02" id="outfit1_frontarm_lowerhalf"></div>
                    <div className="atlas02" id="outfit1_frontarm_upperhalf"></div>
                    </div>

            <div id="outfit2">Outfit2 - Expert BoS uniform
                    <div className="atlas02" id="outfit2_backleg_upperhalf"></div>
                    <div className="atlas02" id="outfit2_backleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit2_backleg_foot"></div>

                        <div className="atlas02" id="outfit2_frontleg_upperhalf"></div>
                        <div className="atlas02" id="outfit2_frontleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit2_frontleg_foot"></div>

                        <div className="atlas02" id="outfit2_chest"></div>
                        <div className="atlas02" id="outfit2_crotch"></div>

                        <div className="atlas02" id="outfit2_backarm_lowerhalf"></div>
                        <div className="atlas02" id="outfit2_backarm_upperhalf"></div>

                    <div className="atlas02" id="outfit2_frontarm_lowerhalf"></div>
                    <div className="atlas02" id="outfit2_frontarm_upperhalf"></div>
                    </div>

            <div id="outfit3">Outfit 3 - Clergy outfit
                    <div className="atlas02" id="outfit3_backleg_upperhalf"></div>
                    <div className="atlas02" id="outfit3_backleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit3_backleg_foot"></div>

                        <div className="atlas02" id="outfit3_frontleg_upperhalf"></div>
                        <div className="atlas02" id="outfit3_frontleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit3_frontleg_foot"></div>

                        <div className="atlas02" id="outfit3_chest"></div>
                        <div className="atlas02" id="outfit3_crotch"></div>

                        <div className="atlas02" id="outfit3_backarm_lowerhalf"></div>
                        <div className="atlas02" id="outfit3_backarm_upperhalf"></div>

                    <div className="atlas02" id="outfit3_frontarm_lowerhalf"></div>
                    <div className="atlas02" id="outfit3_frontarm_upperhalf"></div>

                     <div className="atlas02" id="outfit3_back_hem"></div>
                    <div className="atlas02" id="outfit3_front_hem"></div>
                    </div>

            <div id="outfit4">Outfit 4 - BOS uniform
                    <div className="atlas02" id="outfit4_backleg_upperhalf"></div>
                    <div className="atlas02" id="outfit4_backleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit4_backleg_foot"></div>

                        <div className="atlas02" id="outfit4_frontleg_upperhalf"></div>
                        <div className="atlas02" id="outfit4_frontleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit4_frontleg_foot"></div>

                        <div className="atlas02" id="outfit4_chest"></div>
                        <div className="atlas02" id="outfit4_crotch"></div>

                        <div className="atlas02" id="outfit4_backarm_lowerhalf"></div>
                        <div className="atlas02" id="outfit4_backarm_upperhalf"></div>

                    <div className="atlas02" id="outfit4_frontarm_lowerhalf"></div>
                    <div className="atlas02" id="outfit4_frontarm_upperhalf"></div>
                    </div>

            <div id="outfit5">Outfit 5 - Baseball uniform
                    <div className="atlas02" id="outfit5_backleg_upperhalf"></div>
                    <div className="atlas02" id="outfit5_backleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit5_backleg_foot"></div>

                        <div className="atlas02" id="outfit5_frontleg_upperhalf"></div>
                        <div className="atlas02" id="outfit5_frontleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit5_frontleg_foot"></div>

                        <div className="atlas02" id="outfit5_chest"></div>
                        <div className="atlas02" id="outfit5_crotch"></div>

                        <div className="atlas02" id="outfit5_backarm_lowerhalf"></div>
                        <div className="atlas02" id="outfit5_backarm_upperhalf"></div>

                    <div className="atlas02" id="outfit5_frontarm_lowerhalf"></div>
                    <div className="atlas02" id="outfit5_frontarm_upperhalf"></div>
                    </div>

            <div id="outfit6">Outfit 6 - Battle armor
                    <div className="atlas02" id="outfit6_backleg_upperhalf"></div>
                    <div className="atlas02" id="outfit6_backleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit6_backleg_foot"></div>

                        <div className="atlas02" id="outfit6_frontleg_upperhalf"></div>
                        <div className="atlas02" id="outfit6_frontleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit6_frontleg_foot"></div>

                        <div className="atlas02" id="outfit6_chest"></div>
                        <div className="atlas02" id="outfit6_crotch"></div>

                        <div className="atlas02" id="outfit6_backarm_lowerhalf"></div>
                        <div className="atlas02" id="outfit6_backarm_upperhalf"></div>

                    <div className="atlas02" id="outfit6_frontarm_lowerhalf"></div>
                    <div className="atlas02" id="outfit6_frontarm_upperhalf"></div>
                    </div>

            <div id="outfit7">Outfit 7 - (The Male Body)
                    <div className="atlas02" id="outfit7_backleg_upperhalf"></div>
                    <div className="atlas02" id="outfit7_backleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit7_backleg_foot"></div>

                        <div className="atlas02" id="outfit7_frontleg_upperhalf"></div>
                        <div className="atlas02" id="outfit7_frontleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit7_frontleg_foot"></div>

                        <div className="atlas02" id="outfit7_chest"></div>
                        <div className="atlas02" id="outfit7_crotch"></div>

                        <div className="atlas02" id="outfit7_backarm_lowerhalf"></div>
                        <div className="atlas02" id="outfit7_backarm_upperhalf"></div>

                    <div className="atlas02" id="outfit7_frontarm_lowerhalf"></div>
                    <div className="atlas02" id="outfit7_frontarm_upperhalf"></div>

                    <div className="atlas02" id="outfit7_head"></div>
                    </div>

                    <div className="atlas18" id="outfit7_fronthand_open"></div>

            <div id="outfit8">Outfit 8 - Tenpenny's Suit
                    <div className="atlas02" id="outfit8_backleg_upperhalf"></div>
                    <div className="atlas02" id="outfit8_backleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit8_backleg_foot"></div>

                        <div className="atlas02" id="outfit8_frontleg_upperhalf"></div>
                        <div className="atlas02" id="outfit8_frontleg_lowerhalf"></div>
                    <div className="atlas02" id="outfit8_frontleg_foot"></div>

                        <div className="atlas02" id="outfit8_chest"></div>
                        <div className="atlas02" id="outfit8_crotch"></div>

                        <div className="atlas02" id="outfit8_backarm_lowerhalf"></div>
                        <div className="atlas02" id="outfit8_backarm_upperhalf"></div>

                    <div className="atlas02" id="outfit8_frontarm_lowerhalf"></div>
                    <div className="atlas02" id="outfit8_frontarm_upperhalf"></div>
                 </div>
    </div>

    <div id="closet03">
                <div id="outfit9">Outfit 9 - (That's a Nice Shirt)
                    <div className="atlas03" id="outfit9_backleg_upperhalf"></div>
                    <div className="atlas03" id="outfit9_backleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit9_backleg_foot"></div>

                        <div className="atlas03" id="outfit9_frontleg_upperhalf"></div>
                        <div className="atlas03" id="outfit9_frontleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit9_frontleg_foot"></div>

                        <div className="atlas03" id="outfit9_chest"></div>
                        <div className="atlas03" id="outfit9_crotch"></div>

                        <div className="atlas03" id="outfit9_backarm_upperhalf"></div>

                    <div className="atlas03" id="outfit9_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit10">Outfit 10 - (Sweater Vest with tie)
                    <div className="atlas03" id="outfit10_backleg_upperhalf"></div>
                    <div className="atlas03" id="outfit10_backleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit10_backleg_foot"></div>

                        <div className="atlas03" id="outfit10_frontleg_upperhalf"></div>
                        <div className="atlas03" id="outfit10_frontleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit10_frontleg_foot"></div>

                        <div className="atlas03" id="outfit10_chest"></div>
                        <div className="atlas03" id="outfit10_crotch"></div>

                        <div className="atlas03" id="outfit10_backarm_lowerhalf"></div>
                        <div className="atlas03" id="outfit10_backarm_upperhalf"></div>

                    <div className="atlas03" id="outfit10_frontarm_lowerhalf"></div>
                    <div className="atlas03" id="outfit10_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit11">Outfit 11 - (Sweater Vest)
                    <div className="atlas03" id="outfit11_backleg_upperhalf"></div>
                    <div className="atlas03" id="outfit11_backleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit11_backleg_foot"></div>

                        <div className="atlas03" id="outfit11_frontleg_upperhalf"></div>
                        <div className="atlas03" id="outfit11_frontleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit11_frontleg_foot"></div>

                        <div className="atlas03" id="outfit11_chest"></div>
                        <div className="atlas03" id="outfit11_crotch"></div>

                        <div className="atlas03" id="outfit11_backarm_lowerhalf"></div>
                        <div className="atlas03" id="outfit11_backarm_upperhalf"></div>

                    <div className="atlas03" id="outfit11_frontarm_lowerhalf"></div>
                    <div className="atlas03" id="outfit11_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit12">Outfit 12 - (Flight Suit)
                    <div className="atlas03" id="outfit12_backleg_upperhalf"></div>
                    <div className="atlas03" id="outfit12_backleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit12_backleg_foot"></div>

                        <div className="atlas03" id="outfit12_frontleg_upperhalf"></div>
                        <div className="atlas03" id="outfit12_frontleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit12_frontleg_foot"></div>

                        <div className="atlas03" id="outfit12_chest"></div>
                        <div className="atlas03" id="outfit12_crotch"></div>

                        <div className="atlas03" id="outfit12_backarm_lowerhalf"></div>
                        <div className="atlas03" id="outfit12_backarm_upperhalf"></div>

                    <div className="atlas03" id="outfit12_frontarm_lowerhalf"></div>
                    <div className="atlas03" id="outfit12_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit13">Outfit 13 - (Autumn's uniform)
                    <div className="atlas03" id="outfit13_backleg_upperhalf"></div>
                    <div className="atlas03" id="outfit13_backleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit13_backleg_foot"></div>

                        <div className="atlas03" id="outfit13_frontleg_upperhalf"></div>
                        <div className="atlas03" id="outfit13_frontleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit13_frontleg_foot"></div>

                        <div className="atlas03" id="outfit13_chest"></div>
                        <div className="atlas03" id="outfit13_crotch"></div>

                        <div className="atlas03" id="outfit13_backarm_lowerhalf"></div>
                        <div className="atlas03" id="outfit13_backarm_upperhalf"></div>

                    <div className="atlas03" id="outfit13_frontarm_lowerhalf"></div>
                    <div className="atlas03" id="outfit13_frontarm_upperhalf"></div>

                     <div className="atlas03" id="outfit13_back_hem"></div>
                    <div className="atlas03" id="outfit13_front_hem"></div>
                    </div>

                <div id="outfit14">Outfit 14 - (Combat Armor)
                    <div className="atlas03" id="outfit14_backleg_upperhalf"></div>
                    <div className="atlas03" id="outfit14_backleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit14_backleg_foot"></div>

                        <div className="atlas03" id="outfit14_frontleg_upperhalf"></div>
                        <div className="atlas03" id="outfit14_frontleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit14_frontleg_foot"></div>

                        <div className="atlas03" id="outfit14_chest"></div>
                        <div className="atlas03" id="outfit14_crotch"></div>

                        <div className="atlas03" id="outfit14_backarm_lowerhalf"></div>
                        <div className="atlas03" id="outfit14_backarm_upperhalf"></div>

                    <div className="atlas03" id="outfit14_frontarm_lowerhalf"></div>
                    <div className="atlas03" id="outfit14_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit15">Outfit 15 - (Tunnel Snake's outfit)
                    <div className="atlas03" id="outfit15_backleg_upperhalf"></div>
                    <div className="atlas03" id="outfit15_backleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit15_backleg_foot"></div>

                        <div className="atlas03" id="outfit15_frontleg_upperhalf"></div>
                        <div className="atlas03" id="outfit15_frontleg_lowerhalf"></div>
                    <div className="atlas03" id="outfit15_frontleg_foot"></div>

                        <div className="atlas03" id="outfit15_chest"></div>
                        <div className="atlas03" id="outfit15_crotch"></div>

                        <div className="atlas03" id="outfit15_backarm_lowerhalf"></div>
                        <div className="atlas03" id="outfit15_backarm_upperhalf"></div>

                    <div className="atlas03" id="outfit15_frontarm_lowerhalf"></div>
                    <div className="atlas03" id="outfit15_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit16">Outfit 16 - (Ex Con's outfit)
                <div className="atlas03" id="outfit16_backleg_upperhalf"></div>
                <div className="atlas03" id="outfit16_backleg_lowerhalf"></div>
                <div className="atlas03" id="outfit16_backleg_foot"></div>

                <div className="atlas03" id="outfit16_frontleg_upperhalf"></div>
                <div className="atlas03" id="outfit16_frontleg_lowerhalf"></div>
                <div className="atlas03" id="outfit16_frontleg_foot"></div>

                <div className="atlas03" id="outfit16_chest"></div>
                <div className="atlas03" id="outfit16_crotch"></div>

                {/*<div className="atlas03" id="outfit16_backarm_lowerhalf"></div>*/}
                <div className="atlas03" id="outfit16_backarm_upperhalf"></div>

                <div className="atlas03" id="outfit16_frontarm_lowerhalf"></div>
                <div className="atlas03" id="outfit16_frontarm_upperhalf"></div>
                </div>
    </div>

    <div id="closet04">
                <div id="outfit17">Outfit 17 - Confessor Cromwell
                    <div className="atlas04" id="outfit17_backleg_upperhalf"></div>
                    <div className="atlas04" id="outfit17_backleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit17_backleg_foot"></div>

                        <div className="atlas04" id="outfit17_frontleg_upperhalf"></div>
                        <div className="atlas04" id="outfit17_frontleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit17_frontleg_foot"></div>

                        <div className="atlas04" id="outfit17_chest"></div>
                        <div className="atlas04" id="outfit17_crotch"></div>

                        <div className="atlas04" id="outfit17_backarm_lowerhalf"></div>
                        <div className="atlas04" id="outfit17_backarm_upperhalf"></div>

                    <div className="atlas04" id="outfit17_frontarm_lowerhalf"></div>
                    <div className="atlas04" id="outfit17_frontarm_upperhalf"></div>

                    <div className="atlas04" id="outfit17_back_hem"></div>
                    <div className="atlas04" id="outfit17_front_hem"></div>
                    
                    
                    </div>

                <div id="outfit18">Outfit 18 - Elf outfit ----
                    <div className="atlas04" id="outfit18_backleg_upperhalf"></div>
                    <div className="atlas04" id="outfit18_backleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit18_backleg_foot"></div>

                        <div className="atlas04" id="outfit18_frontleg_upperhalf"></div>
                        <div className="atlas04" id="outfit18_frontleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit18_frontleg_foot"></div>

                        <div className="atlas04" id="outfit18_chest"></div>
                        <div className="atlas04" id="outfit18_crotch"></div>

                        <div className="atlas04" id="outfit18_backarm_lowerhalf"></div>
                        <div className="atlas04" id="outfit18_backarm_upperhalf"></div>

                    <div className="atlas04" id="outfit18_frontarm_lowerhalf"></div>
                    <div className="atlas04" id="outfit18_frontarm_upperhalf"></div>

                    <div className="atlas04" id="outfit18_back_hem"></div>
                    <div className="atlas04" id="outfit18_front_hem"></div>

                    </div>

                <div id="outfit19">Outfit 19 - Motorcycle Jacket
                    <div className="atlas04" id="outfit19_backleg_upperhalf"></div>
                    <div className="atlas04" id="outfit19_backleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit19_backleg_foot"></div>

                        <div className="atlas04" id="outfit19_frontleg_upperhalf"></div>
                        <div className="atlas04" id="outfit19_frontleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit19_frontleg_foot"></div>

                        <div className="atlas04" id="outfit19_chest"></div>
                        <div className="atlas04" id="outfit19_crotch"></div>

                        <div className="atlas04" id="outfit19_backarm_lowerhalf"></div>
                        <div className="atlas04" id="outfit19_backarm_upperhalf"></div>

                    <div className="atlas04" id="outfit19_frontarm_lowerhalf"></div>
                    <div className="atlas04" id="outfit19_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit20">Outfit 20 - Business Suit
                    <div className="atlas04" id="outfit20_backleg_upperhalf"></div>
                    <div className="atlas04" id="outfit20_backleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit20_backleg_foot"></div>

                        <div className="atlas04" id="outfit20_frontleg_upperhalf"></div>
                        <div className="atlas04" id="outfit20_frontleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit20_frontleg_foot"></div>

                        <div className="atlas04" id="outfit20_chest"></div>
                        <div className="atlas04" id="outfit20_crotch"></div>

                        <div className="atlas04" id="outfit20_backarm_lowerhalf"></div>
                        <div className="atlas04" id="outfit20_backarm_upperhalf"></div>

                    <div className="atlas04" id="outfit20_frontarm_lowerhalf"></div>
                    <div className="atlas04" id="outfit20_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit21">Outfit 21 - (Rad Suspenders)
                    <div className="atlas04" id="outfit21_backleg_upperhalf"></div>
                    <div className="atlas04" id="outfit21_backleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit21_backleg_foot"></div>

                        <div className="atlas04" id="outfit21_frontleg_upperhalf"></div>
                        <div className="atlas04" id="outfit21_frontleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit21_frontleg_foot"></div>

                        <div className="atlas04" id="outfit21_chest"></div>
                        <div className="atlas04" id="outfit21_crotch"></div>

                        <div className="atlas04" id="outfit21_backarm_upperhalf"></div>

                    <div className="atlas04" id="outfit21_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit22">Outfit 22 - (Pre-War Intellectual)
                    <div className="atlas04" id="outfit22_backleg_upperhalf"></div>
                    <div className="atlas04" id="outfit22_backleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit22_backleg_foot"></div>

                        <div className="atlas04" id="outfit22_frontleg_upperhalf"></div>
                        <div className="atlas04" id="outfit22_frontleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit22_frontleg_foot"></div>

                        <div className="atlas04" id="outfit22_chest"></div>
                        <div className="atlas04" id="outfit22_crotch"></div>

                        <div className="atlas04" id="outfit22_backarm_lowerhalf"></div>
                        <div className="atlas04" id="outfit22_backarm_upperhalf"></div>

                    <div className="atlas04" id="outfit22_frontarm_lowerhalf"></div>
                    <div className="atlas04" id="outfit22_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit23">Outfit 23 - (Sci-fi fan outfit)
                    <div className="atlas04" id="outfit23_backleg_upperhalf"></div>
                    <div className="atlas04" id="outfit23_backleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit23_backleg_foot"></div>

                        <div className="atlas04" id="outfit23_frontleg_upperhalf"></div>
                        <div className="atlas04" id="outfit23_frontleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit23_frontleg_foot"></div>

                        <div className="atlas04" id="outfit23_chest"></div>
                        <div className="atlas04" id="outfit23_crotch"></div>

                        <div className="atlas04" id="outfit23_backarm_lowerhalf"></div>
                        <div className="atlas04" id="outfit23_backarm_upperhalf"></div>

                    <div className="atlas04" id="outfit23_frontarm_lowerhalf"></div>
                    <div className="atlas04" id="outfit23_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit24">Outfit 24 - (Ex Con's outfit)
                    <div className="atlas04" id="outfit24_backleg_upperhalf"></div>
                    <div className="atlas04" id="outfit24_backleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit24_backleg_foot"></div>

                    <div className="atlas04" id="outfit24_frontleg_upperhalf"></div>
                    <div className="atlas04" id="outfit24_frontleg_lowerhalf"></div>
                    <div className="atlas04" id="outfit24_frontleg_foot"></div>

                    <div className="atlas04" id="outfit24_chest"></div>
                    <div className="atlas04" id="outfit24_crotch"></div>

                    <div className="atlas04" id="outfit24_backarm_upperhalf"></div>

                <div className="atlas04" id="outfit24_frontarm_upperhalf"></div>
        </div>

    </div>

    <div id="closet07">
                <div id="outfit41">Outfit 41 - Minutemen uniform
                    <div className="atlas07" id="outfit41_backleg_upperhalf"></div>
                    <div className="atlas07" id="outfit41_backleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit41_backleg_foot"></div>

                        <div className="atlas07" id="outfit41_frontleg_upperhalf"></div>
                        <div className="atlas07" id="outfit41_frontleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit41_frontleg_foot"></div>

                        <div className="atlas07" id="outfit41_chest"></div>
                        <div className="atlas07" id="outfit41_crotch"></div>

                        <div className="atlas07" id="outfit41_backarm_lowerhalf"></div>
                        <div className="atlas07" id="outfit41_backarm_upperhalf"></div>

                    <div className="atlas07" id="outfit41_frontarm_lowerhalf"></div>
                    <div className="atlas07" id="outfit41_frontarm_upperhalf"></div>

                    <div className="atlas07" id="outfit41_back_hem"></div>
                    <div className="atlas07" id="outfit41_front_hem"></div>
                    </div>

                <div id="outfit42">Outfit 42 - Raider armor
                    <div className="atlas07" id="outfit42_backleg_upperhalf"></div>
                    <div className="atlas07" id="outfit42_backleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit42_backleg_foot"></div>

                        <div className="atlas07" id="outfit42_frontleg_upperhalf"></div>
                        <div className="atlas07" id="outfit42_frontleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit42_frontleg_foot"></div>

                        <div className="atlas07" id="outfit42_chest"></div>
                        <div className="atlas07" id="outfit42_crotch"></div>

                        <div className="atlas07" id="outfit42_backarm_lowerhalf"></div>
                        

                    <div className="atlas07" id="outfit42_frontarm_lowerhalf"></div>
                    <div className="atlas07" id="outfit42_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit43">Outfit 43 - T-60 power armor
                    <div className="atlas07" id="outfit43_backleg_upperhalf"></div>
                    <div className="atlas07" id="outfit43_backleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit43_backleg_foot"></div>

                        <div className="atlas07" id="outfit43_frontleg_upperhalf"></div>
                        <div className="atlas07" id="outfit43_frontleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit43_frontleg_foot"></div>

                        <div className="atlas07" id="outfit43_chest"></div>
                        <div className="atlas07" id="outfit43_crotch"></div>

                        <div className="atlas07" id="outfit43_backarm_lowerhalf"></div>
                        <div className="atlas07" id="outfit43_backarm_upperhalf"></div>

                    <div className="atlas07" id="outfit43_frontarm_lowerhalf"></div>
                    <div className="atlas07" id="outfit43_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit44">Outfit 44 - X-01 Mk VI power armor
                    <div className="atlas07" id="outfit44_backleg_upperhalf"></div>
                    <div className="atlas07" id="outfit44_backleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit44_backleg_foot"></div>

                        <div className="atlas07" id="outfit44_frontleg_upperhalf"></div>
                        <div className="atlas07" id="outfit44_frontleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit44_frontleg_foot"></div>

                        <div className="atlas07" id="outfit44_chest"></div>
                        <div className="atlas07" id="outfit44_crotch"></div>

                        <div className="atlas07" id="outfit44_backarm_lowerhalf"></div>
                        <div className="atlas07" id="outfit44_backarm_upperhalf"></div>

                    <div className="atlas07" id="outfit44_frontarm_lowerhalf"></div>
                    <div className="atlas07" id="outfit44_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit45">Outfit 45 - T-45 power armor
                    <div className="atlas07" id="outfit45_backleg_upperhalf"></div>
                    <div className="atlas07" id="outfit45_backleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit45_backleg_foot"></div>

                        <div className="atlas07" id="outfit45_frontleg_upperhalf"></div>
                        <div className="atlas07" id="outfit45_frontleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit45_frontleg_foot"></div>

                        <div className="atlas07" id="outfit45_chest"></div>
                        <div className="atlas07" id="outfit45_crotch"></div>

                        <div className="atlas07" id="outfit45_backarm_lowerhalf"></div>
                        <div className="atlas07" id="outfit45_backarm_upperhalf"></div>

                    <div className="atlas07" id="outfit45_frontarm_lowerhalf"></div>
                    <div className="atlas07" id="outfit45_frontarm_upperhalf"></div>

                    </div>

                <div id="outfit46">Outfit 46 - (T-51 power armor)
                    <div className="atlas07" id="outfit46_backleg_upperhalf"></div>
                    <div className="atlas07" id="outfit46_backleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit46_backleg_foot"></div>

                        <div className="atlas07" id="outfit46_frontleg_upperhalf"></div>
                        <div className="atlas07" id="outfit46_frontleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit46_frontleg_foot"></div>

                        <div className="atlas07" id="outfit46_chest"></div>
                        <div className="atlas07" id="outfit46_crotch"></div>

                        <div className="atlas07" id="outfit46_backarm_lowerhalf"></div>
                        <div className="atlas07" id="outfit46_backarm_upperhalf"></div>

                    <div className="atlas07" id="outfit46_frontarm_lowerhalf"></div>
                    <div className="atlas07" id="outfit46_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit47">Outfit 47 - (Nightwear)
                    <div className="atlas07" id="outfit47_backleg_upperhalf"></div>
                    <div className="atlas07" id="outfit47_backleg_lowerhalf"></div>
                    

                        <div className="atlas07" id="outfit47_frontleg_upperhalf"></div>
                        <div className="atlas07" id="outfit47_frontleg_lowerhalf"></div>
                    

                        <div className="atlas07" id="outfit47_chest"></div>
                        <div className="atlas07" id="outfit47_crotch"></div>

                        <div className="atlas07" id="outfit47_backarm_lowerhalf"></div>
                        <div className="atlas07" id="outfit47_backarm_upperhalf"></div>

                    <div className="atlas07" id="outfit47_frontarm_lowerhalf"></div>
                    <div className="atlas07" id="outfit47_frontarm_upperhalf"></div>
                    </div>

                <div id="outfit48">Outfit 48 - Pilgrim's outfit
                    <div className="atlas07" id="outfit48_backleg_upperhalf"></div>
                    <div className="atlas07" id="outfit48_backleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit48_backleg_foot"></div>

                    <div className="atlas07" id="outfit48_frontleg_upperhalf"></div>
                    <div className="atlas07" id="outfit48_frontleg_lowerhalf"></div>
                    <div className="atlas07" id="outfit48_frontleg_foot"></div>

                    <div className="atlas07" id="outfit48_chest"></div>
                    <div className="atlas07" id="outfit48_crotch"></div>

                    <div className="atlas07" id="outfit48_backarm_lowerhalf"></div>
                    <div className="atlas07" id="outfit48_backarm_upperhalf"></div>

                    <div className="atlas07" id="outfit48_frontarm_lowerhalf"></div>
                <div className="atlas07" id="outfit48_frontarm_upperhalf"></div>

                                    <div className="atlas07" id="outfit48_back_hem"></div>
                    <div className="atlas07" id="outfit48_front_hem"></div>
    </div>


        </div>
      </div>
    );
  }
}

export default App;
