//const face = current_gender === 0 ? male_faces : female_faces;

const default_state = { //The default state Vault Person when program loads, or when user clicks Reset. Gender and Mode not included.
	current_beard: 0, //Initially loads no Beard, 0.
	current_face: 1, //Initially loads Happy, 1.
	current_feature: 0, //Initially loads no Feature, 0.
	// current_gender: 0, //Initially loads male Vault-Boy, 0.
	current_gloves: 0, //Initially loads no Gloves, 0.
	current_hair: 0, //Initially loads Tunnel Snake Hairstyle, 0.
	current_hair_colour: 27, //Initially loads Blonde, 27.
	current_headwear: 0, //Initially loads no Headwear, 0.
	//current_mode: 0, //Initially loads Basic mode, 0.
	current_pants: 38, //Initally loads Vault Suit, 38
	current_race: 1, //Stores Skintone. Initially loads caucasian Skintone, 1.
	current_shirt: 38 //Initally loads Vault Suit, 38.
}

export {
	default_state
}