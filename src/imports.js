/* Font Awesome */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// import { faLink } from '@fortawesome/free-solid-svg-icons';


/* All JSON files. */
/* Male and Female JSONs */
import { all_races } from './JSON/all_races'; //Contains data about skincolor.
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
import AvatarWindow from './Components/AvatarWindow/AvatarWindow.js'; //The div where the avatar is shown.
import Button from './Components/Button/Button.js'; //Generates a "Previous" or "Next" button.
import GenderRaceAge from './Components/GenderRaceAge/GenderRaceAge.js'; //The div where the Gender, Race, Age buttons live.
import Logo from './Components/Logo/Logo.js'; //The div which displays the Logo.
import MainButtons from './Components/MainButtons/MainButtons.js'; //The div where the majority of the Buttons live.
import SegmentPiece from './Components/SegmentPiece/SegmentPiece.js'; //Generates a segment piece for the Vault Person or Suit.

/* Images */
import LogoImage from './Images/Fallout_Shelter_logo.png'; //The Logo image itself.

/* CSS files */
import './App.css'; //Store CSS with Relative or Absolute paths here.
import './index.css'; //Store other CSS here.



/* SASS files */


export {
	faDice,

	all_races,
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
	GenderRaceAge,
	Logo,
	MainButtons,
	SegmentPiece,

	LogoImage
}