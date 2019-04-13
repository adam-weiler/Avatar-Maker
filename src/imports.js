/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //The Font Awesome component for icons.
import { faDice } from '@fortawesome/free-solid-svg-icons'; //A single Dice icon.
// import { faLink } from '@fortawesome/free-solid-svg-icons';


/* All JSON files. */
/* Male and Female JSONs */
import { all_races } from './JSON/all_races'; //Contains data about skincolor.
import { all_styles } from './JSON/all_styles'; //Contains data about each style. (Clothes, hair, beard, headwear, feature, face, gloves.)
import { genders } from './JSON/genders'; //Contains data about Genders.
import { hair_colours } from './JSON/hair_colours'; //Contains data about hair Colours.

/* Male JSON files */
import { male_beards } from './JSON/Male/male_beards'; //Contains data about Beards.
import { male_clothes } from './JSON/Male/male_clothes'; //Contains data about Shirts & Pants.
import { male_faces } from './JSON/Male/male_faces'; //Contains data about Faces.
import { male_features } from './JSON/Male/male_features'; //Contains data about Features.
import { male_gloves } from './JSON/Male/male_gloves'; //Contains data about Gloves for Vault Boy.
import { male_hair } from './JSON/Male/male_hair'; //Contains data about Hairstyles.
import { male_hands } from './JSON/Male/male_hands'; //Contains data about Hands. (No gloves.)
import { male_headwear } from './JSON/Male/male_headwear'; //Contains data about Headwear.

/* Female JSON files */
import { female_clothes } from './JSON/Female/female_clothes'; //Contains data about Shirts & Pants.
import { female_faces } from './JSON/Female/female_faces'; //Contains data about Faces.
import { female_features } from './JSON/Female/female_features'; //Contains data about Features.
import { female_gloves } from './JSON/Female/female_gloves'; //Contains data about Gloves for Vault Boy.
import { female_hair } from './JSON/Female/female_hair'; //Contains data about Hairstyles.
import { female_hands } from './JSON/Female/female_hands'; //Contains data about Hands. (No gloves.)
import { female_headwear } from './JSON/Female/female_headwear'; //Contains data about Headwear.


/* Components */
import AvatarWindow from './Components/AvatarWindow/AvatarWindow.js'; //Generates the div where the avatar is shown. (Includes VaultSuit and VaultPerson.)
import Button from './Components/Button/Button.js'; //Generates a "Previous" or "Next" button.
import Logo from './Components/Logo/Logo.js'; //The div which displays the Logo.
import MainButtons from './Components/MainButtons/MainButtons.js'; //The div where the majority of the Buttons live.
import MainSelections from './Components/MainSelections/MainSelections.js'; //The div that shows the names for the majority of the Selections.
import MinorButtons from './Components/MinorButtons/MinorButtons.js'; //The div where the Gender, Race, Age buttons live.
import MinorSelections from './Components/MinorSelections/MinorSelections.js'; //The div that shows the names for the Gender, Race, and Age Selections.
import SegmentPiece from './Components/AvatarWindow/SegmentPiece/SegmentPiece.js'; //Generates a segment piece for the Vault Person or Suit.
import VaultPerson from './Components/AvatarWindow/VaultPerson/VaultPerson.js';
import VaultSuit from './Components/AvatarWindow/VaultSuit/VaultSuit.js';


/* Images */
import LogoImage from './Images/Fallout_Shelter_logo.png'; //The Logo image itself.


/* CSS files */
import './App.css'; //Store CSS with Relative or Absolute paths here.
import './index.css'; //Store other CSS here.
import './Components/MinorButtons/MinorButtons.css'; //Styles for MinorButton div; Gender, Race, Age, Random.


/* SASS files */
/* Atlas sheets */
import './SASS/Atlas01.scss'; //Faces and Features for Vault Girl. Beards, Faces, and Features for Vault Boy.
import './SASS/Atlas02.scss'; //Outfits and Skintone for Vault Boy.
import './SASS/Atlas03.scss'; //Outfits for Vault Boy.
import './SASS/Atlas04.scss'; //Outfits for Vault Boy.
import './SASS/Atlas05.scss'; //Outfits for Vault Boy.
import './SASS/Atlas06.scss'; //Outfits for Vault Boy.
import './SASS/Atlas07.scss'; //Outfits for Vault Boy.
import './SASS/Atlas08.scss'; //Outfits for Vault Boy.
import './SASS/Atlas09.scss'; //Outfits and Skintone for Vault Girl. Outfits for Vault Boy.
import './SASS/Atlas10.scss'; //Outfits for Vault Girl.

//import './SASS/Atlas11.scss'; //Outfits for Vault Girl.
//import './SASS/Atlas12.scss'; //Outfits for Vault Girl.
//import './SASS/Atlas13.scss'; //Outfits for Vault Girl.
//import './SASS/Atlas14.scss'; //Outfits for Vault Girl.
//import './SASS/Atlas15.scss'; //Outfits for Vault Girl.
import './SASS/Atlas16.scss'; //Hair, Headwear, and Outfit for Vault Girl.				//Features?

import './SASS/Atlas17.scss'; //Headwear for Vault Girl. Hair and Headwear for Vault Boy.		//Features?
import './SASS/Atlas18.scss'; //Gloves and Hand Skintone for Vault Girl. Gloves, Hand Skintone and Headwear for Vault Boy.		//Features?
import './SASS/Atlas21.scss'; //Headwear and Objects.
import './SASS/FeralGhoul.scss'; //Feral Ghoul Skintone/Outfit.
import './SASS/Mysterious.scss'; //Mysterious Stranger Skintone/Outfit.

/* Various Avatar sheets */
import './SASS/allRaces.scss'; //In-game and custom Skintone filters.
import './SASS/FalloutPerson.scss'; //Styles shared between Vault Boy, Vault Girl, and Vault Suit.
import './SASS/hairColours.scss'; //In-game and custome Hair Colour filters.
import './SASS/VaultBoy.scss'; //Styles for Vault Boy.
import './SASS/VaultGirl.scss'; //Styles for Vault Girl.
import './SASS/VaultSuit.scss'; //Styles for Vault Suit.


export {
	FontAwesomeIcon,
	faDice,

	all_races,
	all_styles,
	genders,
	hair_colours,

	male_beards,
	male_clothes,
	male_faces,
	male_features,
	male_gloves,
	male_hair,
	male_hands,
	male_headwear,

	female_clothes,
	female_faces,
	female_features,
	female_gloves,
	female_hair,
	female_hands,
	female_headwear,

	AvatarWindow,
	Button,
	Logo,
	MainButtons,
	MainSelections,
	MinorButtons,
	MinorSelections,
	SegmentPiece,
	VaultSuit,
	VaultPerson,

	LogoImage
}